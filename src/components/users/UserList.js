import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import UserManager from "../../modules/UserManager";

const UserList = (props) => {
    const [user, setAllUsers] = useState ([])

    const getUsers = () =>{
    return UserManager.getAllUsers().then(usersFromAPI => {
        setAllUsers(usersFromAPI);
    });
    };
    useEffect(()=>{
        getUsers(); 
    },[]);
    return (
        <React.Fragment>
            <div className="container-usercard">
            {user.map(user =>
                    <UserCard
                        key={user.id}
                        user={user}
                        {...props} />)}
            </div>
        </React.Fragment>
    )
}
export default UserList