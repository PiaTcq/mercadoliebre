const express = require("express");
const app = express();
const path = require("path");
const rutasMain = require("./routes/main")

let publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => console.log("Escuchando puerto 3000"));

app.use("/", rutasMain);