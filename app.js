const express = require("express");
const app = express();
const path = require("path");

let publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3000, () => console.log("Escuchando puerto 3000"));

app.get("/", (req, res) => {
    res.send("¡Hola, Mundo!");
});
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
});
app.get("/ofertas", (req, res) => {
    res.send("página de ofertas")
});