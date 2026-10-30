# Misioneros del Inglés · Guía de instalación

Plataforma de inglés de la **Misión Cultural No. 164**, Playas de Rosarito, B.C.
Maestro: Teacher Carlos (Mtro. Carlos Enrique Ortega Torres).

La página se aloja gratis en **GitHub Pages** y guarda los datos (alumnos, respuestas, calificaciones y observaciones) en **Firebase**, también gratis para un grupo de este tamaño.

Mientras no conectes Firebase, la plataforma funciona en **modo demostración**: puedes probarla con `teacher` / `demo123` (maestro) o `maria` / `demo123` (alumna), pero los datos solo se guardan en el navegador de quien la abre.

---

## 1. Crear el proyecto en Firebase (unos 10 minutos)

1. Entra a <https://console.firebase.google.com> con tu cuenta de Google.
2. **Agregar proyecto** → nombre: `misioneros-del-ingles` → puedes desactivar Google Analytics → **Crear proyecto**.

### Activar el inicio de sesión
3. En el menú izquierdo: **Compilación → Authentication → Comenzar**.
4. En la pestaña **Método de acceso**, elige **Correo electrónico/contraseña**, actívalo y **Guarda**.

### Crear la base de datos
5. Menú: **Compilación → Firestore Database → Crear base de datos**.
6. Ubicación: deja la que sugiere (por ejemplo `nam5`) → **Comenzar en modo de producción** → **Crear**.
7. Abre la pestaña **Reglas**, borra lo que tiene, pega todo el contenido del archivo `firestore.rules` y presiona **Publicar**.

### Conectar la página
8. Ve al engrane ⚙️ junto a "Descripción general del proyecto" → **Configuración del proyecto**.
9. Abajo, en "Tus apps", presiona el ícono **`</>`** (Web). Nombre: `Misioneros web`. No marques Hosting. **Registrar app**.
10. Aparecerá un bloque `firebaseConfig` con `apiKey`, `authDomain`, `projectId`, etc.
11. Abre el archivo `js/firebase-config.js` y reemplaza los valores vacíos con los tuyos. Debe quedar parecido a esto:

```js
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSy...',
  authDomain: 'misioneros-del-ingles.firebaseapp.com',
  projectId: 'misioneros-del-ingles',
  storageBucket: 'misioneros-del-ingles.appspot.com',
  messagingSenderId: '1234567890',
  appId: '1:1234567890:web:abc123'
};
```

> Estos datos no son secretos: es normal que estén en la página. Lo que protege la información son las reglas del paso 7.

---

## 2. Crear tu cuenta de maestro (solo la primera vez)

La primera cuenta de maestro se crea a mano; las demás ya se crean desde la plataforma.

1. **Authentication → Usuarios → Agregar usuario**.
   - Correo: `carlos@misioneros164.app` (la parte antes de la @ será tu usuario: `carlos`)
   - Contraseña: la que quieras (mínimo 6 caracteres)
2. Copia el **UID** que aparece en la lista (una clave larga de letras y números).
3. Ve a **Firestore Database → Datos → Iniciar colección**.
   - ID de la colección: `usuarios`
   - ID del documento: pega el **UID** que copiaste
   - Agrega estos campos:

| Campo | Tipo | Valor |
|---|---|---|
| `nombre` | string | Carlos Gabriel Ortega Gutiérrez |
| `usuario` | string | carlos |
| `rol` | string | maestro |
| `activo` | boolean | true |

4. **Guardar**.

---

## 3. Subir la página a GitHub Pages

1. En GitHub: **New repository** → nombre `misioneros-del-ingles` → **Public** → **Create repository**.
2. Presiona **uploading an existing file** y arrastra **todo el contenido** de esta carpeta (los archivos y las carpetas `css`, `js` e `img`). **Commit changes**.
3. En el repositorio: **Settings → Pages** → en "Branch" elige `main` y carpeta `/ (root)` → **Save**.
4. En uno o dos minutos tu página estará en:
   `https://TU-USUARIO.github.io/misioneros-del-ingles/`

### Autorizar tu dominio en Firebase
5. En Firebase: **Authentication → Configuración → Dominios autorizados → Agregar dominio** → escribe `TU-USUARIO.github.io` → **Agregar**.

---

## 4. Empezar a usarla

1. Abre la dirección de tu página y entra con `carlos` y tu contraseña.
2. En **Altas**, crea la cuenta de tu hijo con tipo **Maestro**:
   nombre `Teacher Carlos`, usuario `teacher.carlos` (o el que prefiera).
3. Da de alta a cada alumno. La plataforma genera una contraseña y te da un mensaje listo para copiar y mandar por WhatsApp.
4. En **Unidades** decides qué unidades ven los alumnos. La Unidad 1 ya está abierta.

### En el celular de los alumnos
Al abrir la página en el navegador, pueden elegir **"Agregar a pantalla de inicio"** y les quedará el ícono del sol como si fuera una app.

---

## Preguntas frecuentes

**Un alumno olvidó su contraseña.**
En esta primera versión, entra a Firebase → Authentication, busca su usuario (aparece como `usuario@misioneros164.app`), menú ⋮ → **Restablecer contraseña** no funciona porque el correo no es real. Lo más práctico: desactiva su acceso en la plataforma y créale un usuario nuevo (por ejemplo `maria.lopez2`). En una siguiente fase podemos agregar un botón para cambiar contraseñas.

**¿Cuánto cuesta?**
Nada. El plan gratuito de Firebase (Spark) permite miles de lecturas y escrituras diarias; 30 alumnos usan una fracción mínima.

**¿Cómo agrego una unidad nueva?**
Las unidades viven en `js/contenido.js`. Las Unidades 2 a 6 ya están listadas como "Próximamente"; cuando preparemos su material se completan ahí y se suben de nuevo a GitHub.

---

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página principal |
| `css/estilos.css` | Colores y diseño |
| `js/app.js` | Funcionamiento de la plataforma |
| `js/contenido.js` | Material y ejercicios de cada unidad |
| `js/datos.js` | Conexión con Firebase y modo demostración |
| `js/firebase-config.js` | **Aquí pegas los datos de tu Firebase** |
| `firestore.rules` | Reglas de seguridad (se pegan en Firebase) |
| `img/` | Emblema e íconos |
| `manifest.json` | Permite instalarla en el celular |
