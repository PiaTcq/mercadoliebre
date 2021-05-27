const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public")

app.listen(3000, function() {
    console.log("Esto fue exitoso")
});
app.use(express.static(publicPath));

app.get("/", function(req, res){
    res.send("¡Hola, Mundo!")
});
app.get("/archivo", (req, res) => {
    let ruta = path.join(__dirname, "/public/imgs/logo-mercado-liebre.svg");
    res.sendFile(ruta)
});
/* con path puedo no armar una variable y enviar directamente el join 
app.get("/archivo", (req, res) => {
    res.sendFile(path.join(__dirname, "3.pdf");
});*/ 
