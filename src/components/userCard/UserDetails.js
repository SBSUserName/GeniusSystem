import React from "react";

const UserDetails = ({userFullname, active, username, userID, country, address, email, memberSince}) => {
    return (
        <div className='user-details'>
            <div className='title'>
                <div style={{ display: "flex" }}>
                    <h2>{userFullname}</h2>
                    <div
                        className={
                            "status " +
                            (active === "0" ? "offline" : "online")
                        }></div>
                    <span
                        className={
                            "statusText  " +
                            (active === "0" ? "offText" : "onText")
                        }>
                        {active === "0" ? "Offline" : "Active"}
                    </span>
                </div>
                <p>@{username}</p>
            </div>

            <ul>
                <li>
                    <span>
                        <b>ID: </b>
                    </span>
                    <span>{userID}</span>
                </li>
                <li>
                    <span>
                        <b>Country: </b>
                    </span>
                    <span>{country}</span>
                </li>
                <li>
                    <span>
                        <b>Address: </b>
                    </span>
                    <span>{address}</span>
                </li>
                <li>
                    <span>
                        <b>Email: </b>
                    </span>
                    <span>{email}</span>
                </li>
                <li>
                    <span>
                        <b>Member Since: </b>
                    </span>
                    <span>{memberSince}</span>
                </li>
            </ul>
        </div>
    );
};

export default UserDetails;
