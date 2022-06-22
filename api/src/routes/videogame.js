const express = require('express');
const db = require('../../db');
const {Videogame, Gender} = require('../../db');
const routes = express();

routes.get("/", (req, res) => {
    res.send("Hola")
})

module.exports = routes;