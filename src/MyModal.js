import React from "react";
import ContactForm from "./ContactForm";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + Add a Review 
      </button>
      

      {showModal ? (
        <>
        
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="border-0 rounded-lg shadow-lg flex flex-col w-max bg-gray-50 outline-none focus:outline-none relative my-6 mx-auto max-w-3xl">

                
                <ContactForm />
                <button className=" absolute -right-0 -top-0 bg-transparent text-red-800 font-semibold hover:text-black py-1 rounded-full h-9 w-8" onClick={() => setShowModal(false)}>
                    X
                </button>
              </div>
            
          </div>
        <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}