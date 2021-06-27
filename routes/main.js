const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")


router.get("/", mainController.home);
router.get("/register", mainController.register);
router.get("/login", mainController.login);
router.get("/misCompras", mainController.misCompras)
router.get("/ofertas", mainController.ofertas);
router.get("/tiendas-oficiales", mainController.tiendasOficiales);
router.get("/vender", mainController.vender);
router.get("/ayuda", mainController.ayuda);



module.exports = router;
