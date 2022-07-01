import React from "react";
import style from './CardVideogame.module.css';
import { Link } from "react-router-dom";

const CardVideogame = ({name, genres, image, route}) => {
    return (
        // cambiar to={`/${route}`}
        <Link to={"/home"}> 
            <div className={style.card}>
                <img className={style.imgcard} src={image} alt="Not found" />
                <div className={style.textblock}>
                    <h3 className={style.titulo}>{name}</h3>
                    <h3 className={style.generos}>{genres.map((g, i) => {
                        if(genres.length -1 === i){
                            return g.name
                        }else {
                            return g.name + " - "
                        }
                    })}</h3>
                </div>
            </div>
        </Link>
    )
}

export default CardVideogame;