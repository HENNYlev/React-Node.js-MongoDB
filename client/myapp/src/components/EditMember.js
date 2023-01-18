import axios from "axios";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

const EditMemberComp = () => {
    const [member, setMember] = useState(JSON.parse(sessionStorage.getItem("memberToEdit")));
    console.log(member)
    let navigate=useNavigate()
const updateMember=async()=>{
    let {data}=await axios.put(`http://localhost:8005/api/members/${member._id}`,member)
    console.log(data);
    sessionStorage.removeItem("memberToEdit");
    navigate("/navBar/members/allmembers");
}
const cancel=()=>{
    sessionStorage.removeItem("memberToEdit");
    navigate("/navBar/members/allmembers");

}
    return (<div>
        <h1>Members</h1>
        <h1>Edit Member:  {member.name}</h1>
        <span>Name:</span>  <input type={"text"} value={member.name} onChange={e=>setMember({...member,name:e.target.value})}/><br />
        <span>Email:</span> <input type={"text"} value={member.email}onChange={e=>setMember({...member,email:e.target.value})} /><br />
        <span>City:</span>  <input type={"text"} value={member.city} onChange={e=>setMember({...member,city:e.target.value})}/><br />
   <input type={"button"} value="update" onClick={updateMember}/>&nbsp;&nbsp;
   <input type={"button"} value="cancel" onClick={cancel}/>
    </div>);
}

export default EditMemberComp;