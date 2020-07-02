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

class Login extends React.Component {
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
            <form
            onSubmit={e => {
              e.preventDefault();
              axios.post('http://localhost:5050/home', this.state, {withCredentials: true})
              .then((response) => {
                if(response.status === 200){
                  this.props.handleLoginState();
                  this.props.getUserInfo();
                  this.props.history.push('/');
                }
              }) 
              .catch((error) => {
                // handle error
                console.log(error);
              })
            }}
          ></form>
        
        </div>
    );
  }
}

class Signin extends React.Component {
    render(){
        return (
          <div>
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
              onChange={this.handleInputValue('password')}
            ></input>
          </div>
          
          <div>
            <Link to="/signup">회원가입</Link>
          </div>
          </div>
        )
    }
}

class Nonmember extends React.Component {
    render(){
        return (
            <div>
            <Link to="/main">비회원으로 시작</Link>
        </div>
        )
    }
}
        
export default withRouter(Home);
export default withRouter(Login);
export default withRouter(Signin);
export default withRouter(Nonmember);