require('dotenv').config();
const axios = require("axios")
const {API_KEY} = process.env;
const {Genre} = require("../db") 

const initial_Genres = async ()=> {
    try {
        const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        var arr_prom = data.results.map((e) => {
            const new_Genre = Genre.create(
                {
                    name:e.name,
                }
            )
        });
        await Promise.all(arr_prom)
        console.log("Géneros cargados en la DB")
    } catch (err) {
        throw new Error(err.message)
    }
}

const getGenres = async (req, res) => {
    try {
        const genres_db = await Genre.findAll({})
        res.json(genres_db)
    } catch (err) {
        res.send(err.message)
    }    
}

module.exports = {getGenres, initial_Genres}