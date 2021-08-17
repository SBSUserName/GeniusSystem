import React, { Component } from "react";
import UserDetails from "../userCard/UserDetails";
import subscriptions from "../../assets/json/subscriptions.json";
import users from "../../assets/json/users.json";

export default class Plan1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plan1UsersArr: [],
        };
    }

    componentDidMount() {
        let onlyPlan1 = subscriptions.filter(
            (subscription) => subscription.package === "Plan 1"
        );

        let plan1UserObj;
        let arr = [];

        onlyPlan1.map((plan1) => {
            plan1UserObj = users.find((user) => user.id == plan1.user_id);

            if (plan1UserObj !== undefined) {
                arr.push(plan1UserObj);
            }
        });

        this.setState({
            plan1UsersArr: arr,
        });
    }

    render() {
        return (
            <div className='dashboard-content'>
                <h1>Plan 1</h1>
                <div className='only-user-card-container'>
                    {this.state.plan1UsersArr.map((plan1UserInfo) => {
                        return (
                            <UserDetails
                                userFullname={plan1UserInfo.first_name + plan1UserInfo.middle_name + plan1UserInfo.last_name}
                                active={plan1UserInfo.active}
                                username={plan1UserInfo.username}
                                userID={plan1UserInfo.userID}
                                country={plan1UserInfo.country}
                                address={plan1UserInfo.address}
                                email={plan1UserInfo.email}
                                memberSince={plan1UserInfo.memberSince}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
