import { Route , Switch , Redirect} from "react-router-dom";
import Main from '../../pages/Main/Main';
import Login from '../../pages/Login/Login';

const Routes = ({ user }) => {
    return (
        user ? (
            <Switch>
                <Route path="/" component={Main} exact/>
                <Redirect to="/" />
            </Switch>
        ) : (
            <Switch>
                <Route path="/login" component={Login} exact/>
                <Redirect to="/login" />
            </Switch>
        )
    )
}

export default Routes;