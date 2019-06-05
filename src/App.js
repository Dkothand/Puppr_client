import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/Profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: true
    }
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }
  // auth check needs to be here
  isAuthenticated(authenticate) {
    this.setState({
      isAuth: authenticate
    })
  }
  // <Route path="/profile" component={() => this.state.isAuth ? <Profile/> : <Redirect to="/login"/>}
  render() {
    return (
      <div className="App">
        {/* <div></div> */}
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route 
            path='/login'
            render={(props) => <Register {...props} isAuthenticated={this.isAuthenticated} />}
          />
          <Route path='/home' component={Home}/>

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