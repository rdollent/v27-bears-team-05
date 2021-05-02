import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import { Container } from "./styled_components/styled";
import Modal from './components/General/Modal';
import { loadUser } from './actions/userActions'
import setAuthToken from './utilities/setAuthToken'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser());
    }, []);

    return (
        <div>
            {/* <Router> */}
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            {/* </Router> */}
            <Modal />
        </div>
    );
}

export default App;
