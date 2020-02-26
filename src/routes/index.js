import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import BoardsContainer from "../containers/boards/BoardsContainer";
import ColumnsContainer from "../containers/columns/ColumnsContainer";
import Header from "../components/common/Header";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={BoardsContainer} />
        <Route exact path="/board/:boardId" component={ColumnsContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
