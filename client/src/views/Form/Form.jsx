import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getGenres, postGame, getPlatforms} from "../../redux/actions/index"
import style from './Form.module.css';
import Nav from "../../components/Nav/Nav";

function validate(input) { //Arreglar validaciones
    let errors = {};
    if (!input.name) {
        errors.name = 'Your game must have a name';
    }
    else if (input.name.length > 30) {
        errors.name = 'It is too long a name.';
    }
    else if (input.name.length < 4) {
        errors.name = 'It is too short a name!';
    }
    else if (!input.description) {
        errors.description = 'Description is required';
    }
    else if (input.description.length < 10) {
        errors.description = 'That is too short a description';
    }
    else if (!input.launch_Date) {
        errors.launch_Date = 'Launch date is required';
    }
    else if (!input.rating) {
        errors.rating = 'Rating is required';
    }
    else if (isNaN(parseInt(input.rating))) {
        errors.rating = 'Rating should be a number';
    }
    else if (parseInt(input.rating) > 5) {
        errors.rating = 'The rating must be less than or equal to 5';
    }
    else if (parseInt(input.rating) < 0) {
        errors.rating = 'Your rating must be greater than zero';
    } 
    else if (!input.image) {
        errors.rating = 'Image link is required';
    }
    else if (!input.platforms) {
        errors.rating = 'Select at least one platform';
    }
    else if (input.platforms.length > 7) {
        errors.rating = 'Even GTA V did not dare so much';
    }
    else if (!input.genres) {
        errors.rating = 'Select at least one genre';
    }

    return errors;
}


const Form =()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const allGenres = useSelector((state) => state.genres);
    const allPlatforms = useSelector((state) => state.platforms);

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: '',
        description: '',
        launch_Date: '',
        rating: '',
        platforms: [],
        image: '',
        genres: [],
    });

    useEffect(() => {
        dispatch(getPlatforms());
    },[dispatch]);

    useEffect(() => {
        dispatch(getGenres());
    },[dispatch]);
    console.log(allPlatforms)

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
    
    function handleSelectPt(e) {
        var encontrado=false;
        input.platforms.map(element => {
            if(element === e.target.value) {
                encontrado = true;
            }
            return null;
        })
        if(!encontrado){
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            });
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!Object.getOwnPropertyNames(errors).length && input.name && input.description && input.launch_Date && input.rating && input.platforms && input.genres.length) {
            var genresIds = []
            input.genres.map(el => genresIds.push(el.id))
            dispatch(postGame({
                name: input.name,
                description: input.description,
                launch_Date: input.launch_Date.toString(),
                rating: input.rating,
                platforms: input.platforms,
                image: input.image,
                idsGenres: genresIds,
            }));
            alert('Game created 🎮');
            setInput({
                name: '',
                description: '',
                launch_Date: '',
                rating: '',
                platforms: '',
                image: '',
                genres: [],
            });
            history.push('/home');
        } else {
            setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
            }));
        }
    }

    function handleDeleteGenres(el) {
        setInput({
            ...input,
            genres: input.genres.filter(genre => genre.name !== el)
        })
    }

    function handleDeletePt(el) {
        setInput({
            ...input,
            platforms: input.platforms.filter(plat => plat !== el)
        })
    }


    return (
        <div>
            <Nav/>
            <div className={style.formContainer}>  
                <form onSubmit={e => handleSubmit(e)} className={style.form}>
                    <div className={style.boxInputs}>
                        <div  className={style.boxLabelInput}>
                            <label className={style.formLabel}>Name</label>
                            <input className={style.formInput} type='text' value={input.name} name='name' onChange={e => handleChange(e)} />
                            {errors.name && (
                                <p className={style.error}>{errors.name}</p>
                                )}
                        </div>
                        <div className={style.boxLabelInput}>
                            <label className={style.formLabel}>Description</label>
                            <input className={style.formInput} type='text' value={input.description} name='description' onChange={e => handleChange(e)} />
                            {errors.description && (
                                <p className={style.error}>{errors.description}</p>
                                )}
                        </div>
                        <div className={style.boxLabelInput}>
                            <label className={style.formLabel}>Launch Date</label>
                            <input className={style.formInputDate} type='date' value={input.launch_Date} name='launch_Date' onChange={e => handleChange(e)} />
                            {errors.launch_Date && (
                                <p className={style.error}>{errors.launch_Date}</p>
                            )}
                        </div>
                        <div className={style.boxLabelInput}>
                            <label className={style.formLabel}>Rating</label>
                            <input className={style.formInput} type='text' value={input.rating} name='rating' onChange={e => handleChange(e)} />
                            {errors.rating && (
                                <p className={style.error}>{errors.rating}</p>
                            )}
                        </div>
                        <div className={style.boxLabelInput}>
                            <label className={style.formLabel}>Image</label>
                            <input className={style.formInput} type='text' value={input.image} name='image' onChange={e => handleChange(e)} />
                        </div>
                    </div>
                    <div className={style.boxSelects}>
                        <div className={style.boxSelect}>
                            <select className={style.formSelect} onChange={e => {
                                handleSelectPt(e)
                                e.target.options[0].selected = true
                                }} >
                                <option value='selected' hidden >Select a Platform</option>
                                {allPlatforms?.sort(function (a, b) {
                                    if (a < b) return -1;
                                    if (a > b) return 1;
                                    return 0;
                                }).map(platform => {
                                    return (
                                        <option className={style.selectOption} value={platform} key={platform}>{platform}</option>
                                    )
                                })}
                            </select>
                            
                            <div className={style.boxGenresSelected}>
                                {input.platforms.map(el => {
                                    return (
                                        <div key={el} className={style.cube}>
                                            <div className={style.cubeContent}>
                                                <p className={style.LiText}>{el}</p>
                                                <button onClick={() => handleDeletePt(el)} className={style.LiButton}>❌</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
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
                                        <div key={el.id} className={style.cube}>
                                            <div className={style.cubeContent}>
                                                <p className={style.LiText}>{el.name}</p>
                                                <button onClick={() => handleDeleteGenres(el.name)} className={style.LiButton}>❌</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
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