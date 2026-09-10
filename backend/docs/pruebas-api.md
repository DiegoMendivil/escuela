# Pruebas de Task API

| Método | Ruta | Datos enviados | Esperado | Obtenido | Resultado |
|---|---|---|---:|---:|---|
| GET | /health | No aplica | 200 | 200 | Aprobada |
| POST | /api/tasks | title válido | 201 | 201 | Aprobada |
| POST | /api/tasks | title vacío | 400 | 400 | Aprobada |
| GET | /api/tasks/abc | No aplica | 400 | 400 | Aprobada |
| GET | /ruta-inexistente | No aplica | 404 | 404 | Aprobada |
| PATCH | /api/tasks/1 | { "title": "Nuevo título" } | 200 | 200 | Aprobada |
