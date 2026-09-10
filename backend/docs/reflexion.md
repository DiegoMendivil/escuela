# Reflexión

1. Express recibe las solicitudes HTTP y las dirige a las rutas, mientras que el servicio conserva la lógica de negocio y la validación de los datos.
2. No conviene escribir toda la lógica en task.routes.ts porque se mezclan responsabilidades y dificulta mantener, probar y reutilizar la API.
3. req.params contiene valores de la URL, como el identificador de una tarea. req.body contiene datos enviados en JSON dentro de la solicitud.
4. El título llega como unknown porque un cliente externo podría enviar cualquier tipo de dato; antes de usarlo hay que validarlo para evitar errores.
5. Centralizar los errores en un middleware permite responder de manera uniforme y evitar repetir lógica en cada controlador.
6. Se usa 201 cuando se crea un recurso nuevo, como en POST /api/tasks.
7. DELETE responde 204 porque la eliminación fue correcta y no necesita devolver un cuerpo JSON.
8. Cuando el servidor se reinicia, los cambios desaparecen porque la información se guarda en memoria en un arreglo temporal.
9. Cuando se integre MongoDB Atlas, pueden conservarse las rutas, controladores, servicios, modelos y middleware, mientras se reemplaza la fuente de datos.
