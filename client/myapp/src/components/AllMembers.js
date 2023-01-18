import axios from "axios";
import { useEffect, useState } from "react";
import MemberComp from "./member";

const AllMembersComp = () => {
    const [members, setMembers] = useState([]);
    const [moviesMember, setMoviesMember] = useState([])
    useEffect(() => { getAllMembers(); getAllSubscriptions() }, [])
    const getAllMembers = async () => {
        let { data } = await axios.get("http://localhost:8005/api/members")
        console.log(data)
        setMembers(data);
    }
    const getAllSubscriptions = async () => {
        let { data } = await axios.get("http://localhost:8005/api/subscription");
        setMoviesMember(data);
        console.log(moviesMember)
    }
    const deleteMember = async (id) => {
        let { data } = await axios.delete(`http://localhost:8005/api/members/${id}`);
        await getAllMembers();
        await deleteSubs(id);
        await getAllSubscriptions();
    }
    const deleteSubs = async (id) => {
        console.log(id)
        let { data } = await axios.get("http://localhost:8005/api/subscription")
        console.log(data)
        data = data.filter(sub => sub.memberId == id)
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let sub = await axios.delete(`http://localhost:8005/api/subscription/${data[i]._id}`)
            console.log(sub);
        }
    }
    return (<div>
        {members.map((member, index) => {
            return (<MemberComp key={index} member={member} arr={moviesMember} callBack={id => deleteMember(id)} />
            )
        })}
    </div>);
}

export default AllMembersComp;