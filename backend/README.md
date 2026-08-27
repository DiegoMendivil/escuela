# Backend

API de la aplicación Escuela, construida con JavaScript, Node.js, Express y pnpm.

## Estructura

```text
backend/
├── src/
│   └── index.js       # Servidor Express y rutas de la API
├── .env.example       # Variables de entorno de referencia
├── .gitignore
├── extensions.json     # Extensiones recomendadas para VS Code
├── package.json        # Dependencias y scripts del backend
└── README.md
```

## Comandos

```bash
pnpm install
pnpm dev       # Desarrollo con reinicio automático
pnpm start     # Ejecución normal
```

El servidor inicia en `http://localhost:3000`. Rutas disponibles: `GET /api/health` y `GET /api/course`.