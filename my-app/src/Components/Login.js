import React, { Component } from 'react'
import { Link, Route, Router } from 'react-router-dom';
const axios = require('axios');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
        this.handleInputValue = this.handleInputValue.bind(this);
      }
      handleInputValue = key => e => {
        this.setState({ [key]: e.target.value });
      };
      render() {
        return (
          <div>
              <center>
              <h1>Log In</h1>
              <form
            onSubmit={e => {
              e.preventDefault();
              axios.post('http://localhost:3000/home')
              .then((response) => {
                if(response.status === 200){
                  this.props.handleLoginState();
                  this.props.getUserInfo();
                  this.props.history.push('/main');
                }
              }) 
              .catch((error) => {
                // handle error
                console.log(error);
              })
            }}
          >
              <div>
                  <input
                    style={{
                      width: '400px',
                      height: '30px',
                      margin: '5px',
                      borderRadius: '5px'
                    }}
                    type="username"
                    placeholder="USERNAME"
                    onChange={this.handleInputValue('username')}
                  ></input>
                </div>
                <div>
                  <input
                    style={{
                      width: '400px',
                      height: '30px',
                      margin: '5px',
                      borderRadius: '5px'
                    }}
                    type="password"
                    placeholder="PASSWORD"
                    onChange={this.handleInputValue('username')}
                  ></input>
                </div>
                
                <button
                  style={{
                    width: '200px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px',
                    backgroundColor: 'white'
                  }}
                  type="submit"
                >
                  로그인
                </button>
               
                </form>
                </center>
            </div>
        );
        
    }
}

export default Login;