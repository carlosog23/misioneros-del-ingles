// =====================================================================
//  CONFIGURACIÓN DE FIREBASE · proyecto misioneros-del-ingles
//  Estos datos no son secretos: la seguridad la dan las reglas de Firestore.
// =====================================================================

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyD7m3G2nB6PlV0PpaXPX_1__34AHGAiV3A',
  authDomain: 'misioneros-del-ingles.firebaseapp.com',
  projectId: 'misioneros-del-ingles',
  storageBucket: 'misioneros-del-ingles.firebasestorage.app',
  messagingSenderId: '744066981794',
  appId: '1:744066981794:web:bdb8851cea0b12c0e45cfb'
};

// Los alumnos entran con un usuario (por ejemplo "maria.lopez").
// Por dentro, Firebase lo guarda como un correo con este dominio.
// No necesita existir ni recibir correos. No lo cambies después de dar de alta alumnos.
export const DOMINIO_USUARIOS = 'misioneros164.app';
