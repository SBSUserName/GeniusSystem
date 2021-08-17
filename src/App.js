import AllUsers from "./components/allusers/AllUsers";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SideMenu from "./components/sideMenu/SideMenu";
import Plan1 from "./components/plan1/Plan1";

function App() {
    return (
        <div className='main-wrapper'>
            <Router>
                <SideMenu />
                <Switch>
                    <Route exact path='/' component={AllUsers} />
                    <Route path='/plan1' component={Plan1} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
