import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { queryGPT } from './helpers.js';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [prompt, setPrompt] = useState("");

  const callAPI = async() => {
    console.log( prompt );
    try {
      setDisabled(true);
      await queryGPT(prompt);
      setDisabled(false);
    } catch(e){
      console.log(e);
      alert("Error. Please refresh and try again later. If errors persist, please do let me know!");
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <form>
          <input type="text" placeholder="input here" onInput={e => {setPrompt(e.target.value)}} />

          <button onClick={callAPI} disabled={disabled}>
            Translate!
          </button>
        </form>

        <p id="gptResponse"> output goes here </p>
      </header>
    </div>
  );
}

export default App;
