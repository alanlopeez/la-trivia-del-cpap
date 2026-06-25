# ⚽ La Trivia del CPAP - TOTALSLEEP 💤

> **Sitio Web Publicado**: [la-trivia-del-cpap-totalsleep.vercel.app](https://la-trivia-del-cpap-totalsleep.vercel.app)  
> **Repositorio de GitHub**: [github.com/alanlopeez/la-trivia-del-cpap](https://github.com/alanlopeez/la-trivia-del-cpap)

Una aplicación web interactiva, moderna y lúdica diseñada para educar a los usuarios sobre el uso correcto del equipo de CPAP y la higiene del sueño. La app está estructurada con una estética **clínica limpia y minimalista** combinada con divertidas **mecánicas mundialistas de tanda de penales**.

---

## 🌟 Características Clave

1. **Juego de Penales del Sueño**:
   - Cada usuario responde **3 preguntas aleatorias** seleccionadas de un banco clínico de 20 preguntas.
   - Cuenta con **3 vidas (corazones)**.
   - Cada acierto es un **¡GOOOL! ⚽** con animaciones de fútbol.
   - Cada fallo es un penal atajado. Se resta una vida, se brinda una **pista médica interactiva** y el usuario puede reintentar el penal.
   - Cronómetro de **45 segundos** por pregunta.
2. **Pausa de Hidratación**:
   - Una pantalla interactiva de descanso para tomar agua entre la segunda y tercera pregunta, promoviendo hábitos saludables.
3. **Premios Aleatorios**:
   - Al ganar, el sistema sortea aleatoriamente un premio de una lista predefinida:
     - *Bidón de agua bi-desmineralizada.*
     - *Pack de 8 filtros a elección.*
     - *Cupón de 10% adicional en máscara.*
     - *Envío gratis a domicilio.*
     - *Tubuladura de regalo.*
4. **Validación Horaria para WhatsApp**:
   - Un script inteligente verifica la hora del usuario. Si está dentro del horario comercial de la empresa (**Lunes a Viernes de 10:00 a 20:00 hs**), muestra un canal interactivo `🟢 WhatsApp Activo (Canje Inmediato)`. Fuera de ese horario, indica que está cerrado de forma clara `🟡 WhatsApp Cerrado`.
   - Botón directo para reclamar el premio por chat con el mensaje pre-cargado correspondiente.

---

## 📁 Estructura del Proyecto

```
La trivia del CPAP/
├── index.html            # Estructura de pantallas y SEO optimizado.
├── style.css             # Estilos de diseño, clínica, fútbol y animaciones.
├── app.js                # Lógica del juego, banco de preguntas y horario comercial.
├── README.md             # Esta documentación.
└── assets/
    └── logo.png          # Logo de TOTALSLEEP.
```

---

## 💻 Ejecución Local

Dado que es una Single Page Application (SPA) de alto rendimiento construida con HTML, CSS y Javascript nativo, **no requiere procesos de compilación complejos**.

### Opción 1: Abrir directamente (Rápido)
Simplemente haz doble clic en el archivo `index.html` en tu navegador favorito.

### Opción 2: Servidor local (Recomendado para testing completo)
Si tienes Node.js instalado, puedes levantar un servidor local en segundos ejecutando esto en tu terminal dentro de la carpeta del proyecto:
```bash
npx serve .
```
Luego abre `http://localhost:3000` en tu navegador.

---

## 🚀 Subir a GitHub y Publicar en Vercel

Sigue estos pasos sencillos para subir tu proyecto y tenerlo online gratis:

### Paso 1: Inicializar el repositorio Git local
Si tienes Git instalado en tu máquina, abre la terminal en la carpeta del proyecto y ejecuta:
```bash
# 1. Inicializar git
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer commit
git commit -m "feat: inicializar trivia cpap totalsleep"
```

### Paso 2: Crear el repositorio en GitHub
1. Entra a tu cuenta en [GitHub](https://github.com).
2. Haz clic en **New** (Nuevo repositorio).
3. Nómbralo (por ejemplo, `la-trivia-del-cpap`). Déjalo en público o privado y haz clic en **Create repository**.
4. Copia las líneas que te brinda GitHub bajo el título *“…or push an existing repository from the command line”*. Serán similares a estas:
```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/la-trivia-del-cpap.git
git push -u origin main
```
*(Reemplaza `TU_USUARIO` con tu nombre de usuario real de GitHub).*

### Paso 3: Publicar en Vercel (Gratis y Automático)
1. Regístrate o inicia sesión en [Vercel](https://vercel.com) (puedes ingresar directamente con tu cuenta de GitHub).
2. Haz clic en el botón **Add New...** y luego en **Project** (Proyecto).
3. En la lista de repositorios, busca `la-trivia-del-cpap` y haz clic en **Import** (Importar).
4. Deja la configuración predeterminada tal como está (Vercel detecta automáticamente que es un sitio estático HTML/CSS/JS).
5. Haz clic en **Deploy** (Desplegar).
6. ¡Listo! En menos de 20 segundos tendrás tu aplicación web publicada con un enlace público HTTPS para compartir. Cada vez que actualices tu código en GitHub, Vercel actualizará tu sitio web automáticamente.

---

## 🖼️ Personalizaciones Futuras

- **Reemplazar el Logo**: Ya hemos guardado el logo en `assets/logo.png`. Si deseas cambiarlo por una versión de mayor calidad, solo reemplaza ese archivo manteniendo el mismo nombre.
- **Agregar Fotos de los Premios**: Actualmente la trivia utiliza hermosos iconos vectoriales con efecto 3D (`SVG` autogenerados por CSS). Si en el futuro deseas reemplazar el SVG por una foto real del premio, puedes:
  1. Guardar las imágenes en una nueva carpeta, por ejemplo `assets/premios/`.
  2. Modificar el objeto `PRIZE_POOL` dentro de `app.js` reemplazando la propiedad `icon` por una etiqueta de imagen HTML, por ejemplo:
     `icon: '<img src="assets/premios/bidon.png" alt="Bidón de Agua" class="prize-img">'`
  3. Ajustar los estilos necesarios en `style.css` bajo la clase `.prize-img`.
