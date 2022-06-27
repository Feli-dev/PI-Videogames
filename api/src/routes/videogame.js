const express = require('express');
const db = require('../db');
const {Videogame, Gender} = require('../db');
const {getVideogames, getIdVideogame, postVideogames} = require("../controllers/videogame.controller")

const routes = express();

routes.get("/", getVideogames)
routes.get("/:idVideogame", getIdVideogame)
routes.post("/", postVideogames)


module.exports = routes;