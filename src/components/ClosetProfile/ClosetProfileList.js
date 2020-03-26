import ClosetProfileManager from "../../modules/ClosetProfileManager";
import React,{ useState, useEffect } from "react";
import ClosetProfileCard from './ClosetProfileCard'

const ClosetProfileList = (props) =>{
    const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));
const [user, setUsers]= useState([])
    
    const getUser = () => {
        return ClosetProfileManager.getUserProfile(userNow).then((user)=>{
        setUsers(user)})
};
useEffect(()=>{
    getUser()
},[])


return (
    <React.Fragment>

          <div className="container-userprofileCards">
          <img src= {user.profilePic}/>
           <h1>{user.username}</h1>
       <p>{user.location}</p>
       <p>{user.personalStyleDescription}</p>
       <div className="container-clothingProfileCards">
        {users.map((userg) => (
          <ClosetProfileCard
            key={user.id}
           user={user}
            getUser={getUser}
            {...props}
          />
        ))}
      </div>
       </div>
       
       </React.Fragment>
      );
    }


export default ClosetProfileList 