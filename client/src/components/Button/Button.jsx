import React from "react";
import style from './Button.module.css';
import { Link } from "react-router-dom";

const Button = ({content, width, height, text_size, route, borderRadius})=> { 

    return (
       <Link to={route}>
            <button className={style.button} style={{width, height, borderRadius}}>
                <div className={style.content} style={{fontSize: text_size, width, height}}>
                    {content}
                </div>
            </button>
        </Link>
    )
}

export default Button; 