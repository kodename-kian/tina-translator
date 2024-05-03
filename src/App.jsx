import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-cloud bg-cover">
        <div className="flex flex-col min-h-screen justify-center items-center space-y-8">
          
          <p className="text-5xl font-bold text-white border-1">
            The Tina Translator
          </p>

          <textarea id="text" rows="6" 
                    class="block p-2.5 w-1/3 text-sm rounded-md border border-gray-500 
                          focus:ring-2 focus:ring-red-800" 
                    placeholder="How would Katrina say..."> 
          </textarea>

          <button className="w-1/6 min-w-fit py-3 px-6 rounded-md hover:brightness-110 
                             bg-gradient-to-r from-reef-400 to-reef-600 text-white font-bold">
            Translate!
          </button>

        </div>
      </div>
    </>
  )
}

export default App
