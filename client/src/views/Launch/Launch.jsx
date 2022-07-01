import React from "react";
import Button from "../../components/Button/Button";
import SteamDeck from "../../img/steamdeck.png"
import style from './Launch.module.css';

const Launch =()=>{ 
    return(
        <div className={style.content}>
            <img className={style.steamdeck} src={SteamDeck} alt="Steam Deck" />
            <Button content={"Play"} height={"72px"} width={"240px"} text_size={"24px"} route={"/home"} borderRadius={"10px"} />
        </div>
    ); 
}

export default Launch; 