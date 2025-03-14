# Medidor de Combustible Interactivo

Este proyecto implementa un medidor de combustible visual e interactivo utilizando HTML, CSS y JavaScript puro. El medidor muestra el nivel de combustible en fracciones y cambia de color según el nivel actual.

## Características

- 🎚️ Control deslizante interactivo para ajustar el nivel de combustible
- 📊 Visualización del nivel en fracciones simplificadas
- 🎨 Cambios de color según el nivel:
  - Rojo (< 25%)
  - Naranja (25-50%)
  - Amarillo (50-75%)
  - Verde (> 75%)
- 📏 32 segmentos de medición para mayor precisión
- 💫 Animaciones suaves en los cambios de nivel

## Estructura del Proyecto

```
├── index.html      # Estructura principal del medidor
├── styles.css      # Estilos y diseño visual
└── script.js       # Lógica del medidor y manipulación del DOM
```

## Uso

1. Abre el archivo `index.html` en tu navegador web
2. Utiliza el control deslizante para ajustar el nivel de combustible
3. Observa cómo:
   - La barra de progreso se actualiza en tiempo real
   - El color cambia según el nivel
   - La fracción se simplifica automáticamente
   - El texto muestra "Lleno" cuando está al máximo

## Detalles Técnicos

- El medidor utiliza una escala de 32 segmentos para mayor precisión
- Las fracciones se simplifican utilizando el algoritmo del máximo común divisor (MCD)
- Los colores se actualizan dinámicamente usando clases CSS
- Diseño responsivo que se adapta a diferentes tamaños de pantalla

## Personalización

Puedes personalizar el medidor modificando:

- Los colores en `styles.css` (clases `.bg-*`)
- El número de segmentos en `script.js` (actualmente 32)
- Los umbrales de color en la función `updateFuelMeter()` en `script.js`

## Requisitos

No se requieren dependencias externas. El proyecto utiliza:
- HTML5
- CSS3
- JavaScript (ES6+)

## Licencia

Este proyecto está disponible como código abierto bajo la licencia MIT. 