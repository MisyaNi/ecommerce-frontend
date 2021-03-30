import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  Home, Login, Register, List, Details } from "./view";

// import { PrivateRoute, Logout } from './components';

function Routes() {
  return (
    <Router>
      {/* <Header></Header> */}
      {/* <Switch> */}
        <Route exact path="/" component={Home}></Route>
        
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/details/:id" component={Details}></Route>
        {/* <Route component={NotFound}></Route> */}
      {/* </Switch> */}
    </Router>
  );
}

export default Routes;