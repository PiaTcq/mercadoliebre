const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/main")

app.listen(process.env.PORT || 3000, () => console.log("Escuchando puerto 3000"));

app.set("view engine","ejs");

let publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use("/", mainRoutes);