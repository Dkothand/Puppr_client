import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Puppr</h1>
        <Link to="/users">
          <button>Register</button>
        </Link>
        <Link to="/home">
          <button>Browse</button>
        </Link>
      </div>
    );
  }
}

export default App;