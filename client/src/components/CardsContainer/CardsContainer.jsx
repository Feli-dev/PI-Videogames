import React from "react";
import style from './CardsContainer.module.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getVideogames, getGenres, filterGamesByOrigin, filterGamesByGenres, sortByName, sortByRating } from "../../redux/actions";
import CardVideogame from "../CardVideogame/CardVideogame";
import Paginado from "../Paginado/Paginado";

const CardsContainer = () => {
    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)
    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch])


    const [currentPage, setCurrentPage] = useState(1); //Seteo el nro de página
    const [gamesPerPage, setGamesPerPage] = useState(15); //Seteo la cantidad de elementos por página
    const indexOfLastGame = currentPage * gamesPerPage; //Guardo la posición del último elemento a mostrar
    const indexOfFirstGame = indexOfLastGame - gamesPerPage; //Guardo la posición del primer elemento a mostrar
    const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame); //Obtengo los elementos entre el primero y el último
    const paginado = (pageNumber) => { //Cambio la página
        setCurrentPage(pageNumber);
    }


    const [orden, setOrden] = useState(''); // Estado local que me sirve para modificar el estado cuando ordeno.

    const allGenres = useSelector((state) => state.genres)
    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

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

    // function handleClick(e) {
    //     e.preventDefault();
    //     setCurrentPage(1);          Es por si quiero poner un botón de home
    //     dispatch(getDogs())
    // }



    return (
        <div className={style.cardscontainer}>
            <div className='divNB'>
                <ul className='navbar'>
                    <li className='content-select'>
                        <select onChange={e => handleSortByName(e)}  >
                            <option value='selected' hidden className='elementNB' >Sort breeds by name</option>
                            <option value='asc'>A - Z</option>
                            <option value='desc'>Z - A</option>
                        </select>
                    </li>
                    <li className='content-select' >
                        <select onChange={e => handleSortByRating(e)}>
                            <option value='selected' hidden>Sort by Rating</option>
                            <option value='asc'>0⭐ - 5⭐</option>
                            <option value='desc'>5⭐ - 0⭐</option>
                        </select>
                    </li>
                    <li className='content-select' >
                        <select onChange={e => handleFilterGenres(e)}>
                            <option key={0} value='all'>All temperaments</option>
                            {allGenres?.sort(function (a, b) {
                                if (a.name < b.name) return -1;
                                if (a.name > b.name) return 1;
                                return 0;
                            }).map(el => {
                                return (
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                )
                            })}
                        </select>
                    </li>
                    <li className='content-select' >
                        <select onChange={e => handleFilterOrigin(e)}>
                            <option value='all'>All breeds</option>
                            <option value='api'>Existent breeds</option>
                            <option value='created'>Created breeds</option>
                        </select>
                    </li>
                </ul>
            </div>
            {
                currentGames?.map( game => {

                    return <CardVideogame key={game.id} name={game.name} genres={game.genres} image={game.background_image} />
                })
            }
            <Paginado gamesPerPage={gamesPerPage} allVideogames={allVideogames.length} paginado={paginado} />
        </div>
    )
}

export default CardsContainer;