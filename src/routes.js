import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from './styles/global';

import Login from "./pages/LoginPage";
import Upload from "./pages/UploadPage";
import Result from "./pages/ResultPage";

function Routes() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/result" exact component={Result} />
      </Switch>
    </Router>
  );
}

export default Routes;
