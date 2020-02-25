import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import BoardsContainer from "../containers/boards/BoardsContainer";
import BoardContainer from "../containers/boards/BoardContainer";
import Header from "../components/common/Header";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={BoardsContainer} />
        <Route exact path="/board/:boardId" component={BoardContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
