import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home";
import './styles/styles.scss'

ReactDOM.render(
    <Router >
        <Switch>
            <Route exact path={`/`} component={Home} />
        </Switch>
    </Router>,
    document.getElementById("root")
);