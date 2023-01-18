import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovieComp = () => {
    const [movie,setMovie]=useState({});
    const navigate=useNavigate();
    const add=async()=>{
        const {data}=await axios.post("http://localhost:8005/api/movies/",movie)
        console.log(data);
    }
    const cancel=()=>{
navigate("/navBar");
    }
    return (<div>
        Name:   <input type={"text"} onChange={e=>setMovie({...movie,name:e.target.value})}/><br />
        Ganers:  <input type={"text"} onChange={e=>setMovie({...movie,name:e.target.value})}/><br />
        image Url: <input type={"text"} onChange={e=>setMovie({...movie,name:e.target.value})}/><br />
        Primierd:<input type={"text"} onChange={e=>setMovie({...movie,name:e.target.value})}/><br />
        <input type={"button"} value="save" onClick={add}/>&nbsp;&nbsp;
        <input type={"button"} value="cancel" onClick={cancel}/>
    </div>);
}

export default AddMovieComp;