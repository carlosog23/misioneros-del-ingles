// =====================================================================
//  ENTRAR CON CÓDIGO QR
//  - Computadora compartida (iMac de la escuela, se abre con ?equipo=compartido):
//    muestra un QR. El alumno o maestro lo escanea con su celular, donde ya
//    inició sesión, y la computadora entra con su cuenta.
//  - Celular: guarda el acceso cifrado en el propio teléfono y, al leer el QR,
//    lo manda cifrado (AES-GCM) a la computadora. La llave va dentro del QR y
//    nunca llega al servidor: el servidor de la zona solo pasa el mensaje.
// =====================================================================

const SERVIDOR = 'https://script.google.com/macros/s/AKfycbyH4wcANu-w9zNKkVECYoRjF9DhJi6pKwLL2sK0jFxGqQwFKNs0yAJzcC0S3yX8yB4aLw/exec';
const VIDA_QR_MS = 4 * 60 * 1000;   // cada código sirve 4 minutos
const ESPERA_MS = 2500;             // revisión mientras el código está a la vista

// ---------- equipo compartido ----------
const LLAVE_EQUIPO = 'mdi-equipo-compartido';
export const COMPARTIDA = (() => {
  try {
    const p = new URLSearchParams(location.search).get('equipo');
    if (p === 'compartido') localStorage.setItem(LLAVE_EQUIPO, '1');
    if (p === 'personal') localStorage.removeItem(LLAVE_EQUIPO);
    return localStorage.getItem(LLAVE_EQUIPO) === '1';
  } catch (e) { return false; }
})();

// ---------- utilidades ----------
const aB64u = u8 => { let s = ''; u8.forEach(b => { s += String.fromCharCode(b); }); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const deB64u = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), c => c.charCodeAt(0));
const azar = n => crypto.getRandomValues(new Uint8Array(n));

async function post(accion, datos, ms = 20000) {
  const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), ms);
  try {
    const r = await fetch(SERVIDOR, { method: 'POST', redirect: 'follow', signal: ctl.signal, headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ accion, datos }) });
    const j = await r.json();
    if (!j || !j.ok) throw new Error((j && (j.mensaje || j.error)) || 'El servidor no respondió.');
    return j;
  } catch (e) {
    if (e.name === 'AbortError') throw new Error('El servidor tardó demasiado. Intenta de nuevo.');
    if (/Failed to fetch|NetworkError|Load failed/i.test(e.message)) throw new Error('Sin conexión a internet.');
    throw e;
  } finally { clearTimeout(t); }
}

const importar = raw => crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt', 'decrypt']);
async function cifrar(llave, obj) {
  const iv = azar(12), c = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, llave, new TextEncoder().encode(JSON.stringify(obj)));
  return aB64u(iv) + '.' + aB64u(new Uint8Array(c));
}
async function descifrar(llave, s) {
  const [iv, c] = String(s).split('.');
  const b = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: deB64u(iv) }, llave, deB64u(c));
  return JSON.parse(new TextDecoder().decode(b));
}

function cargarScript(src) {
  return new Promise((ok, mal) => {
    if (document.querySelector(`script[data-lib="${src}"]`)) return ok();
    const s = document.createElement('script'); s.src = new URL(src, import.meta.url).href; s.dataset.lib = src;
    s.onload = ok; s.onerror = () => mal(new Error('No se pudo cargar ' + src)); document.head.appendChild(s);
  });
}

// =====================================================================
//  CELULAR · acceso guardado en el propio teléfono
//  La llave se crea en el navegador y no se puede sacar de él (no exportable).
// =====================================================================
const CRED = 'mdi-acceso';
function bd() {
  return new Promise((ok, mal) => {
    const r = indexedDB.open('mdi-acceso', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('k');
    r.onsuccess = () => ok(r.result); r.onerror = () => mal(r.error);
  });
}
async function llaveTelefono(crear) {
  const db = await bd();
  const leer = () => new Promise(ok => { const q = db.transaction('k').objectStore('k').get('llave'); q.onsuccess = () => ok(q.result || null); q.onerror = () => ok(null); });
  let k = await leer();
  if (!k && crear) {
    k = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
    await new Promise(ok => { const t = db.transaction('k', 'readwrite'); t.objectStore('k').put(k, 'llave'); t.oncomplete = t.onerror = () => ok(); });
  }
  db.close(); return k;
}
export async function guardarAcceso(usuario, password) {
  if (COMPARTIDA) return;
  try { const k = await llaveTelefono(true); localStorage.setItem(CRED, await cifrar(k, { u: usuario, p: password })); } catch (e) { console.warn(e); }
}
async function leerAcceso() {
  try { const s = localStorage.getItem(CRED); if (!s) return null; const k = await llaveTelefono(false); return k ? await descifrar(k, s) : null; } catch (e) { return null; }
}
export function borrarAcceso() {
  try { localStorage.removeItem(CRED); } catch (e) {}
  try { indexedDB.deleteDatabase('mdi-acceso'); } catch (e) {}
}

// ---------- código leído (llega como enlace: …/#qr=SALA.LLAVE) ----------
const PEND = 'mdi-qr-pendiente';
export function tomarQRdelEnlace() {
  const m = location.hash.match(/^#qr=([A-Za-z0-9_-]{20,40})\.([A-Za-z0-9_-]{40,50})$/);
  if (!m) return;
  try { sessionStorage.setItem(PEND, JSON.stringify({ sala: m[1], k: m[2], t: Date.now() })); } catch (e) {}
  history.replaceState(null, '', location.pathname + location.search);
}
export function qrPendiente() {
  try { const p = JSON.parse(sessionStorage.getItem(PEND) || 'null'); return p && Date.now() - p.t < VIDA_QR_MS ? p : null; } catch (e) { return null; }
}
export const olvidarQR = () => { try { sessionStorage.removeItem(PEND); } catch (e) {} };
function leerTextoQR(txt) {
  const m = String(txt || '').match(/#qr=([A-Za-z0-9_-]{20,40})\.([A-Za-z0-9_-]{40,50})/);
  return m ? { sala: m[1], k: m[2], t: Date.now() } : null;
}

// Celular → computadora: manda el acceso cifrado. Si no hay acceso guardado, usa la contraseña escrita.
export async function enviarAcceso(p, yo, passwordEscrita) {
  let acc = await leerAcceso();
  if (passwordEscrita) acc = { u: yo.usuario, p: passwordEscrita };
  if (!acc || !acc.p) return { faltaPassword: true };
  const llave = await importar(deB64u(p.k));
  await post('vinUnir', { sala: p.sala, app: 'misioneros', nombre: yo.nombre });
  await post('vinSubir', { sala: p.sala, dev: 'cel', datos: await cifrar(llave, { u: acc.u, p: acc.p }) });
  if (passwordEscrita) guardarAcceso(acc.u, acc.p);
  olvidarQR();
  return { listo: true };
}
export const tieneAcceso = async () => !!(await leerAcceso());

// Lector de QR dentro de la app (cámara del celular)
let CAM = null;
export async function abrirLector(video, alLeer, alError) {
  cerrarLector();
  let st;
  try { st = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false }); }
  catch (e) { alError('No se pudo abrir la cámara. Dale permiso o usa la cámara normal del celular para leer el código.'); return; }
  CAM = { st, vivo: true }; video.srcObject = st; video.setAttribute('playsinline', ''); await video.play().catch(() => {});
  let det = null;
  try { if ('BarcodeDetector' in window && (await BarcodeDetector.getSupportedFormats()).includes('qr_code')) det = new BarcodeDetector({ formats: ['qr_code'] }); } catch (e) {}
  if (!det) { try { await cargarScript('./lib/jsQR.js'); } catch (e) { alError('Sin internet no se pudo preparar el lector.'); return; } }
  const c = document.createElement('canvas'), x = c.getContext('2d', { willReadFrequently: true });
  const cam = CAM;
  const vuelta = async () => {
    if (!cam.vivo) return;
    let txt = null;
    try {
      if (video.videoWidth) {
        if (det) { const r = await det.detect(video); txt = r[0] && r[0].rawValue; }
        else { const w = Math.min(640, video.videoWidth), h = Math.round(w * video.videoHeight / video.videoWidth); c.width = w; c.height = h; x.drawImage(video, 0, 0, w, h); const r = window.jsQR(x.getImageData(0, 0, w, h).data, w, h, { inversionAttempts: 'dontInvert' }); txt = r && r.data; }
      }
    } catch (e) {}
    const p = txt && leerTextoQR(txt);
    if (p) { cerrarLector(); alLeer(p); return; }
    setTimeout(vuelta, 250);
  };
  vuelta();
}
export function cerrarLector() {
  if (CAM) { CAM.vivo = false; CAM.st.getTracks().forEach(t => t.stop()); CAM = null; }
}

// =====================================================================
//  COMPUTADORA COMPARTIDA · muestra el QR y espera al celular
// =====================================================================
let ciclo = null;
export function detenerQR() { if (ciclo) { ciclo.vivo = false; clearTimeout(ciclo.t); ciclo = null; } }

// caja: elemento donde se dibuja el QR · entrar(u, p): inicia sesión · estado(texto, tipo)
export async function mostrarQR(caja, entrar, estado) {
  detenerQR();
  const yoCiclo = ciclo = { vivo: true, t: null };
  estado('Preparando el código…');
  let sala, llave, inicio;
  try {
    await cargarScript('./lib/qrcode.min.js');
    const raw = azar(32); llave = await importar(raw);
    sala = (await post('vinCrear', {})).sala;
    if (!yoCiclo.vivo) return;
    const url = location.origin + location.pathname + '#qr=' + sala + '.' + aB64u(raw);
    caja.innerHTML = '';
    new window.QRCode(caja, { text: url, width: 520, height: 520, colorDark: '#0F3B5F', colorLight: '#ffffff', correctLevel: window.QRCode.CorrectLevel.M });
    caja.classList.remove('dormido');
    inicio = Date.now();
    estado('Escanéalo con tu celular');
  } catch (e) { estado(e.message || 'No se pudo preparar el código.', 'error'); caja.classList.add('dormido'); return; }

  let desde = 0;
  const revisar = async () => {
    if (!yoCiclo.vivo) return;
    if (Date.now() - inicio > VIDA_QR_MS) {   // se duerme para no gastar: se reactiva con un toque
      try { post('vinFin', { sala }); } catch (e) {}
      caja.classList.add('dormido'); estado('El código se pausó. Toca aquí para mostrar uno nuevo.', 'pausa');
      yoCiclo.vivo = false; return;
    }
    if (document.hidden) { yoCiclo.t = setTimeout(revisar, ESPERA_MS * 2); return; }
    try {
      const j = await post('vinBajar', { sala, dev: 'pc', desde }, 15000);
      if (j.unida && j.quien) estado('Entrando como ' + j.quien + '…');
      desde = j.hasta || desde;
      for (const ev of j.eventos || []) {
        try {
          const a = await descifrar(llave, ev.datos);
          yoCiclo.vivo = false;
          try { await entrar(a.u, a.p); }
          catch (e) { estado('Tu celular tiene una contraseña vieja. Sal de la app en tu celular, entra de nuevo y vuelve a escanear.', 'error'); setTimeout(() => mostrarQR(caja, entrar, estado), 6000); }
          post('vinFin', { sala }).catch(() => {});
          return;
        } catch (e) {}
      }
    } catch (e) { /* sin red por un momento: se reintenta */ }
    yoCiclo.t = setTimeout(revisar, ESPERA_MS);
  };
  yoCiclo.t = setTimeout(revisar, ESPERA_MS);
}

// ---------- cierre automático en la computadora compartida ----------
export function vigilarInactividad(minutos, avisar, salir) {
  let ult = Date.now(), t = null;
  const toque = () => { ult = Date.now(); };
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(e => addEventListener(e, toque, { passive: true }));
  const revisar = () => {
    const quieto = (Date.now() - ult) / 60000;
    if (quieto >= minutos) { salir(); return; }
    avisar(quieto >= minutos - 2 ? Math.max(1, Math.ceil(minutos - quieto)) : 0);
    t = setTimeout(revisar, 20000);
  };
  t = setTimeout(revisar, 20000);
  return () => { clearTimeout(t); ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(e => removeEventListener(e, toque)); };
}
