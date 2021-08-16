import React, { Component } from 'react'
import UserCard from '../userCard/UserCard'

export default class AllUsers extends Component {
    render() {
        return (
            this.props.users.map(user => (
                <UserCard
                    key={user.id}
                    userFullname={user.first_name + " " + user.middle_name + " " + user.last_name}
                    country={user.country}
                    address={user.address}
                    email={user.email}
                    username={user.username}
                    memberSince={user.join_date}
                    active={user.active}
                    userID={user.id}
                />
            ))
        )
    }
}
