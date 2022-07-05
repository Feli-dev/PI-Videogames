import React from "react";
// Components 
import Nav from "../../components/Nav/Nav"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
// import Console_Carrousel from "../../components/ConsoleCarrousel/Console_Carrousel";


const Home =()=>{
    return (
        <div>
            <Nav/>
            {/* Carrusel */}
            <CardsContainer/>
        </div>
    )
}

export default Home;