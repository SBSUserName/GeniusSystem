import React, { Component } from "react";
import UserCardAccToPlan from "../userCardAccToPlan/UserCardAccToPlan";
import subscriptions from "../../assets/json/subscriptions.json";
import users from "../../assets/json/users.json";

export default class Plan1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planTitle: "Plan",
            plan1UsersArr: [],
            onlyPlan1: [],
        };
    }

    componentDidMount() {
        var plan = this.props.location.pathname.replace("/", "");

        let onlyPlan1 = subscriptions.filter(
            (subscription) => subscription.package === plan
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
            planTitle: plan === "Plan3" ? "Plan 3" : plan,
            plan1UsersArr: arr,
            onlyPlan1: onlyPlan1,
        });

        window.scrollTo(0, 0);

        if( document.getElementById("sideMenu").classList[1]) {
            document.getElementById("sideMenu").classList.remove("show")
        }
    }

    sort = () => {
        this.setState({
            plan1UsersArr: this.state.plan1UsersArr.sort((a, b) => {
                return a.first_name.localeCompare(b.first_name);
            }),
        });
    };

    sortReverse = () => {
        this.setState({
            plan1UsersArr: this.state.plan1UsersArr.sort((a, b) => {
                return b.first_name.localeCompare(a.first_name);
            }),
        });
    }

    render() {
        return (
            <div className='dashboard-content'>
                <div className='header'>
                    <h1>{this.state.planTitle}</h1>

                    <div className='controls'>
                        <button onClick={this.sort}>Sort A - Z</button>
                        <button onClick={this.sortReverse}>Sort Z - A</button>
                    </div>
                </div>
                <div className='only-user-card-container'>
                    {console.log("render", this.state.plan1UsersArr)}
                    {this.state.plan1UsersArr.map((plan1UserInfo, index) => {
                        return (
                            <UserCardAccToPlan
                                key={index}
                                userFullname={
                                    plan1UserInfo.first_name +
                                    " " +
                                    plan1UserInfo.middle_name +
                                    " " +
                                    plan1UserInfo.last_name
                                }
                                country={plan1UserInfo.country}
                                address={plan1UserInfo.address}
                                email={plan1UserInfo.email}
                                username={plan1UserInfo.username}
                                memberSince={plan1UserInfo.join_date}
                                active={plan1UserInfo.active}
                                userID={plan1UserInfo.id}
                                planSubscriptions={this.state.onlyPlan1}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
