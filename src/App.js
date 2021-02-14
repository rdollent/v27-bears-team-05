import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./elements/components";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
