import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getGenres, postGame} from "../../redux/actions/index"
import style from './Form.module.css';
import Nav from "../../components/Nav/Nav";

function validate(input) { //Arreglar validaciones
    let errors = {};
    if (!input.name) {
        errors.name = 'Your game must have a name';
    }
    else if (input.name.length > 30) {
        errors.name = 'Thats way too long a name. Keep it simple!!';
    }
    else if (!input.description) {
        errors.description = 'Description is required!!';
    }
    else if (!input.launch_date) {
        errors.launch_date = 'Launch date is required!!';
    }
    else if (!input.rating) {
        errors.rating = 'Rating is required!!';
    }
    else if (isNaN(parseInt(input.rating))) {
        errors.rating = 'Rating should be a number';
    }
    else if (input.rating <= 0) {
        errors.rating = 'Your rating must be greater than zero';
    }

    return errors;
}


const Form =()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const allGenres = useSelector((state) => state.genres);

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: '',
        description: '',
        launch_date: '',
        rating: '',
        platforms: '',
        image: '',
        genres: [],
    });

    useEffect(() => {
        dispatch(getGenres());
    },[dispatch]);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }));

        console.log(input)
    }

    
    function handleSelect(e) {
        var encontrado=false;
        input.genres.map(element => {
            if(element.name === e.target.value) {
                encontrado = true;
            }
            return null;
        })
        if(!encontrado){
            var idGenre = "";
            allGenres.map(gen => {
                if(e.target.value === gen.name){
                    idGenre = gen.id
                }
                return null;
                })
                setInput({
                    ...input,
                    genres: [...input.genres, {name: e.target.value, id: idGenre}]
                });
                console.log(input);
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!Object.getOwnPropertyNames(errors).length && input.name && input.description && input.launch_date && input.rating && input.platforms && input.genres.length) {
            var genresIds = []
            input.genres.map(el => genresIds.push(el.id))
            dispatch(postGame({
                name: input.name,
                description: input.description,
                launch_date: input.launch_date,
                rating: input.rating,
                platforms: input.platforms,
                image: input.image,
                idsGenres: genresIds,
            }));
            alert('Game created 🎮');
            setInput({
                name: '',
                description: '',
                launch_date: '',
                rating: '',
                platforms: '',
                image: '',
                genres: [],
            });
            history.push('/home');
        }
    }

    function handleDeleteGenres(el) {
        setInput({
            ...input,
            genres: input.genres.filter(genre => genre.name !== el)
        })
    }


    return (
        <div>
            <Nav/>
            <div className={style.formContainer}>  
                <form onSubmit={e => handleSubmit(e)} className={style.form}>
                    <div  className={style.boxLabelInput}>
                        <label className={style.formLabel}>Name</label>
                        <input className={style.formInput} type='text' value={input.name} name='name' onChange={e => handleChange(e)} />
                        {errors.name && (
                            <p className='error'>{errors.name}</p>
                            )}
                    </div>
                    <div className={style.boxLabelInput}>
                        <label className={style.formLabel}>Description</label>
                        <input className={style.formInput} type='text' value={input.description} name='description' onChange={e => handleChange(e)} />
                        {errors.description && (
                            <p className='error'>{errors.description}</p>
                            )}
                    </div>
                    <div className={style.boxLabelInput}>
                        <label className={style.formLabel}>Launch Date</label>
                        <input className={style.formInputDate} type='date' value={input.launch_date} name='launch_date' onChange={e => handleChange(e)} />
                        {errors.launch_date && (
                            <p className='error'>{errors.launch_date}</p>
                        )}
                    </div>
                    <div className={style.boxLabelInput}>
                        <label className={style.formLabel}>Rating</label>
                        <input className={style.formInput} type='text' value={input.rating} name='rating' onChange={e => handleChange(e)} />
                        {errors.rating && (
                            <p className='error'>{errors.rating}</p>
                        )}
                    </div>
                    <div className={style.boxLabelInput}>
                        <label className={style.formLabel}>Platforms</label>
                        <input className={style.formInput} type='text' value={input.platforms} name='platforms' onChange={e => handleChange(e)} />
                        {errors.platforms && (
                            <p className='error'>{errors.platforms}</p>
                        )}
                    </div>
                    <div className={style.boxLabelInput}>
                        <label className={style.formLabel}>Image</label>
                        <input className={style.formInput} type='text' value={input.image} name='image' onChange={e => handleChange(e)} />
                    </div>
                    <div className={style.boxSelect}>
                        <select className={style.formSelect} onChange={e => {
                            handleSelect(e)
                            e.target.options[0].selected = true
                            }} >
                            <option value='selected' hidden >Select a Genre</option>
                            {allGenres?.sort(function (a, b) {
                                if (a.name < b.name) return -1;
                                if (a.name > b.name) return 1;
                                return 0;
                            }).map(genre => {
                                return (
                                    <option className={style.selectOption} value={genre.name} key={genre.id}>{genre.name}</option>
                                )
                            })}
                        </select>
                        
                        <div className={style.boxGenresSelected}>
                            {input.genres.map(el => {
                                return (
                                    <div className={style.cube}>
                                        <div className={style.cubeContent}>
                                            <p className={style.LiText}>{el.name}</p>
                                            <button onClick={() => handleDeleteGenres(el.name)} className={style.LiButton}>❌</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className={style.boxButton}>
                        <button type='submit' className={style.formButton} >
                            <div className={style.formButtonContent}>
                                Save
                            </div>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;