const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
    response.json({ status: "ok", service: "backend" });
});

app.get("/api/course", (_request, response) => {
    response.json({
        name: "Backend",
        environment: "Visual Studio Code",
        packageManager: "pnpm",
        status: "Configurado",
    });
});

app.listen(port, () => {
    console.log(`Backend ejecutándose en http://localhost:${port}`);
});