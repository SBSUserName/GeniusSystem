import React, { Component } from "react";
import AllUsers from "./AllUsers";
import users from "../../assets/json/users.json";
import "./dashboard.scss";

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
    }

    render() {
        return (
            <div className='the-container'>
                <h1>All Users</h1>
                <div className='dashboard'>
                    <AllUsers users={this.state.users} />
                </div>
            </div>
        );
    }
}
