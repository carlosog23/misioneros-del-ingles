# Generar el Cuadernillo del alumno

El PDF se arma con el contenido de la plataforma (`js/contenido.js`), así que lo que se corrija en la plataforma
también aparece en el cuadernillo al volver a generarlo.

```
node herramientas/cuadernillo/exportar.mjs /tmp/cuad.json
python3 herramientas/cuadernillo/generar.py /tmp/cuad.json
```

Esto reescribe `cuadernillo/cuadernillo-alumno.pdf` y `js/paginas-cuadernillo.js` (las páginas a las que remite
la plataforma). Se necesitan Python con ReportLab y Pillow, y las fuentes Poppins, Carlito y Noto Color Emoji.
