import React, { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        About this site
      </button>

      {showModal ? (
        <>

          {/*MODAL BOX WRAPPERS */}
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              
              {/*MODAL BOX PROPER */}
              <div className="border border-gray-500 rounded-lg shadow-md relative flex flex-col w-full bg-white">
                
                {/*MODAL HEADER*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <div className="text-2xl font-semibold">Wats goin awn? </div>
                </div>

                {/*MODAL CONTENT*/}
                <div>
                  PLACEHOLDER
                </div>

                {/*MODAL CLOSER*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Yay ok!
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