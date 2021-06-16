'use strict';

const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const express = require("express");
const app = express();
const api = require("./routes/index");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine(".hbs", hbs({
    defaultLayout: "default",
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

app.use("/api", api);
app.get("/login", (req, res) => {
    res.render("login");
})
app.get("/", (req, res) => {
    res.render("product");
})

module.exports = app;