// =====================================================================
//  MISIONEROS DEL INGLÉS · Aplicación
//  Misión Cultural No. 164 · Playas de Rosarito, B.C.
// =====================================================================

import { iniciar, MODO, normalizarUsuario } from './datos.js';
import { UNIDADES, buscarUnidad, itemsDe } from './contenido.js';

const $app = document.getElementById('app');
let D = null;          // capa de datos
let yo = null;         // perfil de quien inició sesión
let config = { abiertas: ['u1'] };

// ---------------------------------------------------------------------
//  Utilidades
// ---------------------------------------------------------------------
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => String(s ?? '').toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?¿¡;:"]/g, '').replace(/\s+/g, ' ').trim();
const fecha = t => t ? new Date(t).toLocaleDateString('es-MX', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
const primerNombre = n => String(n || '').split(' ')[0];

function semilla(str) { let h = 2166136261; for (const c of str) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function barajar(arr, clave) {
  const a = arr.slice(); let s = semilla(clave);
  for (let i = a.length - 1; i > 0; i--) { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; const j = s % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function aviso(texto, tipo = 'ok') {
  let t = document.getElementById('aviso');
  if (!t) { t = document.createElement('div'); t.id = 'aviso'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.className = 'aviso-flotante ' + tipo; t.textContent = texto; t.hidden = false;
  clearTimeout(t._t); t._t = setTimeout(() => { t.hidden = true; }, 3200);
}

function hablar(texto) {
  try {
    if (!('speechSynthesis' in window)) throw new Error();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = 'en-US'; u.rate = 0.85;
    const v = speechSynthesis.getVoices().find(v => /^en[-_]US/i.test(v.lang)) || speechSynthesis.getVoices().find(v => /^en/i.test(v.lang));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) { aviso('Este navegador no puede reproducir el audio.', 'error'); }
}

const ICONO_PLAY = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';
const botonAudio = (texto, etiqueta) => `<button type="button" class="btn-audio" data-accion="hablar" data-texto="${esc(texto)}" aria-label="Escuchar: ${esc(etiqueta || texto)}">${ICONO_PLAY}</button>`;

const bannerDemo = () => MODO === 'demo'
  ? `<div class="banner-demo">Modo demostración: los datos se guardan solo en este navegador. <button type="button" class="enlace" data-accion="reiniciar-demo">Reiniciar datos</button></div>`
  : '';

const cargando = () => `<div class="cargando" aria-live="polite"><img src="img/emblema-192.png" alt="" width="72" height="72"><p>Cargando…</p></div>`;

function calificacionDe(r) {
  if (!r) return null;
  if (r.calificacionMaestro !== null && r.calificacionMaestro !== undefined && r.calificacionMaestro !== '') return Number(r.calificacionMaestro);
  if (r.tipo === 'auto' && typeof r.puntaje === 'number') return r.puntaje;
  return null;
}
const formatoCal = n => (n === null || n === undefined || isNaN(n)) ? '—' : (Math.round(n * 10) / 10).toString();

function nombreActividad(unidadId, actId) {
  const u = buscarUnidad(unidadId); const a = u && (u.actividades || []).find(x => x.id === actId);
  return { u, a, texto: u && a ? `Unidad ${u.numero} · ${a.titulo}` : `${unidadId} · ${actId}` };
}

// ---------------------------------------------------------------------
//  Marco general
// ---------------------------------------------------------------------
function marco(html, activo) {
  const nav = yo.rol === 'maestro'
    ? [['#/maestro', 'Pendientes', 'pendientes'], ['#/maestro/alumnos', 'Alumnos', 'alumnos'], ['#/maestro/unidades', 'Unidades', 'unidades'], ['#/maestro/alta', 'Altas', 'alta']]
    : [['#/inicio', 'Mis unidades', 'inicio'], ['#/avance', 'Mi avance', 'avance']];
  return `${bannerDemo()}
  <header class="barra">
    <a class="marca" href="#/">
      <img src="img/emblema-192.png" alt="" width="44" height="44">
      <span><strong>Misioneros del Inglés</strong><small>Misión Cultural No. 164</small></span>
    </a>
    <div class="usuario"><span class="usuario-nombre">${esc(yo.nombre)}</span><button type="button" class="btn-sec btn-chico" data-accion="salir">Salir</button></div>
  </header>
  <nav class="pestanas" aria-label="Secciones">${nav.map(([h, t, k]) => `<a href="${h}" ${k === activo ? 'class="activa" aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
  <main class="contenido" id="principal">${html}</main>
  <footer class="pie">Misiones Culturales · Inglés para superarte<br>Misión Cultural No. 164 · Playas de Rosarito, B.C.</footer>`;
}

function pintar(html, activo) { $app.innerHTML = marco(html, activo); }

// ---------------------------------------------------------------------
//  Inicio de sesión
// ---------------------------------------------------------------------
function mostrarLogin(msg) {
  $app.innerHTML = `${bannerDemo()}
  <main class="login">
    <div class="login-caja">
      <img src="img/emblema-512.png" alt="Emblema de Misioneros del Inglés: sol sobre el mar y un libro abierto" width="132" height="132">
      <h1>Misioneros del Inglés</h1>
      <p class="sub">Misiones Culturales · Inglés para superarte</p>
      <form data-form="login" class="formulario">
        <label>Usuario<input name="usuario" autocomplete="username" autocapitalize="none" spellcheck="false" required></label>
        <label>Contraseña<input name="password" type="password" autocomplete="current-password" required></label>
        ${msg ? `<p class="error" role="alert">${esc(msg)}</p>` : ''}
        <button class="btn btn-ancho" type="submit">Entrar</button>
      </form>
      ${MODO === 'demo' ? `<div class="nota">Para probar: <b>teacher</b> / <b>demo123</b> (maestro) o <b>maria</b> / <b>demo123</b> (alumna).</div>` : `<p class="ayuda">¿Olvidaste tu contraseña? Pídesela a tu maestro.</p>`}
      <p class="pie-login">Misión Cultural No. 164 · Playas de Rosarito, B.C.</p>
    </div>
  </main>`;
}

// ---------------------------------------------------------------------
//  Rutas
// ---------------------------------------------------------------------
async function rutear() {
  if (!yo) return;
  const partes = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const [r0, r1, r2] = partes;
  try {
    if (yo.rol === 'maestro') {
      if (r0 === 'unidad') return await vistaUnidad(r1, r2);
      if (r0 !== 'maestro') { location.hash = '#/maestro'; return; }
      if (!r1) return await vistaPendientes();
      if (r1 === 'alumnos') return await vistaAlumnos();
      if (r1 === 'alumno') return await vistaDetalleAlumno(r2);
      if (r1 === 'unidades') return vistaUnidades();
      if (r1 === 'alta') return vistaAlta();
      location.hash = '#/maestro';
    } else {
      if (r0 === 'unidad') return await vistaUnidad(r1, r2);
      if (r0 === 'avance') return await vistaAvance();
      if (r0 !== 'inicio') { location.hash = '#/inicio'; return; }
      return await vistaInicio();
    }
  } catch (e) {
    console.error(e);
    pintar(`<div class="tarjeta"><h2>Algo salió mal</h2><p>No se pudo cargar esta sección. Revisa tu conexión e intenta de nuevo.</p><button class="btn" data-accion="recargar">Reintentar</button></div>`);
  }
}

// ---------------------------------------------------------------------
//  ALUMNO · Inicio
// ---------------------------------------------------------------------
async function vistaInicio() {
  pintar(cargando(), 'inicio');
  const resp = await D.respuestasDe(yo.uid);
  const conObs = resp.filter(r => r.observacion).length;
  const tarjetas = UNIDADES.map(u => {
    const abierta = !u.proximamente && config.abiertas.includes(u.id);
    if (!abierta) {
      return `<div class="unidad-tarjeta bloqueada"><span class="num">Unidad ${u.numero}</span><h3>${esc(u.titulo)}</h3><p>${esc(u.tituloEs)}</p><span class="etiqueta">Próximamente</span></div>`;
    }
    const acts = u.actividades || [];
    const hechas = acts.filter(a => resp.some(r => r.unidad === u.id && r.actividad === a.id)).length;
    const pct = acts.length ? Math.round(hechas / acts.length * 100) : 0;
    return `<a class="unidad-tarjeta" href="#/unidad/${u.id}">
      <span class="num">Unidad ${u.numero}</span><h3>${esc(u.titulo)}</h3><p>${esc(u.tituloEs)}</p>
      <div class="avance" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Avance de la unidad"><span style="width:${pct}%"></span></div>
      <small>${hechas} de ${acts.length} actividades</small></a>`;
  }).join('');
  pintar(`
    <section class="saludo"><h1>Hello, ${esc(primerNombre(yo.nombre))}!</h1><p>¿Listo para practicar? Elige una unidad para empezar.</p></section>
    ${conObs ? `<a class="aviso-obs" href="#/avance">Tu maestro te dejó ${conObs} ${conObs === 1 ? 'observación' : 'observaciones'}. Toca aquí para verlas →</a>` : ''}
    <div class="rejilla-unidades">${tarjetas}</div>`, 'inicio');
}

// ---------------------------------------------------------------------
//  Unidad (material y ejercicios)
// ---------------------------------------------------------------------
async function vistaUnidad(id, sub) {
  const u = buscarUnidad(id);
  const esMaestro = yo.rol === 'maestro';
  const activo = esMaestro ? 'unidades' : 'inicio';
  if (!u || u.proximamente) return pintar(`<div class="tarjeta"><h2>Unidad no disponible</h2><p>Esta unidad está en preparación.</p><a class="btn" href="#/">Regresar</a></div>`, activo);
  if (!esMaestro && !config.abiertas.includes(id)) return pintar(`<div class="tarjeta"><h2>Unidad cerrada</h2><p>Tu maestro todavía no abre esta unidad.</p><a class="btn" href="#/inicio">Regresar</a></div>`, activo);
  pintar(cargando(), activo);
  const resp = esMaestro ? [] : await D.respuestasDe(yo.uid);
  const tab = sub === 'ejercicios' ? 'ejercicios' : 'material';
  const cuerpo = tab === 'material' ? renderMaterial(u) : renderEjercicios(u, resp, esMaestro);
  pintar(`
    <a class="volver" href="${esMaestro ? '#/maestro/unidades' : '#/inicio'}">← Volver</a>
    <header class="unidad-cab"><span class="num">Unidad ${u.numero}</span><h1>${esc(u.titulo)}</h1><p>${esc(u.tituloEs)}</p></header>
    ${esMaestro ? '<p class="nota">Vista previa del maestro. Puedes ver todo, pero aquí no se guardan respuestas.</p>' : ''}
    <div class="sub-pestanas" role="tablist">
      <a href="#/unidad/${u.id}" role="tab" aria-selected="${tab === 'material'}" class="${tab === 'material' ? 'activa' : ''}">Material</a>
      <a href="#/unidad/${u.id}/ejercicios" role="tab" aria-selected="${tab === 'ejercicios'}" class="${tab === 'ejercicios' ? 'activa' : ''}">Ejercicios</a>
    </div>
    ${cuerpo}`, activo);
}

function renderMaterial(u) {
  const bloques = u.material.map(b => {
    if (b.tipo === 'intro') return `<p class="intro">${esc(b.texto)}</p>`;
    if (b.tipo === 'tip') return `<aside class="tip"><strong>${esc(b.titulo)}</strong><p>${esc(b.texto)}</p></aside>`;
    if (b.tipo === 'vocab') return `<section class="tarjeta"><h2>${esc(b.titulo)}</h2><ul class="vocab">${b.items.map(i =>
      `<li>${botonAudio(i.en)}<span class="en">${esc(i.en)}</span><span class="es">${esc(i.es)}</span></li>`).join('')}</ul></section>`;
    if (b.tipo === 'gramatica') return `<section class="tarjeta"><h2>${esc(b.titulo)}</h2><p>${esc(b.explicacion)}</p>
      <div class="tabla-caja"><table class="tabla"><thead><tr><th scope="col"></th>${b.encabezados.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${b.filas.map(f => `<tr><td>${botonAudio(f[0])}</td><td class="en">${esc(f[0])}</td><td class="en">${esc(f[1])}</td><td>${esc(f[2])}</td></tr>`).join('')}</tbody></table></div></section>`;
    if (b.tipo === 'dialogo') {
      const todo = b.lineas.map(l => l.en).join(' ');
      return `<section class="tarjeta"><div class="fila-titulo"><h2>${esc(b.titulo)}</h2><button type="button" class="btn-sec btn-chico" data-accion="hablar" data-texto="${esc(todo)}">${ICONO_PLAY} Escuchar todo</button></div>
      <p class="contexto">${esc(b.contexto)}</p>
      <div class="dialogo">${b.lineas.map((l, i) => `<div class="linea ${i % 2 ? 'der' : ''}"><span class="quien">${esc(l.quien)}</span><div class="globo">${botonAudio(l.en)}<div><p class="en">${esc(l.en)}</p><p class="es">${esc(l.es)}</p></div></div></div>`).join('')}</div></section>`;
    }
    return '';
  }).join('');
  return `${bloques}<div class="centrado"><a class="btn" href="#/unidad/${u.id}/ejercicios">Ir a los ejercicios →</a></div>`;
}

function renderEjercicios(u, resp, preview) {
  return (u.actividades || []).map((a, i) => tarjetaActividad(u, a, resp.find(r => r.unidad === u.id && r.actividad === a.id), i, preview)).join('')
    + `<div class="centrado"><a class="btn-sec" href="#/unidad/${u.id}">← Repasar el material</a></div>`;
}

function estadoActividad(a, r) {
  if (!r) return '<span class="estado pendiente">Pendiente</span>';
  if (a.tipo === 'escritura') {
    if (!r.revisado) return '<span class="estado revision">En revisión</span>';
    return `<span class="estado ok">Revisada · ${formatoCal(calificacionDe(r))}</span>`;
  }
  return `<span class="estado ok">Calificación: ${formatoCal(calificacionDe(r))}</span>`;
}

function tarjetaActividad(u, a, r, i, preview) {
  const prev = r ? r.respuestas : null;
  const detalle = r && r.detalle;
  const marca = qi => detalle ? (detalle[qi] ? 'bien' : 'mal') : '';
  const correccion = (qi, correcta) => detalle && !detalle[qi] ? `<p class="correccion">Respuesta correcta: <b>${esc(correcta)}</b></p>` : '';
  const pre = `${u.id}-${a.id}`;
  let cuerpo = '';

  if (a.tipo === 'opcion') {
    cuerpo = a.preguntas.map((q, qi) => `<fieldset class="pregunta ${marca(qi)}"><legend>${qi + 1}. ${esc(q.p)}</legend>
      ${q.opciones.map((o, oi) => `<label class="opcion"><input type="radio" name="q${qi}" value="${oi}" ${prev && String(prev[qi]) === String(oi) ? 'checked' : ''} required><span>${esc(o)}</span></label>`).join('')}
      ${correccion(qi, q.opciones[q.correcta])}</fieldset>`).join('');
  } else if (a.tipo === 'relacionar') {
    const opciones = barajar(a.pares.map(p => p[1]), pre);
    cuerpo = a.pares.map((p, qi) => `<div class="pregunta fila-relacionar ${marca(qi)}">
      <label for="${pre}-q${qi}" class="en">${botonAudio(p[0])}<span>${esc(p[0])}</span></label>
      <select id="${pre}-q${qi}" name="q${qi}" required><option value="">Elige…</option>${opciones.map(o => `<option ${prev && prev[qi] === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>
      ${correccion(qi, p[1])}</div>`).join('');
  } else if (a.tipo === 'completar') {
    cuerpo = a.preguntas.map((q, qi) => {
      const [antes, despues] = q.p.split('___');
      return `<div class="pregunta ${marca(qi)}"><label class="completar" for="${pre}-q${qi}"><span>${qi + 1}. ${esc(antes)}</span>
        <input id="${pre}-q${qi}" name="q${qi}" class="hueco" autocomplete="off" autocapitalize="none" spellcheck="false" value="${prev ? esc(prev[qi]) : ''}" required aria-label="Espacio de la oración ${qi + 1}">
        <span>${esc(despues)}</span></label>${correccion(qi, q.r[0])}</div>`;
    }).join('');
  } else if (a.tipo === 'ordenar') {
    cuerpo = a.preguntas.map((q, qi) => {
      const palabras = q.r.split(' ');
      let elegidas = [], banco = barajar(palabras, pre + qi);
      if (prev && prev[qi]) {
        elegidas = String(prev[qi]).split(' ').filter(Boolean);
        banco = banco.slice();
        elegidas.forEach(w => { const k = banco.indexOf(w); if (k >= 0) banco.splice(k, 1); });
      }
      const chip = w => `<button type="button" class="ficha" data-accion="ficha">${esc(w)}</button>`;
      return `<div class="pregunta ordenar ${marca(qi)}" data-ordenar><p class="etiqueta-q">${qi + 1}.</p>
        <div class="respuesta-ordenar" aria-label="Tu oración">${elegidas.map(chip).join('')}</div>
        <div class="banco" aria-label="Palabras disponibles">${banco.map(chip).join('')}</div>
        <input type="hidden" name="q${qi}" value="${prev ? esc(prev[qi]) : ''}">
        ${correccion(qi, q.r)}</div>`;
    }).join('');
  } else if (a.tipo === 'escritura') {
    const bloqueada = r && r.revisado;
    cuerpo = `<div class="ejemplo"><span>Ejemplo</span><p class="en">${esc(a.ejemplo)}</p></div>
      <label class="bloque">Tu texto<textarea name="texto" rows="6" ${bloqueada ? 'readonly' : ''} required placeholder="Hello! My name is…">${prev ? esc(prev.texto) : ''}</textarea></label>`;
  }

  const bloqueada = a.tipo === 'escritura' && r && r.revisado;
  let boton = '';
  if (!preview) {
    if (bloqueada) boton = '<p class="nota">Tu maestro ya revisó esta actividad.</p>';
    else boton = `<button class="btn" type="submit">${r ? (a.tipo === 'escritura' ? 'Actualizar mi texto' : 'Enviar de nuevo') : 'Enviar respuestas'}</button>`;
  }
  const resultado = r && a.tipo !== 'escritura'
    ? `<p class="resultado">Aciertos: <b>${(detalle || []).filter(Boolean).length} de ${(detalle || []).length}</b>${r.intentos > 1 ? ` · Intentos: ${r.intentos}` : ''}</p>` : '';
  const obs = r && (r.observacion || (r.revisado && r.calificacionMaestro !== null && r.calificacionMaestro !== undefined))
    ? `<div class="observacion"><strong>Observación de tu maestro</strong>${r.calificacionMaestro !== null && r.calificacionMaestro !== undefined ? `<span class="cal">Calificación: ${formatoCal(r.calificacionMaestro)}</span>` : ''}${r.observacion ? `<p>${esc(r.observacion)}</p>` : ''}</div>` : '';

  return `<article class="tarjeta actividad" id="act-${a.id}">
    <header class="act-cab"><div><span class="num">Actividad ${i + 1}</span><h2>${esc(a.titulo)}</h2></div>${preview ? '' : estadoActividad(a, r)}</header>
    <p class="instrucciones">${esc(a.instrucciones)}</p>
    ${obs}${resultado}
    <form data-form="actividad" data-unidad="${u.id}" data-actividad="${a.id}" class="act-form">${cuerpo}<div class="acciones">${boton}</div></form>
  </article>`;
}

function calificarItem(a, it, resp) {
  if (a.tipo === 'opcion') return String(resp) === String(it.correcta);
  if (a.tipo === 'relacionar') return norm(resp) === norm(it[1]);
  if (a.tipo === 'completar') return it.r.some(x => norm(x) === norm(resp));
  if (a.tipo === 'ordenar') return norm(resp) === norm(it.r);
  return false;
}

async function enviarActividad(form) {
  if (yo.rol === 'maestro') { aviso('En la vista previa no se guardan respuestas.'); return; }
  const u = buscarUnidad(form.dataset.unidad);
  const a = u.actividades.find(x => x.id === form.dataset.actividad);
  const fd = new FormData(form);
  let registro;
  if (a.tipo === 'escritura') {
    const texto = String(fd.get('texto') || '').trim();
    if (texto.length < 10) { aviso('Escribe tu texto antes de enviarlo.', 'error'); return; }
    registro = { tipo: 'manual', respuestas: { texto }, detalle: null, puntaje: null, total: 0 };
  } else {
    const items = itemsDe(a);
    const respuestas = items.map((_, i) => String(fd.get('q' + i) ?? ''));
    if (respuestas.some(x => !x.trim())) { aviso('Contesta todas las preguntas antes de enviar.', 'error'); return; }
    const detalle = items.map((it, i) => calificarItem(a, it, respuestas[i]));
    const puntaje = Math.round(detalle.filter(Boolean).length / detalle.length * 100) / 10;
    registro = { tipo: 'auto', respuestas, detalle, puntaje, total: items.length };
  }
  const btn = form.querySelector('button[type=submit]');
  if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }
  try {
    await D.guardarRespuesta({ uid: yo.uid, nombre: yo.nombre, unidad: u.id, actividad: a.id, ...registro });
    aviso(a.tipo === 'escritura' ? 'Listo. Tu maestro revisará tu texto.' : `Enviado. Tu calificación: ${formatoCal(registro.puntaje)}`);
    await vistaUnidad(u.id, 'ejercicios');
    const el = document.getElementById('act-' + a.id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (e) {
    console.error(e);
    aviso('No se pudo enviar. Revisa tu conexión.', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'Enviar respuestas'; }
  }
}

// ---------------------------------------------------------------------
//  ALUMNO · Mi avance
// ---------------------------------------------------------------------
async function vistaAvance() {
  pintar(cargando(), 'avance');
  const [resp, perfil] = await Promise.all([D.respuestasDe(yo.uid), D.perfil(yo.uid)]);
  const cals = resp.map(calificacionDe).filter(n => n !== null);
  const promedio = cals.length ? cals.reduce((s, n) => s + n, 0) / cals.length : null;
  const filas = resp.sort((x, y) => (y.fecha || 0) - (x.fecha || 0)).map(r => {
    const n = nombreActividad(r.unidad, r.actividad);
    return `<li class="item-avance"><div><strong>${esc(n.texto)}</strong><small>${fecha(r.fecha)}</small></div>
      <span class="cal-grande">${r.tipo === 'manual' && !r.revisado ? '<span class="estado revision">En revisión</span>' : formatoCal(calificacionDe(r))}</span>
      ${r.observacion ? `<p class="obs-linea">${esc(r.observacion)}</p>` : ''}</li>`;
  }).join('');
  pintar(`
    <h1>Mi avance</h1>
    <div class="resumen">
      <div class="dato"><span>${resp.length}</span><small>Actividades entregadas</small></div>
      <div class="dato"><span>${formatoCal(promedio)}</span><small>Promedio general</small></div>
    </div>
    ${perfil && perfil.observacionGeneral ? `<div class="observacion"><strong>Mensaje de tu maestro</strong><p>${esc(perfil.observacionGeneral)}</p></div>` : ''}
    <section class="tarjeta"><h2>Mis actividades</h2>${filas ? `<ul class="lista-avance">${filas}</ul>` : '<p>Aún no entregas actividades. ¡Empieza con la Unidad 1!</p>'}</section>`, 'avance');
}

// ---------------------------------------------------------------------
//  MAESTRO · Pendientes por revisar
// ---------------------------------------------------------------------
function formRevision(r) {
  return `<form data-form="revisar" data-id="${esc(r.id)}" class="form-revision">
    <label class="cal-campo">Calificación (0 a 10)<input name="cal" type="number" min="0" max="10" step="0.5" inputmode="decimal" value="${r.calificacionMaestro ?? ''}" placeholder="${r.tipo === 'auto' ? formatoCal(r.puntaje) : ''}"></label>
    <label class="bloque">Observación para el alumno<textarea name="obs" rows="3" placeholder="Escribe una observación…">${esc(r.observacion || '')}</textarea></label>
    <button class="btn" type="submit">${r.revisado ? 'Actualizar revisión' : 'Guardar revisión'}</button>
  </form>`;
}

async function vistaPendientes() {
  pintar(cargando(), 'pendientes');
  const todas = await D.todasRespuestas();
  const pend = todas.filter(r => r.tipo === 'manual' && !r.revisado).sort((a, b) => (a.fecha || 0) - (b.fecha || 0));
  const recientes = todas.filter(r => r.tipo === 'auto').sort((a, b) => (b.fecha || 0) - (a.fecha || 0)).slice(0, 8);
  const tarjetas = pend.map(r => {
    const n = nombreActividad(r.unidad, r.actividad);
    return `<article class="tarjeta">
      <header class="act-cab"><div><a class="num" href="#/maestro/alumno/${esc(r.uid)}">${esc(r.nombre)}</a><h2>${esc(n.texto)}</h2></div><small>${fecha(r.fecha)}</small></header>
      <blockquote class="texto-alumno">${esc(r.respuestas && r.respuestas.texto)}</blockquote>
      ${formRevision(r)}</article>`;
  }).join('');
  pintar(`
    <h1>Pendientes por revisar</h1>
    ${pend.length ? `<p>${pend.length} ${pend.length === 1 ? 'texto espera' : 'textos esperan'} tu revisión.</p>${tarjetas}` : '<div class="tarjeta vacia"><p>No hay textos pendientes. ¡Todo al día!</p></div>'}
    <section class="tarjeta"><h2>Actividades recientes (calificación automática)</h2>
      ${recientes.length ? `<ul class="lista-avance">${recientes.map(r => `<li class="item-avance"><div><a href="#/maestro/alumno/${esc(r.uid)}"><strong>${esc(r.nombre)}</strong></a><small>${esc(nombreActividad(r.unidad, r.actividad).texto)} · ${fecha(r.fecha)}</small></div><span class="cal-grande">${formatoCal(calificacionDe(r))}</span></li>`).join('')}</ul>` : '<p>Todavía no hay actividades entregadas.</p>'}
    </section>`, 'pendientes');
}

// ---------------------------------------------------------------------
//  MAESTRO · Alumnos
// ---------------------------------------------------------------------
async function vistaAlumnos() {
  pintar(cargando(), 'alumnos');
  const [usuarios, todas] = await Promise.all([D.usuarios(), D.todasRespuestas()]);
  const alumnos = usuarios.filter(u => u.rol === 'alumno').sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  const totalAbiertas = UNIDADES.filter(u => !u.proximamente && config.abiertas.includes(u.id)).reduce((s, u) => s + (u.actividades || []).length, 0);
  const filas = alumnos.map(al => {
    const rs = todas.filter(r => r.uid === al.uid);
    const cals = rs.map(calificacionDe).filter(n => n !== null);
    const prom = cals.length ? cals.reduce((s, n) => s + n, 0) / cals.length : null;
    const pend = rs.filter(r => r.tipo === 'manual' && !r.revisado).length;
    return `<tr class="${al.activo === false ? 'inactivo' : ''}">
      <td><a href="#/maestro/alumno/${esc(al.uid)}"><strong>${esc(al.nombre)}</strong></a><small class="bloque-sm">${esc(al.usuario)}${al.activo === false ? ' · desactivado' : ''}</small></td>
      <td>${esc(al.grupo || '—')}</td>
      <td>${rs.length} / ${totalAbiertas}</td>
      <td>${formatoCal(prom)}</td>
      <td>${pend ? `<span class="estado revision">${pend}</span>` : '—'}</td></tr>`;
  }).join('');
  pintar(`
    <div class="fila-titulo"><h1>Alumnos</h1><a class="btn btn-chico" href="#/maestro/alta">+ Dar de alta</a></div>
    <p>${alumnos.length} ${alumnos.length === 1 ? 'alumno registrado' : 'alumnos registrados'}.</p>
    ${alumnos.length ? `<div class="tabla-caja tarjeta"><table class="tabla"><thead><tr><th scope="col">Alumno</th><th scope="col">Grupo</th><th scope="col">Entregadas</th><th scope="col">Promedio</th><th scope="col">Por revisar</th></tr></thead><tbody>${filas}</tbody></table></div>`
      : '<div class="tarjeta vacia"><p>Aún no hay alumnos. Da de alta al primero.</p></div>'}`, 'alumnos');
}

async function vistaDetalleAlumno(uid) {
  pintar(cargando(), 'alumnos');
  const [al, rs] = await Promise.all([D.perfil(uid), D.respuestasDe(uid)]);
  if (!al) return pintar('<div class="tarjeta"><h2>Alumno no encontrado</h2><a class="btn" href="#/maestro/alumnos">Regresar</a></div>', 'alumnos');
  const unidades = UNIDADES.filter(u => !u.proximamente);
  const bloques = unidades.map(u => {
    const items = u.actividades.map(a => {
      const r = rs.find(x => x.unidad === u.id && x.actividad === a.id);
      if (!r) return `<li class="act-alumno"><div class="act-alumno-cab"><strong>${esc(a.titulo)}</strong><span class="estado pendiente">Sin entregar</span></div></li>`;
      let resumen = '';
      if (a.tipo === 'escritura') resumen = `<blockquote class="texto-alumno">${esc(r.respuestas && r.respuestas.texto)}</blockquote>`;
      else {
        const items = itemsDe(a);
        resumen = `<ol class="resp-lista">${items.map((it, i) => {
          let dada = r.respuestas[i];
          if (a.tipo === 'opcion') dada = it.opciones[Number(dada)] ?? dada;
          return `<li class="${r.detalle && r.detalle[i] ? 'bien' : 'mal'}">${r.detalle && r.detalle[i] ? '✓' : '✗'} ${esc(dada)}</li>`;
        }).join('')}</ol>`;
      }
      return `<li class="act-alumno"><details ${a.tipo === 'escritura' && !r.revisado ? 'open' : ''}><summary class="act-alumno-cab"><strong>${esc(a.titulo)}</strong>${estadoActividad(a, r)}</summary>
        <small>Entregada: ${fecha(r.fecha)}${r.intentos > 1 ? ` · ${r.intentos} intentos` : ''}</small>${resumen}${formRevision(r)}</details></li>`;
    }).join('');
    return `<section class="tarjeta"><h2>Unidad ${u.numero} · ${esc(u.titulo)}</h2><ul class="lista-act">${items}</ul></section>`;
  }).join('');
  const cals = rs.map(calificacionDe).filter(n => n !== null);
  pintar(`
    <a class="volver" href="#/maestro/alumnos">← Alumnos</a>
    <div class="fila-titulo"><div><h1>${esc(al.nombre)}</h1><p class="sub-detalle">Usuario: <b>${esc(al.usuario)}</b>${al.grupo ? ` · Grupo: ${esc(al.grupo)}` : ''}</p></div>
      <button type="button" class="btn-sec btn-chico" data-accion="activar" data-uid="${esc(uid)}" data-activo="${al.activo === false ? '1' : '0'}">${al.activo === false ? 'Reactivar acceso' : 'Desactivar acceso'}</button></div>
    <div class="resumen"><div class="dato"><span>${rs.length}</span><small>Entregadas</small></div><div class="dato"><span>${formatoCal(cals.length ? cals.reduce((s, n) => s + n, 0) / cals.length : null)}</span><small>Promedio</small></div></div>
    <section class="tarjeta"><h2>Mensaje general para el alumno</h2>
      <form data-form="obs-general" data-uid="${esc(uid)}"><label class="bloque">Lo verá en "Mi avance"<textarea name="obs" rows="3">${esc(al.observacionGeneral || '')}</textarea></label><button class="btn" type="submit">Guardar mensaje</button></form></section>
    ${bloques}`, 'alumnos');
}

// ---------------------------------------------------------------------
//  MAESTRO · Unidades
// ---------------------------------------------------------------------
function vistaUnidades() {
  const filas = UNIDADES.map(u => {
    const abierta = config.abiertas.includes(u.id);
    return `<li class="unidad-fila"><div><span class="num">Unidad ${u.numero}</span><strong>${esc(u.titulo)}</strong><small>${esc(u.tituloEs)}</small></div>
      <div class="acciones-fila">${u.proximamente ? '<span class="etiqueta">En preparación</span>' : `
        <a class="btn-sec btn-chico" href="#/unidad/${u.id}">Vista previa</a>
        <button type="button" class="${abierta ? 'btn-sec' : 'btn'} btn-chico" data-accion="abrir-unidad" data-id="${u.id}">${abierta ? 'Cerrar' : 'Abrir a alumnos'}</button>`}
        ${abierta && !u.proximamente ? '<span class="estado ok">Abierta</span>' : ''}</div></li>`;
  }).join('');
  pintar(`<h1>Unidades</h1><p>Abre cada unidad cuando el grupo esté listo. Los alumnos solo ven las unidades abiertas.</p><ul class="tarjeta lista-unidades">${filas}</ul>`, 'unidades');
}

// ---------------------------------------------------------------------
//  MAESTRO · Dar de alta
// ---------------------------------------------------------------------
function generarPassword() {
  const letras = 'abcdefghjkmnpqrstuvwxyz';
  let p = '';
  for (let i = 0; i < 4; i++) p += letras[Math.floor(Math.random() * letras.length)];
  return p + Math.floor(1000 + Math.random() * 9000);
}

function vistaAlta(resultado) {
  pintar(`
    <h1>Dar de alta</h1>
    ${resultado ? `<section class="tarjeta exito" aria-live="polite"><h2>¡Listo! ${esc(resultado.nombre)} ya tiene acceso</h2>
      <p>Comparte estos datos con ${esc(primerNombre(resultado.nombre))}:</p>
      <pre class="mensaje-copiar" id="mensaje-alta">${esc(resultado.mensaje)}</pre>
      <button type="button" class="btn-sec btn-chico" data-accion="copiar" data-objetivo="mensaje-alta">Copiar mensaje</button></section>` : ''}
    <section class="tarjeta">
      <form data-form="alta" class="formulario">
        <label>Nombre completo<input name="nombre" required placeholder="María López Hernández"></label>
        <label>Usuario<input name="usuario" required autocapitalize="none" spellcheck="false" placeholder="maria.lopez"><small>Sin espacios ni acentos. Así entrará el alumno.</small></label>
        <label>Contraseña<span class="campo-con-boton"><input name="password" required minlength="6" value="${generarPassword()}"><button type="button" class="btn-sec btn-chico" data-accion="generar-pass">Otra</button></span><small>Mínimo 6 caracteres.</small></label>
        <label>Grupo<input name="grupo" placeholder="Básico A"></label>
        <label>Tipo de cuenta<select name="rol"><option value="alumno">Alumno</option><option value="maestro">Maestro (acceso completo)</option></select></label>
        <button class="btn" type="submit">Crear acceso</button>
      </form>
    </section>`, 'alta');
}

async function crearAlta(form) {
  const fd = new FormData(form);
  const datos = {
    nombre: String(fd.get('nombre') || '').trim(),
    usuario: normalizarUsuario(fd.get('usuario')),
    password: String(fd.get('password') || ''),
    grupo: String(fd.get('grupo') || '').trim(),
    rol: fd.get('rol') === 'maestro' ? 'maestro' : 'alumno'
  };
  if (!datos.nombre || !datos.usuario) { aviso('Escribe el nombre y el usuario.', 'error'); return; }
  if (datos.password.length < 6) { aviso('La contraseña debe tener al menos 6 caracteres.', 'error'); return; }
  const btn = form.querySelector('button[type=submit]'); btn.disabled = true; btn.textContent = 'Creando…';
  try {
    await D.crearUsuario(datos);
    const url = location.origin + location.pathname;
    vistaAlta({
      nombre: datos.nombre,
      mensaje: `Hola ${primerNombre(datos.nombre)}, ya tienes acceso a Misioneros del Inglés.\nEntra en: ${url}\nUsuario: ${datos.usuario}\nContraseña: ${datos.password}`
    });
  } catch (e) {
    console.error(e);
    aviso(e.message && !e.code ? e.message : 'No se pudo crear el acceso. Intenta de nuevo.', 'error');
    btn.disabled = false; btn.textContent = 'Crear acceso';
  }
}

// ---------------------------------------------------------------------
//  Eventos
// ---------------------------------------------------------------------
document.addEventListener('click', async ev => {
  const el = ev.target.closest('[data-accion]');
  if (!el) return;
  const acc = el.dataset.accion;
  if (acc === 'hablar') return hablar(el.dataset.texto);
  if (acc === 'salir') { history.replaceState(null, '', location.pathname + location.search); return D.salir(); }
  if (acc === 'recargar') return location.reload();
  if (acc === 'reiniciar-demo') { if (confirm('¿Borrar los datos de prueba y empezar de nuevo?')) D.reiniciar(); return; }
  if (acc === 'ficha') {
    const caja = el.closest('[data-ordenar]');
    const destino = el.parentElement.classList.contains('banco') ? caja.querySelector('.respuesta-ordenar') : caja.querySelector('.banco');
    destino.appendChild(el);
    caja.querySelector('input[type=hidden]').value = [...caja.querySelectorAll('.respuesta-ordenar .ficha')].map(f => f.textContent).join(' ');
    caja.classList.remove('bien', 'mal');
    return;
  }
  if (acc === 'generar-pass') { el.parentElement.querySelector('input').value = generarPassword(); return; }
  if (acc === 'copiar') {
    const t = document.getElementById(el.dataset.objetivo).textContent;
    try { await navigator.clipboard.writeText(t); aviso('Mensaje copiado. Pégalo en WhatsApp.'); } catch (e) { aviso('Selecciona el texto y cópialo manualmente.', 'error'); }
    return;
  }
  if (acc === 'abrir-unidad') {
    const id = el.dataset.id;
    const abiertas = config.abiertas.includes(id) ? config.abiertas.filter(x => x !== id) : [...config.abiertas, id];
    el.disabled = true;
    try { await D.guardarConfig({ abiertas }); config.abiertas = abiertas; vistaUnidades(); aviso('Unidades actualizadas.'); }
    catch (e) { console.error(e); aviso('No se pudo guardar.', 'error'); el.disabled = false; }
    return;
  }
  if (acc === 'activar') {
    const activar = el.dataset.activo === '1';
    if (!activar && !confirm('El alumno ya no podrá entrar hasta que lo reactives. ¿Continuar?')) return;
    try { await D.actualizarUsuario(el.dataset.uid, { activo: activar }); aviso(activar ? 'Acceso reactivado.' : 'Acceso desactivado.'); vistaDetalleAlumno(el.dataset.uid); }
    catch (e) { console.error(e); aviso('No se pudo guardar.', 'error'); }
  }
});

document.addEventListener('submit', async ev => {
  const form = ev.target.closest('form[data-form]');
  if (!form) return;
  ev.preventDefault();
  const tipo = form.dataset.form;
  if (tipo === 'login') {
    const fd = new FormData(form);
    const btn = form.querySelector('button'); btn.disabled = true; btn.textContent = 'Entrando…';
    try { await D.entrar(fd.get('usuario'), fd.get('password')); }
    catch (e) { mostrarLogin('Usuario o contraseña incorrectos.'); }
    return;
  }
  if (tipo === 'actividad') return enviarActividad(form);
  if (tipo === 'alta') return crearAlta(form);
  if (tipo === 'revisar') {
    const fd = new FormData(form);
    const v = String(fd.get('cal') || '').trim();
    const cal = v === '' ? null : Math.max(0, Math.min(10, Number(v)));
    try {
      await D.revisar(form.dataset.id, { calificacionMaestro: cal, observacion: String(fd.get('obs') || '').trim() });
      aviso('Revisión guardada.');
      rutear();
    } catch (e) { console.error(e); aviso('No se pudo guardar la revisión.', 'error'); }
    return;
  }
  if (tipo === 'obs-general') {
    const fd = new FormData(form);
    try { await D.actualizarUsuario(form.dataset.uid, { observacionGeneral: String(fd.get('obs') || '').trim() }); aviso('Mensaje guardado.'); }
    catch (e) { console.error(e); aviso('No se pudo guardar.', 'error'); }
  }
});

// ---------------------------------------------------------------------
//  Arranque
// ---------------------------------------------------------------------
async function arrancar() {
  $app.innerHTML = cargando();
  try { D = await iniciar(); }
  catch (e) {
    console.error(e);
    $app.innerHTML = '<main class="login"><div class="login-caja"><h1>Sin conexión</h1><p>No se pudo conectar con la plataforma. Revisa tu internet e intenta de nuevo.</p><button class="btn" data-accion="recargar">Reintentar</button></div></main>';
    return;
  }
  D.onSesion(async (perfil, msg) => {
    yo = perfil;
    if (!yo) { mostrarLogin(msg); return; }
    try { config = await D.config(); } catch (e) { console.error(e); }
    const inicio = yo.rol === 'maestro' ? '#/maestro' : '#/inicio';
    if (!location.hash || location.hash === '#/' || location.hash === '#') location.hash = inicio; // dispara hashchange
    else rutear();
  });
  window.addEventListener('hashchange', () => { rutear(); window.scrollTo(0, 0); });
  if ('speechSynthesis' in window) speechSynthesis.getVoices();
}

arrancar();
