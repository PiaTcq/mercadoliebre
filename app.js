const express = require("express");
const app = express();
const path = require("path");

let publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => console.log("Escuchando puerto 3000"));

const devolverVistas = (res, ruta) => {
    res.sendFile(path.resolve(__dirname, ruta));
}
app.get("/", (req, res) => {
    res.send("¡Hola, Mundo!");
});
app.get("/home", (req, res) => devolverVistas(res, "views/home.html"));
app.get("/ofertas", (req, res) => {
    res.send("Acá se verá la página de ofertas")
});
app.get("/tiendas-oficiales", (req, res) => {
    res.send("Acá se verá la página de tiendas oficiales")
});
app.get("/vender", (req, res) => {
    res.send("Acá se verá la página vender")
});
app.get("/ayuda", (req, res) => {
    res.send("Acá se verá la página de ayuda")
});
app.get("/register", (req, res) => devolverVistas(res, "views/register.html"));
app.get("/login", (req, res) => devolverVistas(res, "views/login.html"));