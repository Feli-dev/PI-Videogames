import React from "react";
import style from './CardDetail.module.css';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import {getDetail} from "../../redux/actions/index"
import {useParams} from "react-router-dom"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const CardDetail =()=>{
    const dispatch = useDispatch()
    const {id} = useParams()
    const game = useSelector((state) => state.detail)
    useEffect(()=>{
        dispatch(getDetail(id))
    },[dispatch, id])
    // Logos
    // Stores
    const playstationStore = "https://gmedia.playstation.com/is/image/SIEPDC/ps-store-blue-bag-icon-01-22sep20?$native--t$"
    const steamStore = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png"
    const epicgamesStore = "https://logospng.org/download/epic-games/epic-games-512.png"
    const gogStore = "https://cdn.cdkeys.com/media/wysiwyg/cdkeys/activation/gog-logo-png.png"
    const xboxStore = "https://static.wixstatic.com/media/b830a1_ef972f41a5084e5098c0947473497e29~mv2.png/v1/fill/w_321,h_342,al_c,q_85,enc_auto/xbox-png-download-best-xbox-png-clipartm.png"
    const xbox360Store = "https://www.apowersoft.com/wp-content/uploads/2015/06/Icon_xbox360.png"
    const nintendoStore = "https://u.cubeupload.com/CaptainPotassium/2A363A2C21614C389569.jpeg"
    const appleStore = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/App_Store_%28macOS%29.svg/1200px-App_Store_%28macOS%29.svg.png"
    const playStore = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/1200px-Google_Play_Arrow_logo.svg.png"
    const itchioStore = "https://static.wikia.nocookie.net/english-otome-games/images/b/bd/Itchio.png/revision/latest/scale-to-width-down/2400?cb=20200629213038"
    //Platforms
    const playstation = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"/></svg>
    const xbox = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"/></svg>
    const pc = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M400 32C426.5 32 448 53.49 448 80V336C448 362.5 426.5 384 400 384H266.7L277.3 416H352C369.7 416 384 430.3 384 448C384 465.7 369.7 480 352 480H96C78.33 480 64 465.7 64 448C64 430.3 78.33 416 96 416H170.7L181.3 384H48C21.49 384 0 362.5 0 336V80C0 53.49 21.49 32 48 32H400zM64 96V320H384V96H64zM592 32C618.5 32 640 53.49 640 80V432C640 458.5 618.5 480 592 480H528C501.5 480 480 458.5 480 432V80C480 53.49 501.5 32 528 32H592zM544 96C535.2 96 528 103.2 528 112C528 120.8 535.2 128 544 128H576C584.8 128 592 120.8 592 112C592 103.2 584.8 96 576 96H544zM544 192H576C584.8 192 592 184.8 592 176C592 167.2 584.8 160 576 160H544C535.2 160 528 167.2 528 176C528 184.8 535.2 192 544 192zM560 400C577.7 400 592 385.7 592 368C592 350.3 577.7 336 560 336C542.3 336 528 350.3 528 368C528 385.7 542.3 400 560 400z"/></svg>
    const nintendo = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="100 100 650 450"><g fill="#FFF"><path d="M296.5 68.6c-48.1 8.6-86.8 44.2-99 91-4.4 16.9-4.7 26.8-4.2 157.9.3 120.4.4 123.2 2.4 132.5 11.1 50.1 46.7 85.8 97.3 97.6 6.6 1.5 15 1.8 69.1 2.1 56 .4 61.8.3 63.3-1.2s1.6-20.8 1.6-239.6c0-162.2-.3-238.6-1-240-1-1.8-2.7-1.9-61.3-1.8-47.6.1-61.9.4-68.2 1.5zm90.5 240v202.6l-40.7-.5c-37.5-.4-41.5-.6-49-2.5-32.2-8.3-56.1-33.1-62.8-65.4-2.2-10.1-2.2-258.9-.1-268.8 6-28.1 25.5-51.4 51.8-61.9 13.2-5.3 19.3-5.9 62.1-6l38.7-.1v202.6z"></path><path d="M305.1 167.1c-6.3 1.2-15.9 6-21 10.5-10.5 9.1-15.7 22-14.9 37.2.4 7.9.9 10 4.1 16.4 4.7 9.7 11.8 16.8 21.5 21.6 6.7 3.3 8.4 3.7 17.1 4 7.9.3 10.7 0 16-1.8 21.7-7.3 34.8-28.4 31.1-50-4.3-25.7-28.7-42.9-53.9-37.9zm170.6-99.4c-.4.3-.7 108.7-.7 240.9 0 218.1.1 240.2 1.6 240.8 2.7 1 80.3.6 89.9-.4 40.6-4.6 76.4-29.3 95.9-66 2.5-4.7 5.8-12.6 7.5-17.5 6.3-18.8 6.1-13.8 6.1-157.5 0-114.7-.2-131.8-1.6-139.1-9.9-52.1-49.6-91.4-101.8-100.4-7-1.2-17.8-1.5-52.6-1.5-24 0-44 .3-44.3.7zm106.8 217.8c15.6 4.1 28.4 16 33.6 31.2 3.3 9.4 3.2 23.2-.1 31.8-6.1 15.8-18.1 26.9-33.5 31-25 6.5-51.6-8.6-58.9-33.4-2.2-7.6-2.1-20.4.4-28.2 7.5-24.5 33.5-38.9 58.5-32.4z"></path></g></svg>
    const mobile = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/></svg>
    const internet = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M483.049 159.706c10.855-24.575 21.424-60.438 21.424-87.871 0-72.722-79.641-98.371-209.673-38.577-107.632-7.181-211.221 73.67-237.098 186.457 30.852-34.862 78.271-82.298 121.977-101.158C125.404 166.85 79.128 228.002 43.992 291.725 23.246 329.651 0 390.94 0 436.747c0 98.575 92.854 86.5 180.251 42.006 31.423 15.43 66.559 15.573 101.695 15.573 97.124 0 184.249-54.294 216.814-146.022H377.927c-52.509 88.593-196.819 52.996-196.819-47.436H509.9c6.407-43.581-1.655-95.715-26.851-141.162zM64.559 346.877c17.711 51.15 53.703 95.871 100.266 123.304-88.741 48.94-173.267 29.096-100.266-123.304zm115.977-108.873c2-55.151 50.276-94.871 103.98-94.871 53.418 0 101.981 39.72 103.981 94.871H180.536zm184.536-187.6c21.425-10.287 48.563-22.003 72.558-22.003 31.422 0 54.274 21.717 54.274 53.722 0 20.003-7.427 49.007-14.569 67.867-26.28-42.292-65.986-81.584-112.263-99.586z"/></svg>
    const others = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zM247.1 280h-32v32c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24v-32L136 279.1C122.8 279.1 111.1 269.2 111.1 256c0-13.2 10.85-24.01 24.05-24.01L167.1 232v-32c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24v32h32c13.2 0 24.02 10.8 24.02 24C271.1 269.2 261.2 280 247.1 280zM431.1 344c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40s39.1 17.88 39.1 40S454.1 344 431.1 344zM495.1 248c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40c22.12 0 39.1 17.88 39.1 40S518.1 248 495.1 248z"/></svg>
    //web and Reddit
    const web = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"/></svg>
    
    return (
        <>
            {game.name ? (
            <div className={style.detail}>
                <div className={style.leftColumn}>
                    <img className={style.img} src={game.background_image ? game.background_image : game.image} alt="Potrait" />
                    <p dangerouslySetInnerHTML={{ __html: game.description }}/>
                </div>
                <div className={style.rigthColumn}>
                    <h1>{game.name}</h1>
                    <div className={style.publisherandrating}>
                        {game.publishers ? <h3>{game.publishers[0].name}</h3> : <></>}
                        {game.released ? <h3>{game.released}</h3> : <h3>{game.launch_Date.split("-")[2] + " - " +  game.launch_Date.split("-")[1] + " - " + game.launch_Date.split("-")[0]}</h3>} 
                        <h3>{`${game.rating}⭐`}</h3>
                        {game.website ? <div className={style.cube}>
                            <div className={style.cubeContent}>
                                <a href={game.website}>{web}</a>
                            </div>
                        </div> : <></>}
                    </div>
                    <hr className={style.lineSolid} />
                    <h2>Genres</h2>
                    <hr className={style.lineSolidSmall} />
                    <div className={style.genres}>
                        {
                            game.genres.map(el => {
                                return (
                                    <h4 key={el.id}>{el.name}</h4>
                                )
                            })
                        }
                    </div>
                    {game.stores ? <hr className={style.lineSolid} /> : <></>}
                    {game.stores ? <h2>Stores</h2> : <></>}
                    <div className={style.stores}>
                        { game.stores ?
                            game.stores.map(el => {
                                var aux = {}
                                if(el.store.name.toLowerCase().includes("playstation")) {aux.content = playstationStore}
                                else if(el.store.name.toLowerCase().includes("360")) {aux.content = xbox360Store}
                                else if(el.store.name.toLowerCase().includes("xbox")) {aux.content = xboxStore}
                                else if(el.store.name.toLowerCase().includes("steam")) {aux.content = steamStore}
                                else if(el.store.name.toLowerCase().includes("epic")) {aux.content = epicgamesStore}
                                else if(el.store.name.toLowerCase().includes("gog")) {aux.content = gogStore}
                                else if(el.store.name.toLowerCase().includes("nintendo")) {aux.content = nintendoStore}
                                else if(el.store.name.toLowerCase().includes("app")) {aux.content = appleStore}
                                else if(el.store.name.toLowerCase().includes("play")) {aux.content = playStore}
                                else if(el.store.name.toLowerCase().includes("itch")) {aux.content = itchioStore}
                                else {aux.content = web}
                                return ( //Stores imgs
                                    <div key={el.store.id} className={style.cube}>
                                        <div className={style.cubeContent}>
                                            <a href={`https://${el.store.domain}`}><img src={aux.content} alt="logo" /></a>
                                        </div>
                                    </div>
                                )
                            })
                        : <></>}
                    </div>
                    <hr className={style.lineSolid} />
                    <h2>Platforms</h2>
                    <div className={style.platforms}>
                        { game.parent_platforms ?
                            game.parent_platforms.map(el => {
                                var aux = {}
                                if(el.platform.name.toLowerCase().includes("playstation")) {aux.content = playstation}
                                else if(el.platform.name.toLowerCase().includes("xbox")) {aux.content = xbox}
                                else if(el.platform.name.toLowerCase().includes("pc") || el.platform.name.toLowerCase().includes("linux") || el.platform.name.toLowerCase().includes("macintosh")) {aux.content = pc}
                                else if(el.platform.name.toLowerCase().includes("ios") || el.platform.name.toLowerCase().includes("android")) {aux.content = mobile}
                                else if(el.platform.name.toLowerCase().includes("nintendo")) {aux.content = nintendo}
                                else if(el.platform.name.toLowerCase().includes("web")) {aux.content = internet}
                                else {aux.content = others}
                                return (
                                    <div key={el.platform.id} className={style.cube}>
                                        <div className={style.cubeContent}>
                                            {aux.content}
                                        </div>
                                    </div>
                                    )
                                })
                            : 
                            game.platforms.map(el => {
                                var aux = {}
                                if(el.toLowerCase().includes("playstation")) {aux.content = playstation}
                                else if(el.toLowerCase().includes("xbox")) {aux.content = xbox}
                                else if(el.toLowerCase().includes("pc") || el.toLowerCase().includes("linux") || el.toLowerCase().includes("macintosh")) {aux.content = pc}
                                else if(el.toLowerCase().includes("ios") || el.toLowerCase().includes("android")) {aux.content = mobile}
                                else if(el.toLowerCase().includes("nintendo")) {aux.content = nintendo}
                                else if(el.toLowerCase().includes("web")) {aux.content = internet}
                                else {aux.content = others}
                                return (
                                    <div key={el + "db"} className={style.cube}>
                                        <div className={style.cubeContent}>
                                            {aux.content}
                                        </div>
                                    </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>) : <LoadingSpinner/>}
        </>
    )
}

export default CardDetail;