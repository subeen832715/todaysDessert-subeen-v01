import React, {Component} from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
const axios = require('axios'); 

class Home extends React.Component {
  render(){
    return (
      <div>
        <center>
          <h1>오늘의 디저트</h1>
          
        </center>
      </div>
    )
  }
}

export default Home;