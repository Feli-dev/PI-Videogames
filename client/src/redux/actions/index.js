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