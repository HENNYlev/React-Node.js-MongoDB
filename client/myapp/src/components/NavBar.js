import { Outlet, useNavigate } from "react-router-dom";
import './../NavBar.css'

const NavBarComp = () => {
    const navigate=useNavigate();
    const goMovies=()=>{
        navigate("movies")
    }
    const goMembers=()=>{
        navigate("members/allmembers");
    }
    return ( <div id="nav">
        <h1>Movies - subscriptions web site</h1>
        <input type={"button"} value="Movies" onClick={goMovies}/>&nbsp;&nbsp;&nbsp;
        <input type={"button"} value="subscription" onClick={goMembers}/>&nbsp;&nbsp;&nbsp;
        <input type={"button"} value="user menegment"/>
        <Outlet/>
    </div> );
}
 
export default NavBarComp;