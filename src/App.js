import React from "react";
import "./App.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./helpers";
import { alertActions } from "./actions";
import { PrivateRoute } from "./components/PrivateRoute";
import TopBar from "./pages/topbar";
import Projects from "./pages/projects";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./components/test";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <TopBar />
          <Route path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/test" component={Test} />
          <PrivateRoute path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
