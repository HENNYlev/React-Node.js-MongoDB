import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogInComp = () => {
    const [user, setUser] = useState({})
    const [find, setFind] = useState(false);
    const navigate = useNavigate();
    const logIn = async () => {
        const { data } = await axios.post("http://localhost:8005/api/users/login/", user)
        if (data) {
            if (data.length > 0) {
                setFind(false)
                navigate('/navBar')
            }
            else { setFind(true) }
        }
        else { setFind(true) }
    }
    return (<div>
        <h1>Movies - Subscriptions Web Site</h1>
        <h3>Log in Page</h3>
        User Name: <input type="text" onChange={e => { setUser({ ...user, userName: e.target.value }) }} /><br />
        Password: <input type="text" onChange={e => { setUser({ ...user, password: e.target.value }) }} /><br />
        <input type="button" value="login" onClick={logIn} />
        {find && <h4>invalid password or user name</h4>}
    </div>);
}

export default LogInComp;