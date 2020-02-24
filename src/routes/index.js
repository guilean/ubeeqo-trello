import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Boards from "../containers/boards";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Boards} />
    </BrowserRouter>
  );
}

export default Routes;
