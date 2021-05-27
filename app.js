const express = require("express");
const app = express();
const path = require("path");

let publicPath = path.resolve(__dirname, "./public/imgs/logo-mercado-liebre.svg");

app.listen(3000, () => console.log("Escuchando puerto 3000"));

app.get("/", function(req, res) {
    res.send("¡Hola, Mundo!");
});
app.get("/archivo", (req, res) => {
    res.sendFile(publicPath)
})
