import React, { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="text-white active:text-reef-400 text-xs font-semibold
                   px-4 py-2 rounded shadow hover:shadow-lg mr-1 mb-1
                   border border-gray-300 active:border-reef-400"
        type="button"
        onClick={() => setShowModal(true)}
      >
        About this site
      </button>

      {showModal ? (
        <>

          {/*MODAL BOX WRAPPERS */}
          <div className="flex justify-center items-center 
                          overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              
              {/*MODAL BOX PROPER */}
              <div className="border border-gray-500 rounded-lg shadow-md relative 
                              flex flex-col w-full bg-white bg-opacity-95">
                
                {/*MODAL HEADER*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <div className="text-2xl font-semibold">Wats goin awn? 👁️👄👁️ </div>
                </div>

                {/*MODAL CONTENT*/}
                <div className="text-sm flex flex-col items-center justify-start p-5 border-0 max-w-prose space-y-6">
                  My friend Katrina has an... interesting vocabulary. <br /> <br />
                  In an effort to communicate with her better,
                  this translator uses AI to translate
                  normal sentences into Katrina-speak: to varying degrees of unhingedness. <br /> <br />
                  Though it doesn't translate her language perfectly, it does a pretty good job
                  of capturing the chaos she brings, and so it's close enough I think!
                  
                  <div className="w-full">
                    For the technical details, check out the project on 
                    <a href="https://github.com/kodename-kian/tina-translator" 
                       className="text-blue-600 hover:text-blue-800"> GitHub</a>.
                  </div>

                  <div className="text-xs w-full italic">
                      A big thank you to Katrina for being supportive of my mini-project. Check out her art and 
                      give her a follow at <a href="https://www.instagram.com/trinaluise/" 
                                              className="text-blue-600 hover:text-blue-800">@trina.luise</a>!
                  </div>

                </div>

                {/*MODAL CLOSER*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-reef-600 active:text-reef-950 background-transparent font-bold uppercase text-sm"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Yay noice ok!
                  </button>
                </div>

              </div>

            </div>
          </div>
        </>
      ) : null}

    </>
  );
};

export default About;