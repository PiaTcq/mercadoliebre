const express = require("express");
const router = express.Router();
const path = require("path");

// let publicPath = path.resolve(__dirname, "./public");
// router.use(express.static(publicPath));

const devolverVistas = (res, ruta) => {
    res.sendFile(path.resolve(__dirname, ruta));
}


router.get("/", (req, res) => { devolverVistas(res, "../views/home.html")});
router.get("/register", (req, res) => devolverVistas(res, "../views/register.html"));
router.get("/login", (req, res) => devolverVistas(res, "../views/login.html"));

router.get("/ofertas", (req, res) => {
    res.send("Acá se verá la página de ofertas")
});
router.get("/tiendas-oficiales", (req, res) => {
    res.send("Acá se verá la página de tiendas oficiales")
});
router.get("/vender", (req, res) => {
    res.send("Acá se verá la página vender")
});
router.get("/ayuda", (req, res) => {
    res.send("Acá se verá la página de ayuda")
});




module.exports = router;
