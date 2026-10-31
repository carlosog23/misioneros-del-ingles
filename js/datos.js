// =====================================================================
//  CAPA DE DATOS
//  Dos modos con las mismas funciones:
//   - firebase: datos reales en la nube, compartidos entre todos.
//   - demo: datos de prueba guardados solo en este navegador.
// =====================================================================

import { FIREBASE_CONFIG, DOMINIO_USUARIOS } from './firebase-config.js';

// Recorrido de prueba (demo.html): siempre en modo demostración, sin tocar los datos reales
export const VISITA = typeof window !== 'undefined' && window.MISIONEROS_VISITA === true;
const configurado = !VISITA && !!(FIREBASE_CONFIG && FIREBASE_CONFIG.apiKey && !FIREBASE_CONFIG.apiKey.startsWith('PEGA') && FIREBASE_CONFIG.projectId);
export const MODO = configurado ? 'firebase' : 'demo';

export function normalizarUsuario(u) {
  return String(u || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().trim()
    .replace(/\s+/g, '.')
    .replace(/[^a-z0-9._-]/g, '');
}

export async function iniciar() {
  return configurado ? crearFirebase() : crearDemo();
}

const CONFIG_INICIAL = { abiertas: ['u1'] };

// ---------------------------------------------------------------------
//  FIREBASE
// ---------------------------------------------------------------------
async function crearFirebase() {
  const B = 'https://www.gstatic.com/firebasejs/10.12.2/';
  const [appM, authM, fs] = await Promise.all([
    import(B + 'firebase-app.js'),
    import(B + 'firebase-auth.js'),
    import(B + 'firebase-firestore.js')
  ]);
  const app = appM.initializeApp(FIREBASE_CONFIG);
  const auth = authM.getAuth(app);
  const db = fs.getFirestore(app);
  const correo = u => `${normalizarUsuario(u)}@${DOMINIO_USUARIOS}`;
  const lista = snap => snap.docs.map(d => ({ id: d.id, uid: d.id, ...d.data() }));

  return {
    modo: 'firebase',
    onSesion(cb) {
      authM.onAuthStateChanged(auth, async u => {
        if (!u) return cb(null);
        try {
          const s = await fs.getDoc(fs.doc(db, 'usuarios', u.uid));
          if (!s.exists()) { await authM.signOut(auth); return cb(null, 'Tu usuario todavía no tiene perfil. Avisa a tu maestro.'); }
          const p = { uid: u.uid, ...s.data() };
          if (p.activo === false) { await authM.signOut(auth); return cb(null, 'Tu acceso está desactivado. Habla con tu maestro.'); }
          cb(p);
        } catch (e) {
          console.error(e);
          cb(null, 'No se pudo cargar tu perfil. Revisa tu conexión.');
        }
      });
    },
    entrar: (u, p) => authM.signInWithEmailAndPassword(auth, correo(u), p),
    salir: () => authM.signOut(auth),
    async perfil(uid) {
      const s = await fs.getDoc(fs.doc(db, 'usuarios', uid));
      return s.exists() ? { uid, ...s.data() } : null;
    },
    async usuarios() {
      return lista(await fs.getDocs(fs.collection(db, 'usuarios')));
    },
    async crearUsuario({ nombre, usuario, password, grupo, rol }) {
      // Se usa una segunda conexión para no cerrar la sesión del maestro.
      const sec = appM.initializeApp(FIREBASE_CONFIG, 'alta-' + Date.now());
      const sa = authM.getAuth(sec);
      try {
        const cred = await authM.createUserWithEmailAndPassword(sa, correo(usuario), password);
        await fs.setDoc(fs.doc(db, 'usuarios', cred.user.uid), {
          nombre, usuario: normalizarUsuario(usuario), grupo: grupo || '', rol: rol || 'alumno', activo: true, creado: Date.now()
        });
        await authM.signOut(sa);
      } catch (e) {
        if (e && e.code === 'auth/email-already-in-use') throw new Error('Ese usuario ya existe. Elige otro.');
        if (e && e.code === 'auth/weak-password') throw new Error('La contraseña debe tener al menos 6 caracteres.');
        throw e;
      } finally {
        await appM.deleteApp(sec);
      }
    },
    actualizarUsuario: (uid, data) => fs.updateDoc(fs.doc(db, 'usuarios', uid), data),
    async respuestasDe(uid) {
      return lista(await fs.getDocs(fs.query(fs.collection(db, 'respuestas'), fs.where('uid', '==', uid))));
    },
    async todasRespuestas() {
      return lista(await fs.getDocs(fs.collection(db, 'respuestas')));
    },
    async guardarRespuesta(r) {
      const id = `${r.uid}_${r.unidad}_${r.actividad}`;
      const ref = fs.doc(db, 'respuestas', id);
      const prev = await fs.getDoc(ref);
      const base = prev.exists() ? prev.data() : { observacion: '', calificacionMaestro: null, revisado: false, intentos: 0 };
      await fs.setDoc(ref, { ...base, ...r, intentos: (base.intentos || 0) + 1, fecha: Date.now() });
    },
    revisar: (id, { calificacionMaestro, observacion }) =>
      fs.updateDoc(fs.doc(db, 'respuestas', id), { calificacionMaestro, observacion, revisado: true, fechaRevision: Date.now() }),
    async config() {
      const s = await fs.getDoc(fs.doc(db, 'config', 'general'));
      return s.exists() ? { ...CONFIG_INICIAL, ...s.data() } : { ...CONFIG_INICIAL };
    },
    guardarConfig: c => fs.setDoc(fs.doc(db, 'config', 'general'), c, { merge: true })
  };
}

// ---------------------------------------------------------------------
//  MODO DEMOSTRACIÓN (solo en este navegador)
// ---------------------------------------------------------------------
function crearDemo() {
  const CLAVE = VISITA ? 'misioneros-visita-v1' : 'misioneros-demo-v1';
  let memoria = null;
  const leer = () => {
    try { const t = localStorage.getItem(CLAVE); if (t) return JSON.parse(t); } catch (e) { /* sin almacenamiento */ }
    return memoria;
  };
  const escribir = d => {
    memoria = d;
    try { localStorage.setItem(CLAVE, JSON.stringify(d)); } catch (e) { /* sin almacenamiento */ }
  };
  let d = leer();
  if (!d) {
    const ahora = Date.now();
    d = {
      sesion: null,
      config: { ...CONFIG_INICIAL },
      usuarios: {
        m1: { nombre: 'Teacher Carlos', usuario: 'teacher', password: 'demo123', rol: 'maestro', grupo: '', activo: true },
        a1: { nombre: 'María López', usuario: 'maria', password: 'demo123', rol: 'alumno', grupo: 'Básico A', activo: true },
        a2: { nombre: 'José Ramírez', usuario: 'jose', password: 'demo123', rol: 'alumno', grupo: 'Básico A', activo: true },
        a3: { nombre: 'Guadalupe Torres', usuario: 'lupita', password: 'demo123', rol: 'alumno', grupo: 'Básico B', activo: true },
        ...(VISITA ? { v1: { nombre: 'Visitante', usuario: 'visitante', password: 'visita164', rol: 'alumno', grupo: 'Recorrido de prueba', activo: true } } : {})
      },
      respuestas: {
        a2_u1_a1: { uid: 'a2', nombre: 'José Ramírez', unidad: 'u1', actividad: 'a1', tipo: 'auto', respuestas: ['1', '2', '0', '1', '0', '0'], detalle: [true, true, true, true, false, true], puntaje: 8.3, total: 6, intentos: 1, fecha: ahora - 86400000, observacion: '', calificacionMaestro: null, revisado: false },
        a2_u1_a5: { uid: 'a2', nombre: 'José Ramírez', unidad: 'u1', actividad: 'a5', tipo: 'manual', respuestas: { texto: "Hello! My name is José. I am from Oaxaca. I live in Rosarito. I am fine thank you. Goodbye!" }, detalle: null, puntaje: null, total: 0, intentos: 1, fecha: ahora - 3600000, observacion: '', calificacionMaestro: null, revisado: false }
      }
    };
    escribir(d);
  }
  const oyentes = [];
  const avisar = msg => {
    const u = d.sesion && d.usuarios[d.sesion];
    const p = u ? { uid: d.sesion, ...u } : null;
    oyentes.forEach(cb => cb(p, msg));
  };
  const sinPass = (uid, u) => { const { password, ...resto } = u; return { uid, id: uid, ...resto }; };
  const espera = () => new Promise(r => setTimeout(r, 120));

  return {
    modo: 'demo',
    onSesion(cb) { oyentes.push(cb); setTimeout(() => avisar(), 0); },
    async entrar(usuario, password) {
      await espera();
      const n = normalizarUsuario(usuario);
      const par = Object.entries(d.usuarios).find(([, u]) => u.usuario === n && u.password === password);
      if (!par) throw new Error('credenciales');
      if (par[1].activo === false) { avisar('Tu acceso está desactivado. Habla con tu maestro.'); return; }
      d.sesion = par[0]; escribir(d); avisar();
    },
    async salir() { d.sesion = null; escribir(d); avisar(); },
    async perfil(uid) { return d.usuarios[uid] ? sinPass(uid, d.usuarios[uid]) : null; },
    async usuarios() { return Object.entries(d.usuarios).map(([k, u]) => sinPass(k, u)); },
    async crearUsuario({ nombre, usuario, password, grupo, rol }) {
      await espera();
      const n = normalizarUsuario(usuario);
      if (Object.values(d.usuarios).some(u => u.usuario === n)) throw new Error('Ese usuario ya existe. Elige otro.');
      if (String(password).length < 6) throw new Error('La contraseña debe tener al menos 6 caracteres.');
      d.usuarios['u' + Date.now()] = { nombre, usuario: n, password, grupo: grupo || '', rol: rol || 'alumno', activo: true, creado: Date.now() };
      escribir(d);
    },
    async actualizarUsuario(uid, data) { Object.assign(d.usuarios[uid], data); escribir(d); },
    async respuestasDe(uid) { return Object.entries(d.respuestas).filter(([, r]) => r.uid === uid).map(([id, r]) => ({ id, ...r })); },
    async todasRespuestas() { return Object.entries(d.respuestas).map(([id, r]) => ({ id, ...r })); },
    async guardarRespuesta(r) {
      await espera();
      const id = `${r.uid}_${r.unidad}_${r.actividad}`;
      const base = d.respuestas[id] || { observacion: '', calificacionMaestro: null, revisado: false, intentos: 0 };
      d.respuestas[id] = { ...base, ...r, intentos: (base.intentos || 0) + 1, fecha: Date.now() };
      escribir(d);
    },
    async revisar(id, { calificacionMaestro, observacion }) {
      Object.assign(d.respuestas[id], { calificacionMaestro, observacion, revisado: true, fechaRevision: Date.now() });
      escribir(d);
    },
    async config() { return { ...CONFIG_INICIAL, ...d.config }; },
    async guardarConfig(c) { d.config = { ...d.config, ...c }; escribir(d); },
    reiniciar() { try { localStorage.removeItem(CLAVE); } catch (e) { /* nada */ } memoria = null; location.reload(); }
  };
}
