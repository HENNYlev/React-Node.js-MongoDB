import axios from "axios";
import { useEffect, useState } from "react";

const AddSubscriptionComp = (props) => {
    let [movies, setMovies] = useState([]);
    const [movie,setMovie]=useState({});
    useEffect(() => {
     start();
    }, [])
    const start=async()=>{
        await getAllMovies();
         getAllSubs();
    }
    const getAllMovies = async () => {
        let { data } = await axios.get("http://localhost:8005/api/movies");
        movies=data;
    }
    const getAllSubs = async () => {
        let arr = [...movies];
        if(props.myMovies.length>0){
        for (let i = 0; i < props.myMovies.length; i++) {
            console.log(props.myMovies[i]);
            console.log(arr);
            arr = arr.filter(item => item._id != props.myMovies[i]._id);
            console.log(arr);
            setMovies(arr);
        }}
        setMovies(arr)

    }
  
    return (<div style={{ "border": "2px red solid" }}>
        <h3>Add A new movie</h3>
        <select  onChange={e=>setMovie({...movie,movieId:e.target.value})}>
            <option></option>
            {movies.map((movie, index) => {
                return (<option key={index} value={movie._id}>
                    {movie.name}
                </option>)
            })}
        </select>
        <input type={"date"} onChange={e=>setMovie({...movie,date:e.target.value})} />
        <input type={"button"} value="subscribe" onClick={()=>props.calBack(movie)}/>
    </div>);
}

export default AddSubscriptionComp;