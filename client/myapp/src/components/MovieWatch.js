import { useEffect, useState } from "react";
import AddSubscriptionComp from "./AddSubscription";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieWatchComp = (props) => {
    console.log(props)
    const [see, setSee] = useState(false);
    const [myArrMovies, setMyArrMovies] = useState([])

    const initial = () => {
        setMyArrMovies(props.arr)
    }
    useEffect(() => { initial(); }, [props])
    const addNewMovie = async (movie) => {
        setSee(false);
        movie.memberId = props.member._id;
        let { data } = await axios.post("http://localhost:8005/api/subscription/", movie);
            let arr = [...myArrMovies];
        let newMovie=await axios.get("http://localhost:8005/api/movies/"+movie.movieId);
            arr.push(newMovie.data);
            setMyArrMovies(arr)
    }
    return (<div style={{ "border": "2px red solid" }}>
        <h3>Movies Watch</h3>
        <input type={"button"} value="subscribe to a new movie" onClick={() => setSee(!see)} />
        {see && <AddSubscriptionComp member={props.member} myMovies={myArrMovies} calBack={movie => addNewMovie(movie)} />}
        <ul>
            
            {myArrMovies.map((movie, index) => {
                return (<li key={index} ><Link to="../../movies" state={{movie:movie}}>{movie.name}</Link>,<span> {props.myArr[index].date.slice(0,10)}</span></li>)
            })}</ul>

    </div>);
}

export default MovieWatchComp;