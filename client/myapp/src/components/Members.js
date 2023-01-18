import { Outlet, useNavigate } from "react-router-dom";

const MembersAndSubscriptionscomp = () => {
    let navigate=useNavigate();
    const goAdd=()=>{
        navigate("addMember")
    }
    const goAll=()=>{
        navigate("allMembers")
    }
    return (  <div>
        <h1>Subscription</h1>
        <input type={"button"} value="all members" onClick={goAll}/>&nbsp;&nbsp;
        <input type={"button"} value="add member" onClick={goAdd}/>
        <Outlet/>
    </div>);
}
 
export default MembersAndSubscriptionscomp;