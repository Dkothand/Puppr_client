import React from 'react';
import DogList from './components/DogList.js'
import AuthForm from './components/AuthForm.js'

let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://afternoon-shore-81372.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://afternoon-shore-81372.herokuapp.com'
}

console.log('current baseURL:', baseURL)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //pass
    }
    this.authenticateUser = this.authenticateUser.bind(this)
  }
  // function for user login
  authenticateUser(formInputs) {
    console.log(formInputs)
    fetch(baseURL + '/users/login', {
      // Need to call JSON.stringify on body data
      // user is the param rails login() is looking for
      body: JSON.stringify({
        user: formInputs
      }),
      method: 'POST',
      // Need this header so server can see params
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json())
    .then(resJSON => {
      console.log(resJSON)
      // Display username when login successful
      // this.setState({
      // user: resJSON.user.username
      // })
      // Save token to localStorage
      localStorage.setItem('token', JSON.stringify(resJSON.token))
    })
    .catch(err => console.error(err))
  }

  // function for user signup
  registerUser(formInputs) {
    fetch(baseURL + '/users', {
      body: JSON.stringify({
        user: formInputs
      }),
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json())
    .then(resJSON => console.log(resJSON))
    .catch(err => console.error(err))

  }
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <DogList />
        <h2>Login</h2>

        <AuthForm handleSubmit={this.authenticateUser} />

        <h2>Signup</h2>

        <AuthForm handleSubmit={this.registerUser} />

      </div>
    );
  }
}

export default App;
