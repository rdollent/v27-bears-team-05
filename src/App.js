import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./elements/components";
import HabitAdd from "./pages/HabitAdd";
import Modal from './components/Modal.js';
import { loadUser } from './actions/userActions'
import setAuthToken from './utils/setAuthToken'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
      }, [])

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/add-habit" exact component={HabitAdd} />
                </Switch>
            </Router>
            <Modal />
        </div>
    );
}

export default App;
