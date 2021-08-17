import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideMenu extends Component {
    render() {
        return (
            <div className='side-menu'>
                <div className='menu-options'>
                    <Link to='/'>
                        <h2>All Users</h2>
                    </Link>

                    <h2>Subscriptions</h2>
                    <ul>
                        <Link to='/plan1'>
                            <li>Plan 1</li>
                        </Link>

                        <li onClick={() => this.planSelect(2)}>Plan 2</li>
                        <li onClick={() => this.planSelect(3)}>Plan 3</li>
                        <li onClick={() => this.planSelect(6)}>Plan 6</li>
                        <li onClick={() => this.planSelect(12)}>Plan 12</li>
                        <li onClick={() => this.planSelect("unlimited")}>
                            Plan Unlimited
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
