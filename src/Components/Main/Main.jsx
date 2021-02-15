import React from "react";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route path="/about">
      <h1>About</h1>
    </Route>
    <Route path="/users">
      <h1>Users</h1>
    </Route>
    <Route path="/">
      <h1>Home</h1>
    </Route>
  </Switch>
);

export default Main;
