import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { runGPT } from './helpers.js';

function App() {
  const [disabled, setDisabled] = useState(false);

  const callAPI = async() => {
      setDisabled(true);
      await runGPT();
      setDisabled(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callAPI} disabled={disabled}>
          Press Me!
        </button>

        <p id="res"> output goes here </p>
      </header>
    </div>
  );
}

export default App;
