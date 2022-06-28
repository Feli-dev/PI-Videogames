import React from "react";
import style from './Button.module.css';
import { Link } from "react-router-dom";

const Button = ({texto})=> { 

    return (
       <Link to={"/"}>
            <button className={style.button}>
                <div className={style.content}>
                    {texto}
                </div>
            </button>
        </Link>
    )
}

export default Button; 