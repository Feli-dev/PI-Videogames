import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getVideogames } from "../../redux/actions";
// Components 
import Nav from "../../components/Nav/Nav"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
// import Console_Carrousel from "../../components/ConsoleCarrousel/Console_Carrousel";


const Home =()=>{
    return (
        <div>
            <Nav/>
            {/* Agregar - SearchBar - User */}
            {/* Carrusel */}
            <CardsContainer/>
        </div>
    )
}

export default Home;