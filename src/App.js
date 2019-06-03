import React from 'react';
// import DogList from './components/DogList.js'
import AuthForm from './components/AuthForm.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //pass
    }
    this.authenticateUser = this.authenticateUser.bind(this)
  }
  authenticateUser(formInputs) {
    console.log(formInputs)
    fetch('/users/login', {
      // Need to call JSON.stringify on body data
      // user is the param rails login() is looking for
      body: JSON.stringify({
        user: formInputs
      }),
      method: 'POST',
      // Need this header
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
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        {/* <DogList /> */}
        <h2>Login</h2>

        <AuthForm handleSubmit={this.authenticateUser} />

      </div>
    );
  }
}

export default App;
