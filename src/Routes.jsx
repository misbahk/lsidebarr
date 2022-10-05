import React from "react";
import About from "./About";
import Layout from "./Layout";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route exact path={"/Layout"}>
          <Layout />
        </Route>
        <Route exact path={"/about"}>
          <About />
        </Route>
        <Route exact path={"/Login"}>
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
