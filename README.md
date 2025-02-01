
# Amigo Secreto

Un juego sencillo para sortear amigos secretos en grupo. Este proyecto consiste en una aplicación web que permite ingresar nombres de amigos, sortear uno de ellos y mostrar el resultado. Además, incluye funcionalidades básicas para agregar y resetear la lista de nombres.

## Características

- **Agregar nombres:** Permite ingresar nombres de amigos y almacenarlos en una lista.
- **Sortear amigo:** Realiza un sorteo aleatorio entre los nombres ingresados y muestra el resultado.
- **Resetear:** Limpia toda la lista y el resultado del sorteo.

## Instalación

1. Copiar todos los archivos del proyecto en un directorio.
2. Asegurarse de que se incluyan los siguientes archivos y carpetas:
   - `index.html`
   - `style.css`
   - `app.js`
   - Carpeta `assets/` con las imágenes necesarias.
3. No se requieren dependencias externas aparte de las fuentes de Google Fonts.

## Uso

1. **Agregar nombres:**
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón "Añadir" para agregarlo a la lista.
   - La lista se actualizará automáticamente con el nuevo nombre.

2. **Sortear amigo:**
   - Haz clic en el botón "Sortear amigo".
   - Se mostrará el nombre del amigo sorteado en la parte inferior de la pantalla.

3. **Resetear:**
   - El botón "Resetear" aparecerá automáticamente cuando se haya agregado al menos un nombre.
   - Haz clic en él para limpiar toda la lista y el resultado del sorteo.

## Estructura del proyecto

- **`index.html`:** Archivo principal que contiene la estructura HTML de la página.
- **`style.css`:** Archivo de estilos que define la apariencia de la página.
- **`app.js`:** Archivo de JavaScript que contiene la lógica del juego.
- **`assets/`:** Carpeta que contiene las imágenes utilizadas en el proyecto.

## Notas

- El proyecto utiliza fuentes de Google Fonts para el diseño.
- Los estilos CSS están definidos mediante variables personalizadas para facilitar la personalización.
- La funcionalidad de sorteo utiliza un algoritmo simple de generación de números aleatorios.

## Posibles mejoras

- Implementar validación adicional para evitar nombres vacíos o duplicados.
- Añadir animaciones al proceso de sorteo para mejor experiencia del usuario.
- Permitir guardar y cargar listas de amigos.
- Implementar un sistema de sonidos para el sorteo.
- Añadir más interactividad con mensajes y feedback visual.
