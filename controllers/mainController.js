const maineController = {
    home : (req, res) => {res.render("home")},
    ofertas : (req, res) => {res.send("Acá se verá la página de ofertas")},
    tiendasOficiales : (req, res) => {res.send("Acá se verá la página de tiendas oficiales")},
    misCompras : (req, res) => {res.send("Acá se verá la página de compras")},
    vender : (req, res) => {res.send("Acá se verá la página vender")},
    ayuda : (req, res) => {res.send("Acá se verá la página de ayuda")},
    login : (req, res) => {res.render("login")},
    register : (req, res) => {res.render("register")}
};

module.exports = maineController;