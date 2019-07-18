import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/login';
import FriendsList from './components/friendsList';
import PrivateRoute from './components/privateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/login'>Log In Here</Link>
          </li>
          <li>
            <Link to='/friendlies'>See Yo Friends, if you have the stuff</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friendlies' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
