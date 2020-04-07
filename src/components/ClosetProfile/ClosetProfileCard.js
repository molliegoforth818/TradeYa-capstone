import React from 'react'

const ClosetProfileCard = props =>{
   
return (
    <>
    <div className="container-userprofileCards">
    <img className="profile-pic"src={props.user.profilePic} />
    <h1 className="user-name">{props.user.username}</h1>
    <p>{props.user.location}</p>
    <p>{props.user.personalStyleDescription}</p>
    <button
      type="button"
      onClick={() =>
        props.history.push(`closet/${props.user.id}/edituserprofile`)
      }
    >
      Edit Profile
    </button>
  </div>
  </>
)
}
export default ClosetProfileCard