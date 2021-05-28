const express = require("express");
const app = express();
const path = require("path");

let publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3000, () => console.log("Escuchando puerto 3000"));

const devolverVistas = (res, ruta) => {
    res.sendFile(path.resolve(__dirname, ruta));
}
app.get("/", (req, res) => {
    res.send("¡Hola, Mundo!");
});
app.get("/home", (req, res) => devolverVistas(res, "views/index.html"));
app.get("/ofertas", (req, res) => {
    res.send("Página de ofertas")
});