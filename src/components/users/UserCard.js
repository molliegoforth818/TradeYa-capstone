import React from "react";
import UserManager from "../../modules/UserManager"

const UserCard = (props)=>{
    return     <div className="closetCard">
    <div className="closetCard__content">
      <h3>
        {''}
        <span className="userCard__username"><img src= {props.user.profilePic}/>
          {props.user.username}{" "}
        </span>
      </h3>
      
    </div>
  </div>
}
export default UserCard