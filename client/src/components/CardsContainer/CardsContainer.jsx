import React from "react";
import style from './CardsContainer.module.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getVideogames, getGenres, filterGamesByOrigin, filterGamesByGenres, sortByName, sortByRating } from "../../redux/actions";
import CardVideogame from "../CardVideogame/CardVideogame";
import Paginado from "../Paginado/Paginado";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const CardsContainer = () => {
    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)
    const allGenres = useSelector((state) => state.genres)
    
    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getGenres())
    },[dispatch])

    const [currentPage, setCurrentPage] = useState(1); //Seteo el nro de página
    const [gamesPerPage] = useState(15); //Seteo la cantidad de elementos por página
    const indexOfLastGame = currentPage * gamesPerPage; //Guardo la posición del último elemento a mostrar
    const indexOfFirstGame = indexOfLastGame - gamesPerPage; //Guardo la posición del primer elemento a mostrar
    const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame); //Obtengo los elementos entre el primero y el último
    const paginado = (pageNumber) => { //Cambio la página
        setCurrentPage(pageNumber);
    }
    const [orden, setOrden] = useState(''); // Estado local que me sirve para modificar el estado cuando ordeno.

    function handleFilterGenres(e) {
        e.preventDefault();
        setCurrentPage(1);
        dispatch(filterGamesByGenres(e.target.value))
    }

    function handleFilterOrigin(e) {
        e.preventDefault();
        setCurrentPage(1);
        dispatch(filterGamesByOrigin(e.target.value))
    }

    function handleSortByName(e) {
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }
    
    function handleSortByRating(e) {
        e.preventDefault();
        dispatch(sortByRating(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }


    return (
        <div className={style.content}>
            <div className={style.filterandorder}>
                <ul className={style.lista}>
                    <li className={style.item}>
                        <select className={style.itemSelect} onChange={e => {
                            handleSortByName(e)
                            e.target.parentNode.parentNode.childNodes[1].childNodes[0].options[0].selected = true
                            }}  >
                            <option className={style.selectOption} value='selected' hidden >Sort by name</option>
                            <option className={style.selectOption} value='asc'>A - Z</option>
                            <option className={style.selectOption} value='desc'>Z - A</option>
                        </select>
                    </li>
                    <li className={style.item} >
                        <select className={style.itemSelect} onChange={e => {
                            handleSortByRating(e)
                            e.target.parentNode.parentNode.childNodes[0].childNodes[0].options[0].selected = true
                            }}>
                            <option className={style.selectOption} value='selected' hidden>Sort by Rating</option>
                            <option className={style.selectOption} value='asc'>0⭐ - 5⭐</option>
                            <option className={style.selectOption} value='desc'>5⭐ - 0⭐</option>
                        </select>
                    </li>
                    <li className={style.item} >
                        <select className={style.itemSelect} onChange={e => {
                            handleFilterGenres(e)
                            e.target.parentNode.parentNode.childNodes[3].childNodes[0].options[0].selected = true
                            }}>
                            <option className={style.selectOption} key={0} value='all'>All Genres</option>
                            {allGenres?.sort(function (a, b) {
                                if (a.name < b.name) return -1;
                                if (a.name > b.name) return 1;
                                return 0;
                            }).map(el => {
                                return (
                                    <option className={style.selectOption} key={el.id} value={el.name}>{el.name}</option>
                                    )
                                })}
                        </select>
                    </li>
                    <li className={style.item} >
                        <select className={style.itemSelect} onChange={e => {
                            handleFilterOrigin(e)
                            e.target.parentNode.parentNode.childNodes[2].childNodes[0].options[0].selected = true
                            }}>
                            <option className={style.selectOption} value='all'>All Games</option>
                            <option className={style.selectOption} value='api'>Existent Games</option>
                            <option className={style.selectOption} value='created'>Created Games</option>
                        </select>
                    </li>
                </ul>
            </div>
            { allVideogames.length < 1 ? <LoadingSpinner/> :
                <div className={style.cardscontainer}>
                    {   
                        currentGames?.map( game => {
                            return <CardVideogame key={game.id} route={game.id} name={game.name} genres={game.genres} image={game.background_image ? game.background_image : (game.image ? game.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3dLS3psZfr-rjHOPnuarfi0NBWyTzSCAtj5t_-8i389h7YBcOvPMiroSqlaq1TFF9vc&usqp=CAU")} />
                        })
                    }
                </div>
            }
            <Paginado gamesPerPage={gamesPerPage} allVideogames={allVideogames.length} paginado={paginado} />
        </div>
    )
}

export default CardsContainer;