import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieWatchComp from "./MovieWatch";

const MemberComp = (props) => {
  const [myMovies, setMyMovies] = useState([]);
  let navigate = useNavigate();
  const [myArr, setMyArr] = useState([]);
  useEffect(() => { getMyMovies() }, [props])
  const getMyMovies = async () => {
    let a = await props.arr.filter(member => member.memberId == props.member._id)
    setMyArr(a);
    let arr = [];
    for (let i = 0; i < a.length; i++) {
      console.log(a[i].movieId);
      let { data } = await axios.get(`http://localhost:8005/api/movies/${a[i].movieId}`);
      console.log("data", data);
      arr.push(data);
    }
    setMyMovies(arr)
  }
  const goEdit = () => {
    sessionStorage.setItem("memberToEdit", JSON.stringify(props.member))
    navigate("/navBar/members/editMember")
  }
  return (< div style={{ "border": "4px black solid" }}>

    <h1>{props.member.name}</h1>
    <h3>Email: {props.member.email}</h3>
    <input type={"button"} value="edit" onClick={goEdit} />&nbsp;
    <input type={"button"} value="delete" onClick={() => props.callBack(props.member._id)} />
    <MovieWatchComp arr={myMovies} myArr={myArr} member={props.member} />
  </div>);
}

export default MemberComp;