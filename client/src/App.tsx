import React from 'react';
import './App.css';

import API from './utils/API';

const App: React.FC = () => {

  API.test()
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
