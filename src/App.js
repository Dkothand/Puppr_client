import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/Profile'

class App extends React.Component {
  // auth check needs to be here
  // <Route path="/profile" component={() => this.state.isAuth ? <Profile/> : <Redirect to="/login"/>}
  render() {
    return (
      <div className="App">
        {/* <div></div> */}
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/login' component={Register}/>
          <Route path='/home' component={Home}/>
          
          {/* Protected Route */}
          <Route path='/profile' component={Profile}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;