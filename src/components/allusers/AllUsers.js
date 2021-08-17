import React, { Component } from "react";
import UserCard from "../userCard/UserCard";
import users from "../../assets/json/users.json";
import "./dashboard.scss";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            showList: "",
        };
    }

    componentDidMount() {
        this.setState({
            users: users,
        });
    }

    planSelect = (plan) => {
        this.setState({
            showList: plan,
        });
    };

    render() {
        return (
            <div className='dashboard-content'>
                <h1>All Users</h1>
                {this.state.users.map((user) => (
                    <UserCard
                        key={user.id}
                        userFullname={
                            user.first_name +
                            " " +
                            user.middle_name +
                            " " +
                            user.last_name
                        }
                        country={user.country}
                        address={user.address}
                        email={user.email}
                        username={user.username}
                        memberSince={user.join_date}
                        active={user.active}
                        userID={user.id}
                    />
                ))}
            </div>
        );
    }
}
