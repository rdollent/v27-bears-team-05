import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./elements/components";
import HabitAdd from "./pages/HabitAdd";

function App() {
    return (
        <Container>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/add-habit" exact component={HabitAdd} />
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
