import "./style.css";

const status = document.querySelector("#status");

fetch("http://localhost:3000/api/health")
  .then((response) => {
    if (!response.ok) throw new Error("Backend no disponible");
    return response.json();
  })
  .then((data) => {
    status.textContent = `Backend conectado: ${data.status}`;
  })
  .catch(() => {
    status.textContent = "Backend no disponible. Inícialo en el puerto 3000.";
  });