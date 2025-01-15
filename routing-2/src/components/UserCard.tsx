import { Link } from "react-router-dom"

export type UserType = {
    id : string,
    img: string,
    name : string,
}

const UserCard = (props : UserType) => {

  return (
    <div className="user-card">
        <img src={props.img} className="user-img"></img>
        <div className="user-info-container">
            <h3 className="user-name">{props.name}</h3>
            <button className="btn-details"><Link to={`/users/${props.id}`}>View Details</Link></button>
        </div>       
    </div>
  )
}

export default UserCard