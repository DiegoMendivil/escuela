# Backend

API REST de tareas construida con Express, TypeScript y pnpm.

## Estructura

```text
backend/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── controllers/
│   │   └── task.controller.ts
│   ├── data/
│   │   └── tasks.ts
│   ├── errors/
│   │   └── app-error.ts
│   ├── middlewares/
│   │   ├── error.middleware.ts
│   │   └── not-found.middleware.ts
│   ├── models/
│   │   └── task.ts
│   ├── routes/
│   │   └── task.routes.ts
│   ├── services/
│   │   └── task.service.ts
│   └── utils/
│       └── delay.ts
├── docs/
│   ├── pruebas-api.md
│   └── reflexion.md
├── .env
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

## Comandos

```bash
pnpm install
pnpm check     # Verifica el código TypeScript
pnpm dev       # Ejecuta el servidor en modo desarrollo
pnpm build     # Compila la versión de producción
pnpm start     # Ejecuta la versión compilada
```

El servidor inicia en http://localhost:3000 y expone GET /health y los endpoints REST de tareas.