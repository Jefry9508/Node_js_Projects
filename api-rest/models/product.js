'use strict'

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name: String,
    picture: String,
    price: Number,
    category: {type: String, enum: ["computers", "phones", "accesories"]},
    description: String
});

module.exports = mongoose.model("Product", productSchema);