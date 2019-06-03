import React from 'react';
// import DogList from './components/DogList.js'
import AuthForm from './components/AuthForm.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        {/* <DogList /> */}
        <h2>Login</h2>
        <AuthForm />
      </div>
    );
  }
}

export default App;
