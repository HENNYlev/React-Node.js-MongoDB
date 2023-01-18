import { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
import axios from "axios";
import MovieComp from "./Movie";
import AddMovieComp from "./AddMovie";

const MoviesPageComp = () => {
    const location = useLocation();
    const thisMovie = location.state ? location.state : "";
    let [allMovies, setAllMovies] = useState();
    const [seeMovies, setSeeMovies] = useState(false);
    const [nameMovie, setNameMovie] = useState();
    const [noResults, setNoResults] = useState(false)
    const [seeAddMovie, setSeeAddMovie] = useState(false);
    const [findOption, setFindOption] = useState(true);
    const [haveMovie, setHaveMovie] = useState(false);
    const goMovies = async () => {
        await getAllMovies()
        setSeeMovies(true);
        setNoResults(false);
        setSeeAddMovie(false);
        setFindOption(true);
        setHaveMovie(false)
    }
    useEffect(() => {
        if (thisMovie) {
            setHaveMovie(true)
        }
        else{
        goMovies();}
    }, [])
    const getAllMovies = async () => {
        const { data } = await axios.get("http://localhost:8005/api/movies");
        allMovies = data;
        setAllMovies(data);
    }
    const search = async () => {
        await getAllMovies();
        setHaveMovie(false)
        let arr = [...allMovies];
        arr = allMovies.filter(movie => movie.name == nameMovie);
        allMovies = arr;
        setAllMovies(arr);
        setAllMovies(arr);
        if (arr.length == 0) {
            setNoResults(true)
            setSeeMovies(false);
        }
        else {
            setNoResults(false);
            setSeeMovies(true)
            console.log("change", allMovies)
        }
    }
    const addMovie = () => {
        setHaveMovie(false);
        setSeeMovies(false);
        setNoResults(false);
        setFindOption(false);
        setSeeAddMovie(true);
    }
    const deleteMovie = async (id) => {
        console.log(id);
        let { data } = await axios.delete(`http://localhost:8005/api/movies/${id}`)
        console.log(data);
        await getAllMovies();
        await deleteSubs(id);
    }
    const deleteSubs = async (id) => {
        let { data } = await axios.get("http://localhost:8005/api/subscription")
        data = data.filter(sub => sub.movieId == id)
        for (let i = 0; i < data.length; i++) {
            let sub = await axios.delete(`http://localhost:8005/api/subscription/${data[i]._id}`)
        }
    }
    return (<div>
        <h1>Movies</h1>
        <input type={"button"} value="All Movies" onClick={goMovies} />&nbsp;&nbsp;&nbsp;
        <input type={"button"} value="Add Movie" onClick={addMovie} />&nbsp;&nbsp;&nbsp;
        {findOption && <> Find Movie: <input type={"text"} onChange={e => setNameMovie(e.target.value)} />&nbsp;&nbsp;&nbsp;
            <input type={"button"} value="find" onClick={search} /></>}
        {haveMovie && <MovieComp movie={thisMovie.movie} callBack={id => deleteMovie(id)} />}
        {seeMovies && allMovies && allMovies.map((movie, index) => {
            return (<MovieComp key={index} movie={movie} callBack={id => deleteMovie(id)} />)
        })}
        {noResults && <h1>Opsi.... there is no results</h1>}
        {seeAddMovie && <AddMovieComp />}

    </div>);
}

export default MoviesPageComp;