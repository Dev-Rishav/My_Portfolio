import React from "react";
import "./User.css";
import userImg from "../../assets/bigbrain.webp"
const User= () =>{
    return(
        <div className="user">
            <img src={userImg} alt="profile-pic"/>
        </div>
    )
}

export default User;