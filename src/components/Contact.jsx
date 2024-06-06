import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col
      mb-10 mx-auto">
      <div className="flex justify-center
        items-center">
        <form 
          action="https://formsubmit.co/df72543b4dacbf8514b66b5388c64530"
          method="POST"
          className="flex flex-col
          w-full md:w-7/12">

          {/* Honeypot didnt work*/}
          {/* <input type="text" name="_honey" style="display: none;" /> */}

          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect */}
          <input type="hidden" name="_next" value="https://dnxv.github.io/simple-portfolio/" />

          <Title>Contact</Title>
          <input 
            type="text" 
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent
            placeholder:text-neutral-500
            border-2 rounded-md
            border-neutral-500
            focus:outline-none
            dark:border-neutral-400"
          />
          <input 
            type="text" 
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent
            placeholder:text-neutral-500
            border-2 rounded-md
            border-neutral-500
            focus:outline-none
            dark:border-neutral-400"
          />
          <textarea 
            name="message" 
            placeholder="Message"
            rows="10"
            className="p-2 mb-4
            placeholder:text-neutral-500
            bg-transparent
            border-2 rounded-md
            border-neutral-500
            focus:outline-none
            dark:border-neutral-400" 
          />

          <button
            type="submit"
            className="text-center inline-block
            px-8 py-3 w-max 
            text-base font-medium text-white
            rounded-md 
            bg-gradient-to-r from-purple-500 to-indigo-500
            drop-shadow-md hover:stroke-white"
            >
              Work With Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;