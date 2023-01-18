import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMemberComp = () => {
    const [newMember,setNewMember]=useState({})
    let navigate=useNavigate()
    const add=async()=>{
        let {data}=await axios.post("http://localhost:8005/api/members/",newMember);
        console.log(data);
        navigate("/navBar/members/allMembers")
    }
    const cancel=()=>{
        navigate("/navBar/members/allMembers")
    }
    return ( <div>
        <h1>Add New Member</h1>
        <span>Name:</span><input type={"text"} onChange={e=>setNewMember({...newMember,name:e.target.value})}/><br/>
        <span>Email:</span><input type={"text"}onChange={e=>setNewMember({...newMember,email:e.target.value})}/><br/>
        <span>City:</span><input type={"text"}onChange={e=>setNewMember({...newMember,city:e.target.value})}/><br/>
        <input type={"button"} value="save" onClick={add}/>&nbsp;&nbsp;
        <input type={"button"} value="cancel" onClick={cancel}/>
    </div> );
}
 
export default AddMemberComp;