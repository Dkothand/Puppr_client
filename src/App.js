import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import './App.css'

import LandingPage from './components/LandingPage'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/Profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: true // look into context API
    }
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }
  // auth check needs to be here
  isAuthenticated(authenticate) {
    this.setState({
      isAuth: authenticate
    })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route 
            path='/login'
            render={(props) => <Register {...props} isAuthenticated={this.isAuthenticated} />}
          />
          <Route 
            path='/home'
            render={(props) => <Home {...props} isAuthenticated={this.isAuthenticated} />}
          />

          {/* Protected Route */}
          <Route path='/profile' component={() => this.state.isAuth 
          ? <Profile isAuthenticated={this.isAuthenticated}/> 
          : <Redirect to="/login"/>}/>

          {/* Build 404 page here */}
        </Switch>
        
      </div>
    );
  }
}

export default App;