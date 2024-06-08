import React from "react";
import "./User.css";
import userImg from "../../assets/bigbrain.webp"


const User = () => {
    return (
        <div className="user">
            <img src={userImg} alt="profile-pic" />


            <h1>
                I'm Rishav Chakraborty, backport devlooper from MANIT.
            </h1>


            <p>
                Here, you'll find a showcase of my projects, skills, and achievements, reflecting my journey and aspirations in the field of computer science.
            </p>
            <div className="user-action">
                <div className="user-connect">Connect with me</div>
                <div className="user-cv">My CV</div>
            </div>
        </div>
    )
}

export default User;