import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';

import Home from "./pages/Home/";
import Login from "./pages/Home/";
import Signin from "./pages/Home/";
//import Nonmember from "./pages/Home/";


class App extends React.Component() {

    state = {
    logInDone: false, 
    userInfo: {}
  };

  handleLoginState = () => {
    this.setState({ isLogin: true });
  };

  getUserInfo = () => {
    axios.get('http://localhost:3000/user', {withCredentials: true})
  .then((response) => {
    // handle success
    console.log(response);
  }) 
  .catch((error) => {
    // handle error
    console.log(error);
  })
  }

  render(){
    const { isLogin, userInfo } = this.state;
    return (
    <div>
      <Router>
        <Switch>
          <Route
              path="/home"
                render={() => (
                  <Home/>
                )}
              />
            <Route
              exact
              path="/login"
                render={() => (
                  <Login
                    isLogin={isLogin} handleLoginState={this.handleLoginState} getUserInfo={this.getUserInfo} 
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                  render={() => 
                    <Signin
                      isLogin={isLogin} />}
                />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
