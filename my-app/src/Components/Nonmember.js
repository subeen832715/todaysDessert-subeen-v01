import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Nonmember extends Component {
    render(){
        return (
            <div>
                 <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/main">비회원으로 시작</Link>
              </li>
            </ul>
          </nav>
          <Route path='/signup' />
        </div>
      </Router>
            
        </div>
        )
    }
}

export default Nonmember;