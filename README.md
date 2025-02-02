# Un Mensaje Desde la Luna

Este proyecto está inspirado en un regalo que desarrollé en el pasado. Ahora, lo he ambientado para el Día de San Valentín, permitiendo una personalización sencilla mediante un archivo de configuración.

## Configuración del Proyecto

Para modificar el contenido del proyecto, debes editar el archivo `.env` que se encuentra dentro de la carpeta `dist`. Este archivo contiene las siguientes configuraciones:

```env
VITE_PREGUNTA="¿Quieres ser mi San Valentín?"
VITE_IMAGEN_PREGUNTA=https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGtnNzJuZ3ZydjQ4emNxNHN6YmJkZ2d6Y2tlNmNhZDA0aGx6dTd1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7vDoUoDZHoUQxMPkd7/giphy.gif
VITE_BOTON_ACEPTAR="¡Sí, quiero!"
VITE_BOTON_RECHAZAR="No, gracias"
VITE_NOMBRE_PARA="Nombre del destinatario"
VITE_NOMBRE_DE="Augusto Chanamé"
VITE_TEXTO_CARTA="Aquí puedes escribir el mensaje de la carta."
```

Puedes modificar estos valores según tu preferencia:
- **VITE_PREGUNTA**: La pregunta que aparecerá en la invitación.
- **VITE_IMAGEN_PREGUNTA**: URL de la imagen o GIF que se mostrará con la pregunta.
- **VITE_BOTON_ACEPTAR**: Texto del botón de aceptación.
- **VITE_BOTON_RECHAZAR**: Texto del botón de rechazo.
- **VITE_NOMBRE_PARA**: Nombre de la persona a la que va dirigida la carta.
- **VITE_NOMBRE_DE**: Tu nombre o el nombre del remitente.
- **VITE_TEXTO_CARTA**: Mensaje personalizado de la carta.

## Personalización de Estampillas

Si deseas modificar las estampillas de la carta, puedes reemplazar los archivos en la carpeta `dist`. Asegúrate de que las imágenes sean del formato adecuado para que se visualicen correctamente.

## Despliegue Rápido en Netlify

Una vez hayas realizado todas las modificaciones deseadas, puedes desplegar tu proyecto fácilmente sin necesidad de registrarte en ninguna plataforma.

1. **Accede a** [Netlify Drop](https://app.netlify.com/drop).
2. **Arrastra y suelta** la carpeta `dist` en la página.
3. **Espera a que se carguen los archivos**. Al finalizar, Netlify generará un enlace de tu página y una contraseña para acceder a ella.
4. **Comparte el enlace** con la persona especial para que vea tu mensaje.

## Notas Adicionales
- Asegúrate de que la carpeta `dist` contiene todos los archivos necesarios antes de subirlos.
- Puedes probar tu página localmente antes de subirla para verificar que todo funcione correctamente.
- Si quieres un dominio personalizado, puedes configurarlo en Netlify después de desplegar el proyecto.

¡Esperamos que disfrutes creando este detalle especial para San Valentín! 💖

