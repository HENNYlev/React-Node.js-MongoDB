import axios from "axios";
import { useEffect, useState } from "react";
import EditMovieComp from "./EditMovie";
import SubscriptionComp from "./Subscription";

const MovieComp = (props) => {
    const [arr, setArr] = useState([])
    const [flag, setFlag] = useState(false)
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        getAllSubs();
    }, [props])
    const getAllSubs = async () => {
        let { data } = await axios.get("http://localhost:8005/api/subscription")
        setArr(data.filter(item => item.movieId == props.movie._id));
        setFlag(true)
    }
    const getEdit = () => {
        setEdit(true);
    }
    return (<div style={{ "border": "2px black solid" }}>
        <h2>{props.movie.name}</h2>
        <h5>{props.movie.premiered}</h5>
        <div>
            GANERS:
            {props.movie.genres.map((g, index) => {
                return (
                    <>  <span key={index}>
                        {g}
                    </span>,&nbsp;</>
                )
            })}
        </div>
        <img src={props.movie.image} />
        {flag && <SubscriptionComp props={arr} name={props.movie.name} />}
        <input type={"button"} value="edit" onClick={getEdit} />&nbsp;&nbsp;
        <input type={"button"} value="delet" onClick={() => props.callBack(props.movie._id)} />
        {edit && <EditMovieComp movie={props.movie} calBack={e => { setEdit(false) }} />}
    </div>);
}

export default MovieComp;