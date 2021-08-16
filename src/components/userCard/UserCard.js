import React, { Component } from 'react';
import subscriptions from "../../assets/json/subscriptions.json";

export default class UserCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subscriptionDetail: {
                user_id: "x",
                package: "package",
                expires_on: 1
            }
        }
    }

    componentDidMount() {
        subscriptions.map((subscription, index) => {
            if (subscription.user_id == this.props.userID) {
                console.log(subscriptions[index])
                this.setState({
                    subscriptionDetail: subscriptions[index]
                })
            }
        })
    }

    render() {
        return (
            <div className="user-card">
                <div className="user-details">
                    <div className="title">
                        <div style={{ display: "flex" }}>
                            <h2>
                                {this.props.userFullname}
                            </h2>
                            <div className={"status " + (this.props.active === "0" ? "offline" : "online")}></div>
                            <span className={"statusText  " + (this.props.active === "0" ? "offText" : "onText")}>
                                {this.props.active === "0" ? "Offline" : "Active"}
                            </span>
                        </div>
                        <p>@{this.props.username}</p>
                    </div>

                    <ul>
                        <li>
                            <span><b>ID: </b></span>
                            <span>{this.props.userID}</span>
                        </li>
                        <li>
                            <span><b>Country: </b></span>
                            <span>{this.props.country}</span>
                        </li>
                        <li>
                            <span><b>Address: </b></span>
                            <span>{this.props.address}</span>
                        </li>
                        <li>
                            <span><b>Email: </b></span>
                            <span>{this.props.email}</span>
                        </li>
                        <li>
                            <span><b>Member Since: </b></span>
                            <span>{this.props.memberSince}</span>
                        </li>
                        <li>
                            <span><b>Subscription: </b></span>
                            {this.state.subscriptionDetail.user_id === "x" ?
                                <span style={{ color: "red" }}>Not Subscribed</span>
                                :
                                <ul>
                                    <li>
                                        <span><b>ID: </b></span>
                                        <span>{this.state.subscriptionDetail.user_id}</span>
                                    </li>
                                    <li>
                                        <span><b>Package: </b></span>
                                        <span>{this.state.subscriptionDetail.package}</span>
                                    </li>
                                    <li>
                                        <span><b>Expires On: </b></span>
                                        <span>{this.state.subscriptionDetail.expires_on}</span>
                                    </li>
                                </ul>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
