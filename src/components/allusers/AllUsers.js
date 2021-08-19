import React, { Component } from "react";
import UserCard from "../userCard/UserCard";
import users from "../../assets/json/users.json";
import "./allUsers.scss";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.setState({
            users: users,
        });

        window.scrollTo(0, 0);

        if( document.getElementById("sideMenu").classList[1]) {
            document.getElementById("sideMenu").classList.remove("show")
        }
    }

    sort = () => {
        this.setState({
            users: users.sort((a, b) => {
                return a.first_name.localeCompare(b.first_name);
            }),
        });
    };

    sortReverse = () => {
        this.setState({
            users: users.sort((a, b) => {
                return b.first_name.localeCompare(a.first_name);
            }),
        });
    }

    render() {
        return (
            <div className='dashboard-content'>
                <div className='header'>
                    <h1>All Users</h1>

                    <div className="controls">
                        <button onClick={this.sort}>Sort A - Z</button>
                        <button onClick={this.sortReverse}>Sort Z - A</button>
                    </div>
                </div>
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
