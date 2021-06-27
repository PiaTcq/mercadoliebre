const path = require("path");
const devolverVistas = (res, ruta) => {res.sendFile(path.resolve(__dirname, ruta))};

const maineController = {
    home : (req, res) => {devolverVistas(res, "../views/home.html")},
    ofertas : (req, res) => {res.send("Acá se verá la página de ofertas")},
    tiendasOficiales : (req, res) => {res.send("Acá se verá la página de tiendas oficiales")},
    misCompras : (req, res) => {res.send("Acá se verá la página de compras")},
    vender : (req, res) => {res.send("Acá se verá la página vender")},
    ayuda : (req, res) => {res.send("Acá se verá la página de ayuda")},
    login : (req, res) => devolverVistas(res, "../views/login.html"),
    register : (req, res) => devolverVistas(res, "../views/register.html"),
};

module.exports = maineController;