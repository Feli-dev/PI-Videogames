import axios from "axios";
import { type } from "./types";

export function getVideogames(name){
    return async (dispatch) => {
        var json;
        if(name){
            json = await axios.get(`http://localhost:5001/videogames?name=${name}`) 
        } else {
            json = await axios.get("http://localhost:5001/videogames") 
        }
        return dispatch({
            type: type.GET_VIDEOGAMES,
            payload: json.data,
        })
    }
}

export function getGenres() {
    return async (dispatch) => {
        let {data} = await axios.get('http://localhost:5001/genres', {mode:"no-cors"});
        return dispatch({
            type: type.GET_GENRES,
            payload: data,
        })
    }
}

export function getPlatforms() {
    return async (dispatch) => {
        let json1 = await axios.get("https://api.rawg.io/api/platforms?key=2d0511c1e1234fbf8dd0526c69329930");
        let json2 = await axios.get("https://api.rawg.io/api/platforms?key=2d0511c1e1234fbf8dd0526c69329930&page=2");
        let data = [].concat(json1.data.results, json2.data.results)
        let data_filt = data.map(el => el.name)
        return dispatch({
            type: type.GET_PLATFORMS,
            payload: data_filt,
        })
    }
}

export function filterGamesByGenres(payload) {
    return {
        type: type.FILTER_BY_GENRES,
        payload,
    }
}

export function filterGamesByOrigin(payload) {
    return {
        type: type.FILTER_BY_ORIGIN,
        payload,
    }
}

export function sortByName(payload) {
    return {
        type: type.SORT_BY_NAME,
        payload,
    }
}

export function sortByRating(payload) {
    return {
        type: type.SORT_BY_RATING,
        payload,
    }
}

export function postGame(payload) {
    return async (dispatch) => {
        axios.post('http://localhost:5001/videogames', payload);
        return {type: type.POST_GAME};
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var {data} = await axios.get('http://localhost:5001/videogames/' + id);
            return dispatch({
                type: type.GET_DETAIL,
                payload: data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function cleanDetail() {
    return async function (dispatch) {
        try {
            return dispatch({
                type: type.GET_DETAIL,
                payload: "",
            })
        } catch (err) {
            console.log(err)
        }
    }
}