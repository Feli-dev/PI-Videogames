const express = require('express');
const db = require('../db');
const {Videogame, Gender} = require('../db');
const {getVideogames, getIdVideogames, postVideogames} = require("../controllers/videogame.controller")

const routes = express();

routes.get("/", getVideogames)
routes.get("/:idVideogame", getIdVideogames)
routes.post("/", postVideogames)


module.exports = routes;