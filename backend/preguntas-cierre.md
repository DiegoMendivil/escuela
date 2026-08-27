# Preguntas de cierre

## ¿Cuál es la función de Node.js dentro de esta aplicación?

Node.js ejecuta JavaScript en el servidor. Permite iniciar Express, recibir solicitudes HTTP, ejecutar la lógica de tareas y responder al frontend.

## ¿Qué ventajas ofrece TypeScript frente a JavaScript?

TypeScript agrega tipos, interfaces y comprobación estática. Detecta errores antes de ejecutar, documenta los datos y facilita mantener el código.

## ¿Para qué sirven las importaciones y exportaciones?

Permiten dividir el programa en módulos. `export` comparte funciones o tipos y `import` los utiliza desde otro archivo sin duplicar código.

## ¿Qué responsabilidad tiene cada módulo del proyecto?

- `config/env.ts`: carga y valida la configuración.
- `models/task.ts`: define la tarea y sus estados permitidos.
- `utils/delay.ts`: ofrece un retardo asíncrono reutilizable.
- `services/task.service.ts`: crea, consulta y completa tareas.
- `index.ts`: configura Express, registra rutas y transforma errores en respuestas HTTP.

## ¿Cuál es la diferencia entre una operación síncrona y una asíncrona?

Una operación síncrona bloquea la ejecución hasta terminar. Una asíncrona permite continuar mientras espera una respuesta, como una consulta o temporizador.

## ¿Para qué se utilizan async y await?

`async` indica que una función devuelve una promesa. `await` espera su resultado de forma legible sin bloquear todo el proceso de Node.js.

## ¿Por qué las variables sensibles no deben escribirse directamente en el código?

Pueden quedar expuestas en Git, copias o registros. Se guardan en variables de entorno; `.env.example` solo muestra nombres y valores de referencia.

## ¿Qué errores controla la aplicación y cómo responde ante ellos?

Controla títulos vacíos y estados inválidos con HTTP `400`, identificadores inválidos con `400`, tareas inexistentes con `404` y errores inesperados con `500`. Todas las respuestas incluyen un campo `error` descriptivo.