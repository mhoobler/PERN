import React from 'react';
import './App.css';

import axios from 'axios';

const App: React.FC = () => {

  axios.get('/_')
    .then( res => console.log(res))
    .catch( err => console.log(err));

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
