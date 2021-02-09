import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./elements/components";

function App() {
    return (
        <Container>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
