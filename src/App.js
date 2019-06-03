import React from 'react';
import DogList from './components/DogList.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <DogList />
      </div>
    );
  }
}

export default App;
