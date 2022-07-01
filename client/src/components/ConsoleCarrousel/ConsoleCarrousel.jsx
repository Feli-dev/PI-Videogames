import React from "react";
// import style from './Console_Carrousel.module.css';
// import { Link } from "react-router-dom";
import SteamDeck from "../../img/steamdeck_w_game.png"

const Console_Carrousel = () => {
    return (
        <div>
            <img src={SteamDeck} alt="Steam Deck"/>
            {/* previo <(flecha) consola con current (flecha)> posterior */}
        </div>
    )
}


export default Console_Carrousel;