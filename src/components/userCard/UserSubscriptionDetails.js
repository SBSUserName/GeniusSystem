import React from "react";

const UserSubscriptionDetails = ({user_id, plan, expires_on}) => {
    return (
        <div
            className={
                "user-subscription-details " +
                (user_id === "x"
                    ? "no-subscription"
                    : null)
            }>
            <div>
                <span>
                    <b>Subscription: </b>
                </span>
                {user_id === "x" ? (
                    <ul>
                        <li>
                            <span>Not Subscribed</span>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <span>
                                <b>User ID: </b>
                            </span>
                            <span>{user_id}</span>
                        </li>
                        <li>
                            <span>
                                <b>Package: </b>
                            </span>
                            <span>{plan}</span>
                        </li>
                        <li>
                            <span>
                                <b>Expires On: </b>
                            </span>
                            <span>
                                {expires_on}
                            </span>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default UserSubscriptionDetails;
