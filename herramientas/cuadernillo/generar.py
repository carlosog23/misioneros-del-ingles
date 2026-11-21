# -*- coding: utf-8 -*-
"""
Genera el Cuadernillo del alumno de Misioneros del Inglés a partir del contenido de la plataforma.

  node herramientas/cuadernillo/exportar.mjs /tmp/cuad.json
  python3 herramientas/cuadernillo/generar.py /tmp/cuad.json

Escribe:
  cuadernillo/cuadernillo-alumno.pdf
  js/paginas-cuadernillo.js   (páginas de cada unidad, bloque y actividad, para que la plataforma remita a la página correcta)

Se arma dos veces: la primera para saber en qué página cae cada cosa y la segunda para escribir esas páginas
en el calendario del cuadernillo.
"""
import json, os, re, sys, random, hashlib
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
                                KeepTogether, PageBreak, Flowable, NextPageTemplate, Image as RLImage)
from PIL import Image, ImageDraw, ImageFont

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, '..', '..'))
CACHE = os.path.join('/tmp', 'cuadernillo-emoji')
os.makedirs(CACHE, exist_ok=True)

# ---------------- fuentes y colores ----------------
F = '/usr/share/fonts/truetype/'
for n, p in [('Poppins-Bold', 'google-fonts/Poppins-Bold.ttf'), ('Poppins-Medium', 'google-fonts/Poppins-Medium.ttf'),
             ('Carlito', 'crosextra/Carlito-Regular.ttf'), ('Carlito-Bold', 'crosextra/Carlito-Bold.ttf'),
             ('Carlito-Italic', 'crosextra/Carlito-Italic.ttf'), ('Carlito-BoldItalic', 'crosextra/Carlito-BoldItalic.ttf')]:
    pdfmetrics.registerFont(TTFont(n, F + p))
pdfmetrics.registerFontFamily('Carlito', normal='Carlito', bold='Carlito-Bold', italic='Carlito-Italic', boldItalic='Carlito-BoldItalic')

MARINO = colors.HexColor('#0F3B5F'); MARINO2 = colors.HexColor('#0A2840')
NARANJA = colors.HexColor('#E8772E'); NARANJA_OSC = colors.HexColor('#B4521A')
CIELO = colors.HexColor('#E8F3F8'); CIELO2 = colors.HexColor('#D6E9F2')
CREMA = colors.HexColor('#FFF2E3'); GRIS = colors.HexColor('#4A5866'); BORDE = colors.HexColor('#C9D6E0')
LINEA = colors.HexColor('#9FB2C2'); BLANCO = colors.white

W, H = letter
M = 42                     # margen lateral
TOP, BOT = 60, 48
CW = W - 2 * M             # ancho útil

def st(name, **k):
    base = dict(fontName='Carlito', fontSize=10.5, leading=14, textColor=colors.HexColor('#12212E'))
    base.update(k); return ParagraphStyle(name, **base)

S = {
    'cuerpo': st('cuerpo'),
    'chico': st('chico', fontSize=9.5, leading=12.5),
    'ital': st('ital', fontName='Carlito-Italic', fontSize=9.5, leading=12.5, textColor=GRIS),
    'h1': st('h1', fontName='Poppins-Bold', fontSize=17, leading=22, textColor=MARINO, spaceAfter=6),
    'h2': st('h2', fontName='Poppins-Bold', fontSize=12.5, leading=16, textColor=MARINO, spaceBefore=4, spaceAfter=2),
    'h3': st('h3', fontName='Poppins-Medium', fontSize=10.5, leading=13, textColor=MARINO, spaceBefore=4, spaceAfter=3),
    'act': st('act', fontName='Poppins-Bold', fontSize=11.5, leading=14, textColor=MARINO),
    'celda': st('celda', fontSize=9.5, leading=11.5),
    'celdab': st('celdab', fontName='Carlito-Bold', fontSize=9.5, leading=11.5),
    'celdai': st('celdai', fontName='Carlito-Italic', fontSize=9.5, leading=11.5, textColor=GRIS),
    'cab': st('cab', fontName='Carlito-Bold', fontSize=9.5, leading=11.5, textColor=BLANCO),
    'pron': st('pron', fontName='Carlito-Italic', fontSize=8.3, leading=9.5, textColor=NARANJA_OSC),
}

EMOJI_RE = re.compile('[\U0001F000-\U0001FAFF☀-➿️‍⬀-⯿▶⏰-⏿]')
def limpia(t):
    return re.sub(r'\s{2,}', ' ', EMOJI_RE.sub('', str(t or ''))).strip()
def x(t):  # texto para Paragraph
    return limpia(t).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
def P(t, s='cuerpo'):
    return Paragraph(t, S[s] if isinstance(s, str) else s)

# ---------------- ilustraciones (emoji Noto a imagen) ----------------
FUENTE_EMOJI = ImageFont.truetype('/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf', 109)
def emoji_png(e):
    ruta = os.path.join(CACHE, hashlib.md5(e.encode()).hexdigest() + '.png')
    if not os.path.exists(ruta):
        im = Image.new('RGBA', (160, 160), (0, 0, 0, 0))
        ImageDraw.Draw(im).text((10, 10), e, font=FUENTE_EMOJI, embedded_color=True)
        bb = im.getbbox()
        if bb: im = im.crop(bb)
        im.save(ruta)
    return ruta

# ---------------- datos fijos del curso ----------------
FECHAS_UNIDAD = {1: '31 ago – 18 sep 2026', 2: '21 sep – 9 oct 2026', 3: '12 oct – 30 oct 2026', 4: '3 nov – 20 nov 2026',
                 5: '30 nov – 18 dic 2026', 6: '7 ene – 29 ene 2027', 7: '1 feb – 19 feb 2027', 8: '22 feb – 12 mar 2027',
                 9: '5 abr – 23 abr 2027', 10: '26 abr – 14 may 2027', 11: '17 may – 4 jun 2027', 12: '7 jun – 25 jun 2027'}
REPASO = {1: '23 al 26 de noviembre de 2026', 2: '16 al 19 de marzo de 2027', 3: '28 de junio al 2 de julio de 2027'}
ORDINAL = {1: 'primer', 2: 'segundo', 3: 'tercer'}
CALIF = [('Trabajo en clase: cuadernillo o plataforma', '30%'), ('Mini proyectos de las unidades', '20%'),
         ('Examen oral del trimestre', '10%'), ('Examen escrito del trimestre', '40%')]
PIE = 'Cuadernillo del alumno · Misión Cultural No. 164 · Playas de Rosarito, B.C.'
MAESTRO = 'Mtro. Carlos Enrique Ortega Torres'
EMBLEMA = os.path.join(RAIZ, 'img', 'emblema-512.png')

# ---------------- piezas de dibujo ----------------
class Ancla(Flowable):
    """Anota en qué página queda; no ocupa lugar."""
    def __init__(self, reg, clave): super().__init__(); self.reg, self.clave = reg, clave
    def wrap(self, aw, ah): return (0, 0)
    def draw(self):
        if self.clave not in self.reg: self.reg[self.clave] = self.canv.getPageNumber()

class Grupo(Flowable):
    """Varias piezas que van juntas (no se separan)."""
    def __init__(self, c): super().__init__(); self.c = c
    def wrap(self, aw, ah):
        self.aw = aw; self.hs = [f.wrapOn(self.canv, aw, 10000)[1] + (getattr(f, 'spaceAfter', 0) or 0) for f in self.c]
        return (aw, sum(self.hs))
    def draw(self):
        y = sum(self.hs)
        for f, h in zip(self.c, self.hs): y -= h; f.drawOn(self.canv, 0, y + (getattr(f, 'spaceAfter', 0) or 0))

def alto_de(fl, canv, aw):
    if isinstance(fl, KeepTogether):
        return sum(f.wrapOn(canv, aw, 10000)[1] + (getattr(f, 'spaceAfter', 0) or 0) + (getattr(f, 'spaceBefore', 0) or 0) for f in fl._content)
    return fl.wrapOn(canv, aw, 10000)[1]

class Seccion(Flowable):
    """Cambia el texto del encabezado (arriba a la derecha) desde esta página."""
    def __init__(self, doc, texto): super().__init__(); self.doc, self.texto = doc, texto
    def wrap(self, aw, ah): return (0, 0)
    def draw(self): self.doc.seccion = self.texto

class Caja(Flowable):
    """Contenido dentro de un recuadro de color (con borde izquierdo opcional)."""
    def __init__(self, contenido, fondo=CIELO, izq=None, pad=9, radio=7, ancho=None):
        super().__init__(); self.c, self.fondo, self.izq, self.pad, self.radio, self.ancho = contenido, fondo, izq, pad, radio, ancho
    def wrap(self, aw, ah):
        self.aw = self.ancho or aw; iw = self.aw - 2 * self.pad - (4 if self.izq else 0)
        self.hs = [f.wrap(iw, 10000)[1] for f in self.c]
        self.h = sum(self.hs) + sum(getattr(f, 'spaceAfter', 0) or 0 for f in self.c) + 2 * self.pad
        return (self.aw, self.h)
    def draw(self):
        c = self.canv; c.setFillColor(self.fondo); c.roundRect(0, 0, self.aw, self.h, self.radio, stroke=0, fill=1)
        if self.izq: c.setFillColor(self.izq); c.roundRect(0, 0, 4, self.h, 2, stroke=0, fill=1)
        y = self.h - self.pad; xo = self.pad + (4 if self.izq else 0)
        for f, h in zip(self.c, self.hs):
            y -= h; f.drawOn(c, xo, y); y -= getattr(f, 'spaceAfter', 0) or 0

class Renglones(Flowable):
    def __init__(self, n, sep=21, ancho=None, etiqueta=None):
        super().__init__(); self.n, self.sep, self.ancho, self.et = n, sep, ancho, etiqueta
    def wrap(self, aw, ah): self.aw = self.ancho or aw; return (self.aw, self.n * self.sep + 4)
    def draw(self):
        c = self.canv; c.setStrokeColor(LINEA); c.setLineWidth(.6)
        for i in range(self.n):
            y = self.n * self.sep - (i + 1) * self.sep + 4; c.line(0, y, self.aw, y)

class Insignia(Flowable):
    """Letra de la actividad en cuadro naranja + título."""
    def __init__(self, letra, titulo, sub=None): super().__init__(); self.l, self.t, self.sub = letra, titulo, sub
    def wrap(self, aw, ah):
        self.aw = aw; self.p = P('<font name="Poppins-Bold">%s</font>' % x(self.t), 'act'); self.ph = self.p.wrap(aw - 30, 200)[1]
        self.h = max(20, self.ph) + 2; return (aw, self.h)
    def draw(self):
        c = self.canv; c.setFillColor(NARANJA); c.roundRect(0, self.h - 20, 20, 20, 4, stroke=0, fill=1)
        c.setFillColor(BLANCO); c.setFont('Poppins-Bold', 10.5); c.drawCentredString(10, self.h - 14.5, self.l)
        self.p.drawOn(c, 28, self.h - self.ph - 2)

class Banda(Flowable):
    """Barra de título (fondo marino, texto blanco)."""
    def __init__(self, texto, alto=20): super().__init__(); self.t, self.alto = texto, alto
    def wrap(self, aw, ah): self.aw = aw; return (aw, self.alto)
    def draw(self):
        c = self.canv; c.setFillColor(MARINO); c.roundRect(0, 0, self.aw, self.alto, 4, stroke=0, fill=1)
        c.setFillColor(BLANCO); c.setFont('Poppins-Bold', 10); c.drawString(8, 6, limpia(self.t))

class PortadaUnidad(Flowable):
    def __init__(self, u, trim, emojis): super().__init__(); self.u, self.trim, self.em = u, trim, emojis
    def wrap(self, aw, ah): self.aw = aw; return (aw, 112)
    def draw(self):
        c, u = self.canv, self.u; h = 112
        c.setFillColor(MARINO); c.roundRect(0, 0, self.aw, h, 10, stroke=0, fill=1)
        c.setFillColor(NARANJA); c.roundRect(0, 0, 92, h, 10, stroke=0, fill=1); c.rect(80, 0, 12, h, stroke=0, fill=1)
        c.setFillColor(BLANCO); c.setFont('Poppins-Medium', 9); c.drawCentredString(46, h - 34, 'UNIDAD')
        c.setFont('Poppins-Bold', 36); c.drawCentredString(46, 30, str(u['numero']))
        c.setFont('Poppins-Bold', 19); c.drawString(108, h - 38, limpia(u['titulo']))
        c.setFillColor(colors.HexColor('#F4A26A')); c.setFont('Poppins-Medium', 11); c.drawString(108, h - 56, limpia(u['tituloEs']))
        c.setFillColor(colors.HexColor('#BFD3E2')); c.setFont('Carlito', 9.5)
        c.drawString(108, 24, '%s trimestre · %s' % (ORDINAL[self.trim].capitalize(), FECHAS_UNIDAD.get(u['numero'], '')))
        c.drawImage(EMBLEMA, self.aw - 34, h - 30, 22, 22, mask='auto')
        for i, e in enumerate(self.em[:3]):
            c.drawImage(emoji_png(e), self.aw - 44 - (len(self.em[:3]) - 1 - i) * 36, 14, 30, 30, mask='auto', preserveAspectRatio=True)

# ---------------- relleno: diccionario ilustrado y apuntes ----------------
class Relleno(Flowable):
    """Ocupa el espacio que sobra al final de la página con el diccionario ilustrado de la unidad
    (y, si aún sobra, con renglones de apuntes). Solo aparece si lo que sigue no cabe en esta página."""
    FILA, CAB = 76, 26
    def __init__(self, pool, sig=None, forzar=False): super().__init__(); self.pool, self.sig, self.forzar = pool, sig, forzar; self.h = 0
    def wrap(self, aw, ah):
        self.aw = aw; self.h = 0
        if ah < 64: return (aw, 0)
        if self.forzar: self.h = ah - 1
        elif self.sig is not None:
            nh = alto_de(self.sig, self.canv, aw)
            if ah < nh <= H - TOP - BOT: self.h = ah - 1
        return (aw, self.h)
    def split(self, aw, ah): return []
    def draw(self):
        if self.h <= 0: return
        c = self.canv; y = self.h
        filas = int((y - self.CAB - 12) // self.FILA) if self.pool else 0
        filas = min(filas, (len(self.pool) + 4) // 5)
        if filas > 0:
            alto = self.CAB + filas * self.FILA + 8; y -= alto
            c.setFillColor(CIELO); c.roundRect(0, y, self.aw, alto, 8, stroke=0, fill=1)
            c.setFillColor(MARINO); c.setFont('Poppins-Bold', 9.5); c.drawString(10, y + alto - 17, 'Picture dictionary')
            c.setFillColor(GRIS); c.setFont('Carlito-Italic', 8.5); c.drawString(108, y + alto - 17, 'Diccionario ilustrado · lee en voz alta cada palabra')
            cw = (self.aw - 20 - 4 * 8) / 5
            for f in range(filas):
                for k in range(5):
                    if not self.pool: break
                    en, es, e = self.pool.pop(0)
                    cx = 10 + k * (cw + 8); cy = y + alto - self.CAB - (f + 1) * self.FILA + 6
                    c.setFillColor(BLANCO); c.roundRect(cx, cy, cw, self.FILA - 8, 6, stroke=0, fill=1)
                    c.drawImage(emoji_png(e), cx + cw / 2 - 15, cy + 30, 30, 30, mask='auto', preserveAspectRatio=True)
                    c.setFillColor(MARINO); c.setFont('Carlito-Bold', 8.6); c.drawCentredString(cx + cw / 2, cy + 18, _corta(c, limpia(en), 'Carlito-Bold', 8.6, cw - 6))
                    c.setFillColor(GRIS); c.setFont('Carlito', 7.8); c.drawCentredString(cx + cw / 2, cy + 8, _corta(c, limpia(es), 'Carlito', 7.8, cw - 6))
            y -= 10
        if y >= 60:
            c.setFillColor(MARINO); c.setFont('Poppins-Bold', 9.5); c.drawString(0, y - 14, 'My notes')
            c.setFillColor(GRIS); c.setFont('Carlito-Italic', 8.5); c.drawString(52, y - 14, 'Mis apuntes: palabras nuevas, dudas o frases que quiero recordar')
            c.setStrokeColor(LINEA); c.setLineWidth(.6); yy = y - 36
            while yy > 4: c.line(0, yy, self.aw, yy); yy -= 21

def _corta(c, t, f, s, w):
    while pdfmetrics.stringWidth(t, f, s) > w and len(t) > 3: t = t[:-2]
    return t if pdfmetrics.stringWidth(t, f, s) <= w else t

# ---------------- documento ----------------
class Doc(BaseDocTemplate):
    def __init__(self, ruta, **k):
        super().__init__(ruta, pagesize=letter, leftMargin=M, rightMargin=M, topMargin=TOP, bottomMargin=BOT,
                         title='Cuadernillo del alumno · Misioneros del Inglés', author=MAESTRO,
                         subject='Misión Cultural No. 164 · Playas de Rosarito, B.C.', **k)
        self.seccion = ''
        fr = Frame(M, BOT, CW, H - TOP - BOT, id='f', leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
        portada = Frame(0, 0, W, H, id='p', leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
        self.addPageTemplates([PageTemplate('portada', [portada], onPage=self.dibuja_portada),
                               PageTemplate('normal', [fr], onPageEnd=self.marco)])
    def marco(self, c, doc):
        c.saveState()
        c.drawImage(EMBLEMA, M, H - 40, 18, 18, mask='auto')
        c.setFillColor(MARINO); c.setFont('Poppins-Medium', 8.5); c.drawString(M + 24, H - 34.5, 'Misioneros del Inglés')
        c.setFillColor(GRIS); c.setFont('Carlito', 8); c.drawRightString(W - M, H - 34.5, self.seccion)
        c.setStrokeColor(NARANJA); c.setLineWidth(1); c.line(M, H - 46, W - M, H - 46)
        c.setFillColor(GRIS); c.setFont('Carlito', 7.5); c.drawString(M, 26, PIE)
        c.setFillColor(MARINO); c.setFont('Poppins-Bold', 9); c.drawRightString(W - M, 26, str(c.getPageNumber()))
        c.restoreState()
    def dibuja_portada(self, c, doc):
        c.saveState()
        c.setFillColor(MARINO); c.rect(0, H * .42, W, H * .58, stroke=0, fill=1)
        c.setFillColor(NARANJA); c.rect(0, H * .42 - 5, W, 5, stroke=0, fill=1)
        c.drawImage(EMBLEMA, W / 2 - 75, H - 290, 150, 150, mask='auto')
        c.setFillColor(BLANCO); c.setFont('Poppins-Bold', 34); c.drawCentredString(W / 2, H - 345, 'Misioneros del Inglés')
        c.setFillColor(colors.HexColor('#7FC4D9')); c.setFont('Poppins-Medium', 13); c.drawCentredString(W / 2, H - 372, 'Inglés básico para jóvenes y adultos')
        c.setFillColor(BLANCO); c.setFont('Poppins-Bold', 18); c.drawCentredString(W / 2, H * .42 + 40, 'Cuadernillo del alumno')
        c.setFillColor(MARINO); c.setFont('Poppins-Medium', 12); c.drawCentredString(W / 2, H * .42 - 52, 'Misión Cultural No. 164 · Playas de Rosarito, B.C.')
        c.setFillColor(GRIS); c.setFont('Carlito', 10); c.drawCentredString(W / 2, H * .42 - 72, 'Ciclo escolar 2026-2027 · Tres trimestres · 12 unidades')
        c.setFont('Carlito', 11); c.setFillColor(colors.HexColor('#12212E'))
        for i, et in enumerate(['Nombre:', 'Grupo:']):
            y = H * .42 - 140 - i * 40; c.drawString(110, y, et); c.setStrokeColor(LINEA); c.line(170, y - 2, W - 110, y - 2)
        c.setFillColor(GRIS); c.setFont('Carlito', 9); c.drawCentredString(W / 2, 60, 'Maestro: ' + MAESTRO)
        c.restoreState()

def tabla(datos, anchos, estilo_extra=(), cab=True, zebra=False, pad=4):
    t = Table(datos, colWidths=anchos, repeatRows=1 if cab else 0)
    s = [('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('TOPPADDING', (0, 0), (-1, -1), pad), ('BOTTOMPADDING', (0, 0), (-1, -1), pad),
         ('LEFTPADDING', (0, 0), (-1, -1), 6), ('RIGHTPADDING', (0, 0), (-1, -1), 6),
         ('LINEBELOW', (0, 0), (-1, -1), .4, BORDE)]
    if cab: s += [('BACKGROUND', (0, 0), (-1, 0), MARINO)]
    if zebra: s += [('ROWBACKGROUNDS', (0, 1 if cab else 0), (-1, -1), [BLANCO, colors.HexColor('#F4F8FB')])]
    t.setStyle(TableStyle(s + list(estilo_extra))); return t

def baraja(lista, semilla):
    r = random.Random(semilla); l = list(lista)
    for _ in range(20):
        r.shuffle(l)
        if len(l) < 2 or l != list(lista): break
    return l

def pasos(texto):
    partes = re.split(r'\s*\d\)\s*', texto)
    return [p.strip() for p in partes if p.strip()]

# ---------------- construcción ----------------
CONT = [Spacer(0, 0)]   # marca: este bloque continúa al anterior (sin relleno entre ellos)
def ilus_de(u, ILUS):
    vistos, pool = set(), []
    for b in u['material']:
        if b['tipo'] != 'vocab': continue
        for i in b['items']:
            k = re.sub(r'[.!]+$', '', i['en'].lower()).strip()
            e = ILUS.get(k)
            if e and k not in vistos:
                vistos.add(k); pool.append((i['en'], i['es'], e))
    return pool

def instrucciones_papel(a):
    t = limpia(a.get('instrucciones', ''))
    t = re.sub(r'\s*En la plataforma,[^.]*\.', '', t)
    t = t.replace('Toca ▶ para escuchar cada número y escríbelo', 'Escucha a tu maestro y escribe cada número')
    t = t.replace('Toca para escuchar cada número y escríbelo', 'Escucha a tu maestro y escribe cada número')
    if a['tipo'] == 'ordenar': t = 'Escribe la oración con las palabras en el orden correcto.'  # (el diálogo se ajusta aparte)
    if a['tipo'] == 'relacionar': t = 'Escribe en el cuadro la letra de la traducción correcta.'
    if a['tipo'] == 'opcion' and not any('True' in o for q in a['preguntas'] for o in q['opciones']):
        t = (t.rstrip('.') + '. ' if t else '') + 'Encierra en un círculo la letra de la mejor respuesta.'
    if 'pegar una foto' in t: t = t.replace('Si quieres, en el cuadernillo puedes pegar una foto en el recuadro.', 'Si quieres, pega una foto en el recuadro.')
    return t

def blanco(t):
    return x(t).replace('___', '<font color="#9FB2C2">__________________</font>')

def actividad(a, letra, pool):
    cab = [Insignia(letra, a['titulo']), Spacer(0, 2), P(x(instrucciones_papel(a)), 'ital'), Spacer(0, 6)]
    cuerpo = []
    tp = a['tipo']
    if tp == 'relacionar':
        der = baraja([p[1] for p in a['pares']], a['titulo'] + letra)
        filas = []
        for i, (en, es) in enumerate(a['pares']):
            filas.append([P('%d.' % (i + 1), 'celda'), P('<b>%s</b>' % x(en), 'celda'), '', P('%s) %s' % ('abcdefghijklmnop'[i], x(der[i])), 'celda')])
        t = Table(filas, colWidths=[20, CW * .42, 26, CW * .42])
        t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('BOX', (2, 0), (2, -1), .6, LINEA), ('INNERGRID', (2, 0), (2, -1), .6, LINEA),
                               ('TOPPADDING', (0, 0), (-1, -1), 5), ('BOTTOMPADDING', (0, 0), (-1, -1), 5)]))
        cuerpo.append(t)
    elif tp == 'completar':
        if a.get('banco'):
            cuerpo += [Caja([P('<b>Palabras:</b> ' + ' · '.join(x(b) for b in a['banco']), 'chico')], fondo=CREMA, izq=NARANJA, pad=6), Spacer(0, 6)]
        if a.get('tabla'):
            tb = a['tabla']; cuerpo += [tabla([[P('<b>%s</b>' % x(c), 'cab' if r == 0 else 'celda') for c in fila] for r, fila in enumerate(tb)],
                                              [CW * .7 / len(tb[0])] * len(tb[0]), [('ALIGN', (0, 0), (-1, -1), 'CENTER')]), Spacer(0, 6)]
        qs = a['preguntas']
        if all(q.get('audio') for q in qs):
            celdas = [P('%d. ____________' % (i + 1), 'cuerpo') for i in range(len(qs))]
            filas = [celdas[i:i + 4] + [''] * (4 - len(celdas[i:i + 4])) for i in range(0, len(celdas), 4)]
            t = Table(filas, colWidths=[CW / 4] * 4); t.setStyle(TableStyle([('TOPPADDING', (0, 0), (-1, -1), 8)])); cuerpo.append(t)
        else:
            largo = max(len(q['p']) for q in qs) > 34
            celdas = [P('%d. %s' % (i + 1, blanco(q['p'])), 'cuerpo') for i, q in enumerate(qs)]
            if largo: filas = [[c] for c in celdas]; anchos = [CW]
            else:
                mitad = (len(celdas) + 1) // 2; filas = [[celdas[i], celdas[i + mitad] if i + mitad < len(celdas) else ''] for i in range(mitad)]; anchos = [CW / 2] * 2
            t = Table(filas, colWidths=anchos); t.setStyle(TableStyle([('TOPPADDING', (0, 0), (-1, -1), 6), ('BOTTOMPADDING', (0, 0), (-1, -1), 6), ('LEFTPADDING', (0, 0), (-1, -1), 4)]))
            cuerpo.append(t)
    elif tp == 'opcion':
        if a.get('lectura'):
            cuerpo += [Caja([P(x(a['lectura']), 'cuerpo')], fondo=CIELO, izq=MARINO), Spacer(0, 8)]
        if a.get('mapa'):
            mp = a['mapa']; filas = mp['filas']; n = len(filas[0])
            calle = [[P('<b>%s</b>' % x(mp.get('calle', '')), st('calle', fontName='Carlito-Bold', alignment=TA_CENTER, textColor=GRIS))] + [''] * (n - 1)]
            datos = [[P('<b>%s</b>' % x(c), st('lugar', fontName='Carlito-Bold', alignment=TA_CENTER, textColor=MARINO)) for c in filas[0]]] + calle + \
                    [[P('<b>%s</b>' % x(c), st('lugar2', fontName='Carlito-Bold', alignment=TA_CENTER, textColor=MARINO)) for c in fila] for fila in filas[1:]]
            t = Table(datos, colWidths=[CW * .6 / n] * n, rowHeights=[34, 20] + [34] * (len(filas) - 1))
            t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('BACKGROUND', (0, 0), (-1, 0), CIELO2), ('BACKGROUND', (0, 2), (-1, -1), CIELO2),
                                   ('SPAN', (0, 1), (-1, 1)), ('BACKGROUND', (0, 1), (-1, 1), colors.HexColor('#E5E9EC')),
                                   ('GRID', (0, 0), (-1, 0), 2, BLANCO), ('GRID', (0, 2), (-1, -1), 2, BLANCO)]))
            t.hAlign = 'LEFT'; cuerpo += [t, Spacer(0, 8)]
        tf = all(len(q['opciones']) == 2 and q['opciones'][0].startswith('True') for q in a['preguntas'])
        if tf:
            filas = [[P('%d. %s' % (i + 1, x(q['p'])), 'cuerpo'), P('True&nbsp;&nbsp;/&nbsp;&nbsp;False', st('tf', alignment=TA_RIGHT, textColor=GRIS))] for i, q in enumerate(a['preguntas'])]
            t = Table(filas, colWidths=[CW * .78, CW * .22]); t.setStyle(TableStyle([('TOPPADDING', (0, 0), (-1, -1), 5), ('BOTTOMPADDING', (0, 0), (-1, -1), 5), ('LINEBELOW', (0, 0), (-1, -1), .3, BORDE)]))
            cuerpo.append(t)
        else:
            for i, q in enumerate(a['preguntas']):
                ops = '&nbsp;&nbsp;&nbsp;&nbsp;'.join('<b>%s)</b> %s' % ('abcd'[k], x(o)) for k, o in enumerate(q['opciones']))
                cuerpo.append(Grupo([P('<b>%d.&nbsp;&nbsp;%s</b>' % (i + 1, blanco(q['p'])), 'cuerpo'), P(ops, st('ops', leftIndent=14, spaceAfter=7))]))
    elif tp == 'ordenar' and a['preguntas'] and 'piezas' in a['preguntas'][0]:
        for q in a['preguntas']:
            pz = baraja(q['piezas'], a['titulo'] + letra)
            filas = [['', P(x(t), 'cuerpo')] for t in pz]
            t = Table(filas, colWidths=[28, CW - 40]); t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('BOX', (0, 0), (0, -1), .6, LINEA), ('INNERGRID', (0, 0), (0, -1), .6, LINEA),
                                                                ('TOPPADDING', (0, 0), (-1, -1), 6), ('BOTTOMPADDING', (0, 0), (-1, -1), 6), ('LEFTPADDING', (1, 0), (1, -1), 10)]))
            cuerpo.append(t)
        cab[2] = P('Escribe en el cuadro el número del 1 al %d para ordenar el diálogo.' % len(a['preguntas'][0]['piezas']), 'ital')
    elif tp == 'ordenar':
        for i, q in enumerate(a['preguntas']):
            pal = q['r'].split()
            cuerpo.append(Grupo([P('%d. %s' % (i + 1, ' &nbsp;/&nbsp; '.join(x(p) for p in baraja(pal, q['r']))), 'cuerpo'), Renglones(1, 22)]))
            cuerpo.append(Spacer(0, 4))
    elif tp == 'escritura':
        if a.get('ejemplo'):
            cuerpo += [Caja([P('<b>Modelo:</b> ' + x(a['ejemplo']).replace('\n', '<br/>'), 'chico')], fondo=CIELO, pad=7), Spacer(0, 6)]
        if 'pega una foto' in instrucciones_papel(a):
            cuerpo += [FotoCaja(), Spacer(0, 6)]
        n = 8 if len(a.get('ejemplo', '')) > 60 else 7
        cuerpo.append(Renglones(n, 22))
    return cab, cuerpo

class FotoCaja(Flowable):
    def wrap(self, aw, ah): self.aw = aw; return (aw, 120)
    def draw(self):
        c = self.canv; c.setStrokeColor(LINEA); c.setDash(4, 3); c.roundRect(self.aw / 2 - 95, 0, 190, 120, 8)
        c.setFillColor(GRIS); c.setFont('Carlito-Italic', 9); c.drawCentredString(self.aw / 2, 56, 'Pega aquí una foto (opcional)')

def oral(tip, letra):
    titulo = re.sub(r'^Actividad oral en clase:\s*', '', limpia(tip['titulo']))
    filas = [[P('<font name="Poppins-Bold" color="#E8772E">%d</font>' % (i + 1), 'cuerpo'), P(x(p), 'cuerpo')] for i, p in enumerate(pasos(tip['texto']))]
    t = Table(filas, colWidths=[18, CW - 18]); t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3), ('LEFTPADDING', (0, 0), (-1, -1), 2)]))
    return [Insignia(letra, titulo), Spacer(0, 2), P('Actividad oral en clase · trabaja con tus compañeros.', 'ital'), Spacer(0, 5), t, Spacer(0, 4), P('<font color="#4A5866">Mis notas:</font>', 'chico'), Renglones(2, 20)]

def vocab_tabla(b):
    items = b['items']; mitad = (len(items) + 1) // 2
    def celda(i):
        if i is None: return ['', '']
        pr = ('<br/><font name="Carlito-Italic" size="8.2" color="#B4521A">%s</font>' % x(i.get('pron'))) if i.get('pron') else ''
        return [P('<b>%s</b>%s' % (x(i['en']), pr), 'celda'), P(x(i['es']), 'celda')]
    filas = [celda(items[k]) + celda(items[k + mitad] if k + mitad < len(items) else None) for k in range(mitad)]
    t = tabla(filas, [CW * .27, CW * .23, CW * .27, CW * .23], [('LINEBEFORE', (2, 0), (2, -1), .6, BORDE)], cab=False, zebra=True, pad=3)
    return t

def gramatica(b):
    cont = [Banda(b['titulo'])]
    filas = []
    if b.get('explicacion'):
        filas.append([P(x(b['explicacion']), 'chico')] + [''] * (len(b['encabezados']) - 1))
    n = len(b['encabezados'])
    anchos = [CW / n] * n if n != 2 else [CW * .45, CW * .55]
    cab = [P('<b>%s</b>' % x(h), st('gh', fontName='Carlito-Bold', fontSize=9, textColor=MARINO)) for h in b['encabezados']]
    datos = filas + [cab] + [[P(('<b>%s</b>' if k == 0 else '%s') % x(c), 'celdai' if (k == n - 1 and n > 1) else 'celda') for k, c in enumerate(f)] for f in b['filas']]
    est = [('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#F4F8FB'))]
    if filas: est += [('SPAN', (0, 0), (-1, 0)), ('BACKGROUND', (0, 1), (-1, 1), CIELO2)]
    else: est += [('BACKGROUND', (0, 0), (-1, 0), CIELO2)]
    cont.append(tabla(datos, anchos, est, cab=False, pad=3.5))
    return cont

def dialogo(b):
    filas = []
    for l in b['lineas']:
        pr = ('<br/><font name="Carlito-Italic" size="8.2" color="#B4521A">%s</font>' % x(l['pron'])) if l.get('pron') else ''
        filas.append([P('<b>%s:</b>' % x(l['quien']), 'celdab'), P(x(l['en']) + pr, 'celda')])
    t = Table(filas, colWidths=[62, CW - 62 - 22]); t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('TOPPADDING', (0, 0), (-1, -1), 2.5), ('BOTTOMPADDING', (0, 0), (-1, -1), 2.5)]))
    return [P(x(b['titulo']), 'h2'), P(x(b.get('contexto', '')), 'ital'), Spacer(0, 5), Caja([t], fondo=CIELO, izq=MARINO, pad=8), Spacer(0, 4),
            P('Lee el diálogo en voz alta con un compañero. Después cámbienlo con sus propios datos.', 'ital')]

def autoevaluacion(metas):
    filas = [[P('<b>Al terminar esta unidad…</b>', 'cab'), P('<b>Lo logro</b>', 'cab'), P('<b>Casi</b>', 'cab'), P('<b>Necesito practicar</b>', 'cab')]]
    filas += [[P(x(m), 'celda'), '', '', ''] for m in metas]
    t = tabla(filas, [CW * .58, CW * .14, CW * .12, CW * .16], [('GRID', (0, 0), (-1, -1), .5, BORDE)], pad=6)
    return [P('Mi autoevaluación', 'h2'), P('Marca con una X cómo te sientes con cada aprendizaje.', 'ital'), Spacer(0, 5), t, Spacer(0, 8),
            P('<b>Lo que más me costó y cómo lo voy a practicar:</b>', 'chico'), Renglones(2, 20)]

def construir(datos, salida, paginas_prev=None):
    U, TR, ILUS = datos['unidades'], datos['trimestres'], datos['ilustraciones']
    reg = {}
    doc = Doc(salida)
    pp = paginas_prev or {}
    def pg(k): return str(pp.get(k, ''))
    st_ = []   # historia

    # Portada
    st_ += [NextPageTemplate('normal'), Spacer(0, 1), PageBreak()]
    # Bienvenida
    st_ += [Seccion(doc, 'Bienvenida'), P('¡Bienvenido a Misioneros del Inglés!', 'h1'),
            P('Este cuadernillo es tu libro de trabajo para todo el ciclo escolar. Aquí están todos los contenidos y las actividades del curso, '
              'para que puedas estudiar y practicar sin necesidad de celular, tableta o computadora. Si usas la plataforma <b>Misioneros del Inglés</b>, '
              'verás que sigue las mismas unidades y que cada actividad te dice en qué página de este cuadernillo está: puedes trabajar en cualquiera de los dos.'),
            Spacer(0, 10), P('Cómo está organizada cada unidad', 'h2')]
    org = [('Al terminar esta unidad podré', 'Lo que vas a aprender. Léelo al empezar la unidad.'),
           ('Vocabulario', 'Las palabras y frases nuevas con su significado. En naranja, debajo de cada palabra, cómo se dice.'),
           ('Gramática', 'Las reglas explicadas en español, con ejemplos.'), ('¡Ojo!', 'Consejos para no equivocarte y errores comunes.'),
           ('Diálogo', 'Una conversación de la vida diaria para leer y practicar en voz alta.'),
           ('Actividades A, B, C…', 'Ejercicios para contestar aquí mismo, con lápiz. Tu maestro los revisa.'),
           ('Actividad oral en clase', 'Para practicar hablando con tus compañeros.'),
           ('Picture dictionary', 'Diccionario ilustrado con palabras de la unidad para repasar.'),
           ('Mi autoevaluación', 'Al final de cada unidad marcas qué tanto aprendiste.')]
    st_ += [tabla([[P('<b>%s</b>' % a, 'celdab'), P(b, 'celda')] for a, b in org], [CW * .32, CW * .68], [('BACKGROUND', (0, 0), (0, -1), CIELO)], cab=False, pad=6),
            Spacer(0, 14), P('Mis datos', 'h2')]
    st_ += [tabla([[P(a, 'celdab'), Renglones(1, 18)] for a in ['Nombre:', 'Grupo y horario:', 'Teléfono:', 'Correo electrónico (opcional):', 'Usuario de la plataforma (opcional):']],
                  [CW * .38, CW * .62], [('LINEBELOW', (0, 0), (-1, -1), 0, BLANCO)], cab=False, pad=4), Spacer(0, 14),
            Caja([P('<b><font color="#B4521A">Consejo:</font></b> estudia un poco todos los días. Diez minutos diarios repasando el vocabulario en voz alta valen más que '
                    'dos horas una vez a la semana. ¡Y no tengas miedo de equivocarte: así se aprende!', 'chico')], fondo=CREMA, izq=NARANJA), PageBreak()]
    # Calendario
    st_ += [Seccion(doc, 'Mi curso'), P('Mi curso: calendario y evaluación', 'h1'),
            P('El curso dura todo el ciclo escolar oficial y se divide en tres trimestres. Cada trimestre tiene cuatro unidades y termina con una semana de repaso y evaluación.'), Spacer(0, 8)]
    filas = [[P('<b>Trimestre</b>', 'cab'), P('<b>Unidad</b>', 'cab'), P('<b>Fechas</b>', 'cab'), P('<b>Pág.</b>', 'cab')]]
    spans = []
    for t in TR:
        us = [u for u in U if u.get('trimestre') == t['n']]; ini = len(filas)
        for k, u in enumerate(us):
            filas.append([P('<b>%s trimestre</b>' % ORDINAL[t['n']].capitalize(), 'celdab') if k == 0 else '', P('<b>%d. %s</b> · <font color="#4A5866">%s</font>' % (u['numero'], x(u['titulo']), x(u['tituloEs'])), 'celda'),
                          P(FECHAS_UNIDAD.get(u['numero'], ''), 'celda'), P(pg('u%d.inicio' % u['numero']), 'celda')])
        filas.append(['', P('<b>Repaso y evaluación</b>', 'celdab'), P(REPASO[t['n']], 'celda'), P(pg('cierre%d' % t['n']), 'celda')])
        spans += [('SPAN', (0, ini), (0, len(filas) - 1)), ('VALIGN', (0, ini), (0, len(filas) - 1), 'TOP'), ('BACKGROUND', (1, len(filas) - 1), (-1, len(filas) - 1), CREMA),
                  ('LINEBELOW', (0, len(filas) - 1), (-1, len(filas) - 1), 1, MARINO)]
    st_ += [tabla(filas, [CW * .16, CW * .52, CW * .24, CW * .08], spans, pad=4), Spacer(0, 12), P('Fechas importantes del calendario oficial', 'h2')]
    fechas = [('Inicio de clases', 'lunes 31 de agosto de 2026'), ('Vacaciones de invierno', '21 de diciembre de 2026 al 6 de enero de 2027 (se regresa el 7 de enero)'),
              ('Vacaciones de primavera', '22 de marzo al 2 de abril de 2027 (se regresa el 5 de abril)'),
              ('Días sin clases', '16 sep · 2 y 16 nov · 25 dic 2026 · 1 y 6 ene · 1 feb · 15 mar · 5 may 2027'), ('Fin de clases', 'martes 6 de julio de 2027')]
    st_ += [tabla([[P('<b>%s</b>' % a, 'celda'), P(b, 'celda')] for a, b in fechas], [CW * .28, CW * .72], [('BACKGROUND', (0, 0), (0, -1), CIELO)], cab=False, pad=4),
            Spacer(0, 12), P('¿Cómo se calcula mi calificación de cada trimestre?', 'h2'),
            tabla([[P(a, 'celda'), P(b, 'celda')] for a, b in CALIF] + [[P('<b>Total</b>', 'celdab'), P('<b>100%</b>', 'celdab')]], [CW * .7, CW * .3],
                  [('BACKGROUND', (0, -1), (-1, -1), CIELO)], cab=False, pad=4), PageBreak()]

    for t in TR:
        us = [u for u in U if u.get('trimestre') == t['n']]
        nombre = '%s trimestre' % ORDINAL[t['n']].capitalize()
        # Apertura del trimestre
        lista = [[Circulo(u['numero']),
                  P('<font name="Poppins-Medium" size="12" color="#0F3B5F">%s</font><br/><font color="#4A5866" size="9">%s · %s</font>' % (x(u['titulo']), x(u['tituloEs']), FECHAS_UNIDAD.get(u['numero'], '')), 'cuerpo')] for u in us]
        tl = Table(lista, colWidths=[26, CW - 60]); tl.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('TOPPADDING', (0, 0), (-1, -1), 7), ('BOTTOMPADDING', (0, 0), (-1, -1), 7)]))
        st_ += [Seccion(doc, nombre), Ancla(reg, 'trim%d' % t['n']), Spacer(0, 40), AperturaTrim(t), Spacer(0, 28), P('Unidades de este trimestre', 'h2'), Spacer(0, 4), tl, Spacer(0, 16),
                Caja([P('<b>Semana de repaso y evaluación: %s</b>' % REPASO[t['n']], 'chico'), P('Al final del trimestre se presenta un examen escrito y un examen oral.', 'ital')], fondo=CREMA, pad=10), PageBreak()]

        for u in us:
            n = u['numero']; pool = ilus_de(u, ILUS); emojis = [p[2] for p in pool[:3]]
            metas = next((b['items'] for b in u['material'] if b['tipo'] == 'metas'), [])
            bloques = []   # cada bloque es un flowable que no se corta (o se corta poco)
            sec = 'Unidad %d · %s' % (n, limpia(u['titulo']))
            primero = [Seccion(doc, sec), Ancla(reg, 'u%d.inicio' % n), PortadaUnidad(u, t['n'], emojis), Spacer(0, 10)]
            intro = next((b['texto'] for b in u['material'] if b['tipo'] == 'intro'), '')
            primero += [P(x(re.sub(r'\s*Toca el botón[^.]*\.', '', intro))), Spacer(0, 8)]
            if metas:
                primero += [Caja([P('<font name="Poppins-Bold" color="#0F3B5F">Al terminar esta unidad podré:</font>', 'cuerpo'), Spacer(0, 3)] +
                                 [P('•&nbsp;&nbsp;' + x(m), st('meta', leftIndent=8, fontSize=10)) for m in metas], fondo=CIELO, izq=MARINO), Spacer(0, 10)]
            bloques.append(primero)
            ya_vocab = ya_gram = False
            orales = []
            for idx, b in enumerate(u['material']):
                k = 'u%d.m%d' % (n, idx)
                if b['tipo'] == 'vocab':
                    enc = []
                    if not ya_vocab:
                        ya_vocab = True; enc = [Ancla(reg, 'u%d.vocab' % n), P('Vocabulario &nbsp;<font name="Carlito-Italic" size="9" color="#4A5866">En naranja, debajo de cada palabra: <font color="#B4521A">cómo se dice</font></font>', 'h2')]
                    bloques.append(enc + [Ancla(reg, k), P(x(b['titulo']), 'h3'), vocab_tabla(b), Spacer(0, 8)])
                elif b['tipo'] == 'gramatica':
                    enc = []
                    if not ya_gram:
                        ya_gram = True; enc = [Ancla(reg, 'u%d.gram' % n), P('Gramática', 'h2')]
                    bloques.append(enc + [Ancla(reg, k)] + gramatica(b) + [Spacer(0, 8)])
                elif b['tipo'] == 'tip':
                    if limpia(b['titulo']).lower().startswith('actividad oral'):
                        orales.append((idx, b)); continue
                    bloques.append([Ancla(reg, k), Caja([P('<b><font color="#B4521A">¡Ojo!</font> %s.</b> %s' % (x(b['titulo']).rstrip('.'), x(b['texto'])), 'chico')], fondo=CREMA, izq=NARANJA), Spacer(0, 8)])
                elif b['tipo'] == 'dialogo':
                    bloques.append([Ancla(reg, 'u%d.dial' % n), Ancla(reg, k)] + dialogo(b) + [Spacer(0, 10)])
            # actividades
            letras = iter('ABCDEFGHIJKLMNOP')
            primera_act = True
            for a in u['actividades']:
                if a.get('extra'): continue
                L = next(letras)
                cab, cuerpo = actividad(a, L, pool)
                pre = [P('Actividades', 'h2'), Spacer(0, 2)] if primera_act else []
                primera_act = False
                ka = 'u%d.a.%s' % (n, a['id'])
                if a['tipo'] == 'opcion' and not a.get('lectura') and not a.get('mapa') and len(cuerpo) > 3:
                    bloques.append(pre + [Ancla(reg, ka)] + cab + cuerpo[:3])
                    bloques.append(CONT + cuerpo[3:] + [Spacer(0, 10)])
                else:
                    bloques.append(pre + [Ancla(reg, ka)] + cab + cuerpo + [Spacer(0, 12)])
                reg.setdefault('letras', {})[ka] = L
            for idx, b in orales:
                L = next(letras); ka = 'u%d.m%d' % (n, idx)
                bloques.append([Ancla(reg, ka)] + oral(b, L) + [Spacer(0, 12)])
                reg.setdefault('letras', {})[ka] = L
            bloques.append([Ancla(reg, 'u%d.auto' % n)] + autoevaluacion(metas) + [Spacer(0, 10)])
            # se arma la historia con rellenos entre bloques
            kts = [KeepTogether([f for f in bq if f is not CONT[0]]) for bq in bloques]
            for i, kt in enumerate(kts):
                st_.append(kt)
                if i + 1 < len(kts) and CONT[0] not in bloques[i + 1]: st_.append(Relleno(pool, kts[i + 1]))
            st_ += [Ancla(reg, 'u%d.fin' % n), Relleno(pool, forzar=True), PageBreak()]

        # Cierre del trimestre
        filas = [[P('<b>Unidad</b>', 'cab'), P('<b>Gramática que debo dominar</b>', 'cab'), P('<b>¿Ya la domino?</b>', 'cab')]]
        for u in us:
            gs = [limpia(b['titulo']) for b in u['material'] if b['tipo'] == 'gramatica']
            filas.append([P('<b>Unidad %d</b><br/>%s' % (u['numero'], x(u['titulo'])), 'celda'), P('<br/>'.join('• ' + x(g) for g in gs), 'celda'), ''])
        st_ += [Seccion(doc, 'Cierre del %s trimestre' % ORDINAL[t['n']]), Ancla(reg, 'cierre%d' % t['n']), P('Cierre del %s trimestre' % ORDINAL[t['n']], 'h1'),
                P('Semana de repaso y evaluación: %s. Repasa el vocabulario, la gramática y los diálogos de las unidades %s.' %
                  (REPASO[t['n']], ', '.join(str(u['numero']) for u in us[:-1]) + ' y ' + str(us[-1]['numero']))), Spacer(0, 8),
                P('Lo más importante del trimestre', 'h2'), tabla(filas, [CW * .26, CW * .56, CW * .18], [('GRID', (0, 0), (-1, -1), .5, BORDE)], pad=5), Spacer(0, 12),
                P('Mis calificaciones del trimestre', 'h2'),
                tabla([[P('<b>Aspecto</b>', 'cab'), P('<b>Valor</b>', 'cab'), P('<b>Mi calificación</b>', 'cab')]] + [[P(a, 'celda'), P(b, 'celda'), ''] for a, b in CALIF] +
                      [[P('<b>Calificación final del trimestre</b>', 'celdab'), P('<b>100%</b>', 'celdab'), '']], [CW * .6, CW * .15, CW * .25],
                      [('GRID', (0, 0), (-1, -1), .5, BORDE), ('BACKGROUND', (0, -1), (-1, -1), CIELO)], pad=5), Spacer(0, 12),
                P('<b>Lo que más me gustó de este trimestre:</b>', 'chico'), Renglones(2, 20), Spacer(0, 8),
                P('<b>Lo que quiero mejorar el próximo trimestre:</b>', 'chico'), Renglones(2, 20), PageBreak()]
    # Final
    st_ += [Seccion(doc, 'Fin del curso'), Spacer(0, 110), Felicidades()]
    doc.build(st_)
    return reg

class Circulo(Flowable):
    def __init__(self, n): super().__init__(); self.n = n
    def wrap(self, aw, ah): return (22, 22)
    def draw(self):
        c = self.canv; c.setFillColor(NARANJA); c.circle(11, 11, 11, stroke=0, fill=1)
        c.setFillColor(BLANCO); c.setFont('Poppins-Bold', 10); c.drawCentredString(11, 7.3, str(self.n))

class AperturaTrim(Flowable):
    def __init__(self, t): super().__init__(); self.t = t
    def wrap(self, aw, ah): self.aw = aw; return (aw, 210)
    def draw(self):
        c = self.canv; c.setFillColor(MARINO); c.roundRect(0, 0, self.aw, 210, 14, stroke=0, fill=1)
        c.drawImage(EMBLEMA, self.aw / 2 - 42, 112, 84, 84, mask='auto')
        c.setFillColor(BLANCO); c.setFont('Poppins-Bold', 28); c.drawCentredString(self.aw / 2, 64, '%s TRIMESTRE' % ORDINAL[self.t['n']].upper())
        c.setFillColor(colors.HexColor('#7FC4D9')); c.setFont('Poppins-Medium', 11.5); c.drawCentredString(self.aw / 2, 38, limpia(self.t['fechas']))

class Felicidades(Flowable):
    def wrap(self, aw, ah): self.aw = aw; return (aw, 200)
    def draw(self):
        c = self.canv; c.setFillColor(CIELO); c.roundRect(0, 0, self.aw, 200, 14, stroke=0, fill=1)
        c.setFillColor(MARINO); c.setFont('Poppins-Bold', 22); c.drawCentredString(self.aw / 2, 158, 'Congratulations!')
        c.setFillColor(colors.HexColor('#12212E')); c.setFont('Carlito', 11)
        c.drawCentredString(self.aw / 2, 134, 'Terminaste el curso de inglés básico de la Misión Cultural No. 164.')
        c.drawCentredString(self.aw / 2, 119, 'Cada palabra que aprendiste es una puerta nueva. ¡Sigue practicando!')
        c.setStrokeColor(LINEA)
        for i, et in enumerate(['Nombre del alumno', MAESTRO]):
            y = 78 - i * 40; c.line(self.aw / 2 - 90, y, self.aw / 2 + 90, y)
            c.setFillColor(GRIS); c.setFont('Carlito', 8.5); c.drawCentredString(self.aw / 2, y - 11, et)

# ---------------- páginas para la plataforma ----------------
def paginas_js(datos, reg):
    out = {}
    for u in datos['unidades']:
        n = u['numero']; k = 'u%d' % n
        if ('%s.inicio' % k) not in reg: continue
        d = {'paginas': {'inicio': reg['%s.inicio' % k], 'fin': reg['%s.fin' % k] if ('%s.fin' % k) in reg else reg['%s.auto' % k]}, 'material': {}, 'actividades': {}}
        for c in ('vocab', 'gram', 'dial', 'auto'):
            if '%s.%s' % (k, c) in reg: d['paginas'][c] = reg['%s.%s' % (k, c)]
        for i, b in enumerate(u['material']):
            if '%s.m%d' % (k, i) in reg: d['material'][i] = reg['%s.m%d' % (k, i)]
        for a in u['actividades']:
            ka = '%s.a.%s' % (k, a['id'])
            if ka in reg: d['actividades'][a['id']] = {'pagina': reg[ka], 'letra': reg['letras'][ka]}
        out[u['id']] = d
    return out

if __name__ == '__main__':
    datos = json.load(open(sys.argv[1]))
    pdf = os.path.join(RAIZ, 'cuadernillo', 'cuadernillo-alumno.pdf')
    reg1 = construir(datos, pdf)
    reg2 = construir(datos, pdf, reg1)
    claves = [k for k in reg1 if k != 'letras']
    if any(reg1[k] != reg2.get(k) for k in claves): print('Aviso: las páginas cambiaron en la segunda vuelta')
    mapa = paginas_js(datos, reg2)
    with open(os.path.join(RAIZ, 'js', 'paginas-cuadernillo.js'), 'w', encoding='utf-8') as f:
        f.write('// Generado por herramientas/cuadernillo/generar.py: en qué página del cuadernillo del alumno está cada unidad,\n'
                '// bloque de material (por su posición) y actividad. No se edita a mano: se vuelve a generar junto con el PDF.\n')
        f.write('export const PAGINAS_CUADERNILLO = ' + json.dumps(mapa, ensure_ascii=False, indent=1) + ';\n')
    print('Listo:', pdf)
