import React, { Component } from 'react';
import UserDetails from '../userCard/UserDetails';
import UserSubscriptionDetails from '../userCard/UserSubscriptionDetails';

export default class UserCardAccToPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subscriptionDetail: {
                user_id: "x",
                package: "package",
                expires_on: 1,
            },
        };
    }

    componentDidMount() {
        this.props.planSubscriptions.map((subscription, index) => {
            if (subscription.user_id == this.props.userID) {
                this.setState({
                    subscriptionDetail: this.props.planSubscriptions[index],
                });
            }
        });
    }

    render() {
        return (
            <div className='user-card'>
                <UserDetails 
                    userFullname = {this.props.userFullname}
                    active = {this.props.active}
                    username = {this.props.username}
                    userID = {this.props.userID}
                    country = {this.props.country}
                    address = {this.props.address}
                    email = {this.props.email}
                    memberSince = {this.props.memberSince} 
                />

                
                <UserSubscriptionDetails 
                    user_id = {this.state.subscriptionDetail.user_id}
                    plan = {this.state.subscriptionDetail.package}
                    expires_on = {this.state.subscriptionDetail.expires_on}
                />
            </div>
        )
    }
}
