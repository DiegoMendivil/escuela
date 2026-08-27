# Backend

API de tareas construida con Node.js, Express, TypeScript y pnpm.

## Estructura

```text
backend/
├── src/
│   ├── config/env.ts            # Variables de entorno
│   ├── models/task.ts           # Tipo e interfaz de tarea
│   ├── services/task.service.ts # Operaciones asíncronas
│   ├── utils/delay.ts           # Retardo asíncrono
│   └── index.ts                 # Servidor, rutas y errores
├── .env.example       # Variables de entorno de referencia
├── .gitignore
├── extensions.json     # Extensiones recomendadas para VS Code
├── package.json        # Dependencias y scripts del backend
├── pnpm-lock.yaml
├── preguntas-cierre.md
├── tsconfig.json
└── README.md
```

## Comandos

```bash
pnpm install
pnpm check     # Comprueba TypeScript
pnpm dev       # Desarrollo con reinicio automático
pnpm start     # Ejecución compilada
```

El servidor inicia en `http://localhost:3000`. Rutas disponibles: `GET /api/health`, `GET /api/tasks`, `GET /api/tasks/:id`, `POST /api/tasks` y `PATCH /api/tasks/:id/complete`.