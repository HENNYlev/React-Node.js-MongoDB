import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubscriptionComp = (props) => {
    const [arrSubscription, setArrSubscriptions] = useState([]);

    useEffect(() => {
        getAllMembers();
    }, [props])

    const getAllMembers = async () => {
        let thisArr = [];
        for (let i = 0; i < props.props.length; i++) {

            let { data } = await axios.get("http://localhost:8005/api/members/" + props.props[i].memberId)
            thisArr.push(data);
        }
        setArrSubscriptions(thisArr);
    }

    return (<div>
        <ul>{arrSubscription.map((s, index) => {
            return (<li key={index}>
                <Link to={"/member/" + s._id}>{s.name}</Link>
            </li>)
        })}</ul>
    </div>);
}

export default SubscriptionComp;