require('dotenv').config();
const axios = require("axios")
const {Videogame} = require("../db")
const {API_KEY} = process.env;
const {Op} = require("sequelize")

const getVideogames = async (req, res) => {
    //background_image, name y genres
    //15 por página
    try {
        const {name} = req.query
        if(name) { //Agregar que solo traiga 15 resultados
            var data_db = await Videogame.findAll({
                where: {
                    name: {
                        [Op.like] : "%"+name+"%"
                    }
                }
            }) //Agregar filtro a que cosas traigo de la DB
            var {data} = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
        } else {
            var data_db = await Videogame.findAll({})
            var {data} = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        }
        var data_filt = []
        data.results.forEach(e => {
            data_filt.push({
                background_image: e.background_image,
                name: e.name,
                genres: e.genres,
            })
        });
        var all_data = {
            api_data:data_filt,
            db_data:data_db,
        }
        res.json(all_data)
    } catch(err) {
        res.send(err)
    }
}
const getIdVideogames = (req, res) => {
    //imagen, nombre y género
    //15 por página
    
}
const postVideogames = (req, res) => {
    //imagen, nombre y género
    //15 por página
    
}

module.exports = {getVideogames, getIdVideogames, postVideogames}