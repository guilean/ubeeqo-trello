import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import BoardsContainer from "../containers/boards";
import Board from "../components/boards/Board";
import Header from "../components/common/Header";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={BoardsContainer} />
        <Route exact path="/board/:boardId" component={Board} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
