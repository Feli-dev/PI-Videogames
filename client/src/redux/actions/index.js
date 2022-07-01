import axios from "axios";
import { type } from "./types";

export function getVideogames(){
    return async (dispatch) => {
        var {data} = await axios.get("http://localhost:5001/videogames", {mode:"no-cors"}) 
        return dispatch({
            type: type.GET_VIDEOGAMES,
            payload: data,
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
        const response = axios.post('http://localhost:5001/videogames', payload);
        return {type: type.POST_GAME};
    }
}