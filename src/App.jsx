import { useState } from 'react';
import { makeQuery } from './backend.jsx';

function App() {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);

  const translate = async() => {
    console.log(input)
    try {
      setDisabled(true);
      const response = await makeQuery(input);
      document.getElementById("response").innerHTML = response;
      setDisabled(false);
    } catch (e) {
      console.log(e);
      alert("Error. Please refresh and try again later. If errors persist, please let me know!");
    }
  }

  return (
    <>
      <div className="bg-cloud bg-cover">
        <div className="flex flex-col min-h-screen justify-center items-center space-y-8">
          
          <p className="text-5xl font-bold text-white border-1">
            The Tina Translator
          </p>

          <textarea id="text" rows="6" 
                    className="block p-2.5 w-1/3 text-sm rounded-md border border-gray-500 
                          focus:ring-2 focus:ring-reef-950" 
                    placeholder="How would Katrina say..."
                    onInput={e => {setInput(e.target.value)}}> 
          </textarea>

          <button className="w-1/6 min-w-fit py-3 px-6 rounded-md hover:brightness-110 
                             bg-gradient-to-r from-reef-400 to-reef-600 text-white font-bold
                             disabled:from-reef-100 disabled:to-reef-100 disabled:text-reef-400"
                  onClick={translate}
                  disabled={disabled}>
            Translate!
          </button>

          <p id="response"> </p>

        </div>
      </div>
    </>
  )
}

export default App
