require('dotenv').config();
const axios = require("axios")
const {Videogame, Genre} = require("../db")
const {API_KEY} = process.env;
const {Op} = require("sequelize")

const getVideogames = async (req, res) => {
    //background_image, name y genres
    try {
        const {name} = req.query
        if(name) {
            var data_db = await Videogame.findAll({
                limit: 15,
                attributes: ['id','name', "image", "rating", "createdInDb"],
                include: Genre,
                where: {
                    name: {
                        [Op.like] : "%"+name+"%"
                    }
                }
            })
            var json1 = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=40`) //se puede? page_size
            var data = [].concat(json1.data.results)
            var data_filt = []
            data.forEach(e => {
                data_filt.push({
                    id:e.id,
                    background_image: e.background_image,
                    name: e.name,
                    genres: e.genres,
                    rating: e.rating,
                })
            });
            var all_data = [].concat(data_filt, data_db)
            if(data.length<1 && data_db<1) throw new Error("No hay resultados para la busqueda.")
            else res.json(all_data)
        } else {
            var data_db = await Videogame.findAll({
                attributes: ['id','name', "image", "rating", "createdInDb"],
                include: Genre,
            })
            var json1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`);
            // var json2 = await axios.get(json1.data.next);
            // var json3 = await axios.get(json2.data.next);
            // var json4 = await axios.get(json3.data.next);
            // var json5 = await axios.get(json4.data.next);
            // var data = [].concat(json1.data.results, json2.data.results, json3.data.results, json4.data.results, json5.data.results)
            var data = [].concat(json1.data.results)
            var data_filt = []
            data.forEach(e => {
                data_filt.push({
                    id:e.id,
                    background_image: e.background_image,
                    name: e.name,
                    genres: e.genres,
                    rating: e.rating,
                })
            });
            var all_data = [].concat(data_filt, data_db)
            res.json(all_data)
        }
    } catch(err) {
        res.status(404).send(err.message)
    }
}
const getIdVideogame = async (req, res) => {
    //background_image, name y genres
    //15 por página
    const {idVideogame} = req.params
    try {
        if(idVideogame && idVideogame.length>7) {
            var find_db = await Videogame.findByPk(idVideogame)
            if(find_db.length>1) res.json(find_db)
            else {throw new Error(`Not exist videogame with id ${idVideogame}`)}
        }else if (idVideogame){
            var {data} = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?&key=${API_KEY}`)
            if(data.hasOwnProperty("id")) res.json(data)
            else {throw new Error(`Not exist videogame with id ${idVideogame}`)} 
        } else {
            throw new Error(`Not received id`)
        }
    } catch (err) {
        res.status(404).json(err.message)
    }
}
const postVideogames = async (req, res) => {
    //background_image, name y genres
    //15 por página
    const {name, description, launch_Date, rating, platforms, image, idsGenres} = req.body
    if(!(name&&description&&platforms)) throw new Error("Mandatory parameters not received")
    try {
        const new_Videogame = await Videogame.create(
            {
                name, 
                description, 
                launch_Date, 
                rating, 
                platforms,
                image,
            }
        )
        if(idsGenres && idsGenres.length>=1){
            idsGenres.map(async (elem) => {
                var genre = await Genre.findByPk(elem)
                await new_Videogame.setGenres(genre)
            })
        }
        res.send("Videogame successfully added")
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = {getVideogames, getIdVideogame, postVideogames}