import { useEffect } from "react";
import AllUsers from "./components/allusers/AllUsers";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SideMenu from "./components/sideMenu/SideMenu";
import UserBasedOnPlan from "./components/usersBasedOnPlan/UsersBasedOnPlan";

function App() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                document.getElementById("upBtn").style.display = "initial"
            } else {
                document.getElementById("upBtn").style.display = "none"
            }
        });
    })

    return (
        <div className='main-wrapper'>
            <Router>
                <SideMenu />
                <Switch>
                    <Route exact path='/' component={AllUsers} />
                    <Route exact path='/allUsers' component={AllUsers} />
                    <Route
                        key='plan1'
                        path='/Plan 1'
                        component={UserBasedOnPlan}
                    />
                    <Route
                        key='plan2'
                        path='/Plan 2'
                        component={UserBasedOnPlan}
                    />
                    <Route path='/Plan3' component={UserBasedOnPlan} />
                    <Route
                        key='plan6'
                        path='/Plan 6'
                        component={UserBasedOnPlan}
                    />
                    <Route
                        key='plan12'
                        path='/Plan 12'
                        component={UserBasedOnPlan}
                    />
                    <Route
                        key='planUnlimited'
                        path='/Plan Unlimited'
                        component={UserBasedOnPlan}
                    />
                </Switch>
            </Router>
            <button
                id="upBtn"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className='up-btn'>
                <i class='fas fa-chevron-up'></i>
            </button>
        </div>
    );
}

export default App;
