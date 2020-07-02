import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import axios from 'axios';
import './App.css';
import Home from './pages/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Nonmember from './Components/Nonmember'

class App extends Component {

state = {
  logInLoading: false,
  logInDone: false, 
  logInError: false,

  logOutLoading: false,
  logOutDone: false, 
  logOutError: false,

  signUpLoading: false,
  signUpDone: false, 
  signUpError: false,

  userInfo: {}
};


render(){
  const { logInDone, userInfo } = this.state;
  return (
    <div>
      <Home />
        <Login />
        
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>
          <Route path='/signup' component={Signup}/>
        </div>
      </Router>
            
                
        <Nonmember />
    </div>
  );
}
}

export default App;

