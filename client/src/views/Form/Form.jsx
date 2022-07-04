import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getGenres, postGame} from "../../redux/actions/index"
import style from './Form.module.css';

function validate(input) { //Arreglar validaciones
    let errors = {};
    if (!input.name) {
        errors.name = 'Your breed must have a name';
    }
    else if (input.name.length > 30) {
        errors.name = 'Thats way too long a name. Keep it simple!!';
    }
    else if (!input.description) {
        errors.description = 'Minimum height is required!!';
    }
    else if (input.description <= 0) {
        errors.description = 'Your breed cant be shorter than 0';
    }
    else if (parseInt(input.description) >= parseInt(input.launch_date)) {
        errors.description = 'Minimum height should be lower than maximum height';
    }
    else if (!input.launch_date) {
        errors.launch_date = 'Maximum height is required!!';
    }
    else if (input.launch_date > 150) {
        errors.launch_date = 'I think 150cm is enough for a dogs height, dont you?';
    }
    else if (!input.rating) {
        errors.rating = 'Minimum weight is required!!';
    }
    else if (isNaN(parseInt(input.rating))) {
        errors.rating = 'Weight should be a number';
    }
    else if (input.rating <= 0) {
        errors.rating = 'Your breed must weight at least more than nothingness';
    }
    else if (!input.platforms) {
        errors.platforms = 'Maximum weight is required!!';
    }
    else if (isNaN(parseInt(input.platforms))) {
        errors.platforms = 'Weight should be a number';
    }
    else if (parseInt(input.platforms) <= parseInt(input.rating)) {
        errors.platforms = 'Maximum weight should be higher than minimum weight';
    }
    else if (input.platforms > 200) {
        errors.platforms = 'We are creating a dog, not an elephant 🐘!! Keep your weight under 200';
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
        // Esta función hace lo siguiente:
        // Cada vez que modifique o agregue algo, a mi estado input, además de lo que tiene, le agrega
        // el value de lo que se esté modificando. La idea es que a medida que vaya llenando los inputs
        // del formulario, me vaya modificando el estado inicial, que tiene todas las propiedades vacías.

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }));

        console.log(input)
    }

    
    function handleSelect(e) {
        if (!input.genres.includes(e.target.value)) {
            var idGenre = []
            allGenres.map(gen => {
                if(e.target.value === gen.name){
                    idGenre.push(gen.id)
                }
            })
            setInput({
                ...input,
                genres: [...input.genres, idGenre[0]]
            });
            console.log(input);
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(errors);
        if (!Object.getOwnPropertyNames(errors).length && input.name && input.description && input.launch_date && input.rating && input.platforms && input.genres.length) {
            dispatch(postGame(input));
            alert('Doggie created 👏');
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
        } else {
            alert('Doggie cant be created with these data 🤷‍♂️')
        }
    }

    function handleDeleteTemperament(el) {
        setInput({
            ...input,
            genres: input.genres.filter(genre => genre !== el)
        })
    }


    return (
        <div className={style.formContainer}>  
            {/* Nav solo User y volver atras*/}
            {/* Formulario */}
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
                <div className={style.boxLabelInput}>
                    <select className={style.formSelect} onChange={e => handleSelect(e)} >
                        <option value='selected' hidden >Genres</option>
                        {allGenres?.sort(function (a, b) {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                        }).map(genre => {
                            return (
                                <option value={genre.name} key={genre.id}>{genre.name}</option>
                            )
                        })}
                    </select>

                    {input.genres.map(el => {
                        return (
                            
                                <ul className='allTemps' key={el}>
                                    <li>
                                        <p className='temp'>{el}</p>
                                        <button onClick={() => handleDeleteTemperament(el)} className='x' >X</button>
                                    </li>
                                </ul>
                            
                        )
                    })}

                </div>
                <button type='submit' className={style.formButton} >
                    <div className={style.formButtonContent}>
                        Guardar
                    </div>
                </button>

            </form>
        </div>
    )
}

export default Form;