// Exporta el contenido de la plataforma (con la pronunciación figurada) para generar el cuadernillo.
// Uso: node herramientas/cuadernillo/exportar.mjs salida.json
import { writeFileSync } from 'node:fs';
const raiz = new URL('../../js/', import.meta.url);
const C = await import(new URL('contenido.js', raiz));
const P = await import(new URL('pronunciacion.js', raiz));
const U = JSON.parse(JSON.stringify(C.UNIDADES));
for (const u of U) for (const b of u.material) {
  if (b.tipo === 'vocab') b.items.forEach(i => { i.pron = P.pronunciacion(i.en) || ''; });
  if (b.tipo === 'dialogo') b.lineas.forEach(l => { l.pron = P.pronunciacionFrase(l.en) || ''; });
}
writeFileSync(process.argv[2], JSON.stringify({ unidades: U, trimestres: C.TRIMESTRES, ilustraciones: C.ILUSTRACIONES }));
console.log('Unidades exportadas:', U.length);
