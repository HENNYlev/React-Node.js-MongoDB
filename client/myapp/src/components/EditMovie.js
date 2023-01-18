import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditMovieComp = (props) => {
    const [movie, setMovie] = useState({});
    let navigate = useNavigate();
    const updateMovie = async () => {
        let { data } = await axios.put("http://localhost:8005/api/movies/" + props.movie._id, movie)
        console.log(data)
        navigate("/navBar")
    }
    return (<div>
        <input type={"text"} placeholder={props.movie.name} onChange={e => setMovie({ ...movie, name: e.target.value })} /><br />
        <input type={"text"} placeholder={props.movie.premiered} onChange={e => setMovie({ ...movie, premiered: e.target.value })} /><br />
        <input type={"text"} placeholder={props.movie.genres} onChange={e => setMovie({ ...movie, genres: e.target.value })} /><br />
        <input type={"text"} placeholder={props.movie.image} onChange={e => setMovie({ ...movie, image: e.target.value })} /><br />
        <input type={"button"} value="update" onClick={updateMovie} />&nbsp;&nbsp;
        <input type={"button"} value="canael" onClick={() => props.calBack()} />
    </div>);
}

export default EditMovieComp;