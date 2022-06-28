import React from "react";
import Button from "../../components/Button/Button";
import SteamDeck from "../../img/steamdeck.png"
import style from './Launch.module.css';

const Home =()=>{ 
    return(
        <div className={style.content}>
            <img style={style.img} src={SteamDeck} alt="Steam Deck" />
            <Button texto={"Play"}/>
        </div>
    ); 
}

export default Home; 