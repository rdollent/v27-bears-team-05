import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./elements/components";
import HabitAdd from "./pages/HabitAdd";
import Modal from './components/Modal.js';

function App() {
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
