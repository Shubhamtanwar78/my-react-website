import React, { useState } from "react";




const FORM_ENDPOINT = "";
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We&apos;ll be in touch soon.</div>
      </>
    );
  }
  return (
    <div
      className="relative h-96 flex flex-col 
      items-center justify-center rounded-md px-96 bg-gradient-to-br from-orange-500 to-purple-500"
    >

      <div className="mb-3 pt-0 w-44">
        <h3 className="text-center text-black text-3xl">
            REVIEW US
        </h3>
      </div>

      <form className="rounded px-7 w-96 mb-1"
        // className="bg-gray-50 rounded px-7 w-96 mb-1"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-500 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-500 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-500 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <a href=" "
            className=" cursor-pointer flex justify-center bg-blue-800 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </a>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;