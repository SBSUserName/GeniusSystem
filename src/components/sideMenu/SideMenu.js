import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
                    <NavLink to='/allUsers'>
                        <h2>All Users</h2>
                    </NavLink>

                    <div className='divider'></div>

                    <div className='subscriptions'>
                        <h2>Subscriptions</h2>
                        <ul>
                            {this.state.plans.map((plan) => {
                                return (
                                    <>
                                        <NavLink key={plan} to={`/${plan}`} activeClassName="active">
                                            <li>
                                                {plan === "Plan3"
                                                    ? "Plan 3"
                                                    : plan}
                                            </li>
                                        </NavLink>
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
