import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sideMenu.scss";

export default class SideMenu extends Component {
    state = {
        plans: [
            "Plan 1",
            "Plan 2",
            "Plan3",
            "Plan 6",
            "Plan 12",
            "Plan Unlimited",
        ],
    };

    menuClick = () => {
        document.getElementById("sideMenu").classList.toggle("show")
    }

    render() {
        return (
            <div className='side-menu' id="sideMenu">
                <div className="close-icon" onClick={this.menuClick}>
                    <span>Close</span>
                </div>

                <div className='menu-options'>
                    <Link to='/'>
                        <h2>All Users</h2>
                    </Link>

                    <div className='divider'></div>

                    <div className='subscriptions'>
                        <h2>Subscriptions</h2>
                        <ul>
                            {this.state.plans.map((plan) => {
                                return (
                                    <>
                                        <Link key={plan} to={`/${plan}`}>
                                            <li>
                                                {plan === "Plan3"
                                                    ? "Plan 3"
                                                    : plan}
                                            </li>
                                        </Link>
                                    </>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="menu-icon" onClick={this.menuClick}>
                    Menu
                </div>
            </div>
        );
    }
}
