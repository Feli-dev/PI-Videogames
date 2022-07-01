import React from "react";
import style from './Nav.module.css';
import Button from "../Button/Button"
import SearchBar from "../SearchBar/SearchBar";

const Nav =()=>{
    const add_icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
    const user_icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>; 
    

    return (
        <div className={style.nav}>
            <Button content={add_icon} route={"/form"} width={"60px"} height={"60px"} text_size={"10px"} borderRadius={"20px"}/>
            <SearchBar/>
            <Button content={user_icon} route={"/home"} width={"60px"} height={"60px"} text_size={"10px"} borderRadius={"20px"}/>
        </div>
    )
}

export default Nav;