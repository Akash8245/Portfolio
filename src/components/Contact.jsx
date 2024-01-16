import React, { useState } from 'react';
import git from "../assets/git.svg";
import insta from "../assets/insta.svg";
import mail from "../assets/email.svg";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div id='contact' className=' text-white font-[Poppins] pb-14'>
      <h1 className='text-3xl font-bold text-center p-2'>Contact Me</h1>
      <div>
        <form action="https://formsubmit.co/akash93433@gmail.com" method="POST" className='m-10 md:ml-[10%] mb-0 pb-8'>
          <p className="p-2">Name :</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            spellCheck="false"
            className='outline-none p-1 w-[300px] md:w-[400px] text-black'
          />
          <p className="p-2">Email :</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            spellCheck="false"
            className='outline-none p-1 w-[300px] md:w-[400px] text-black'
          />
          <p className="p-2">Message :</p>
          <textarea
            name="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            spellCheck="false"
            className='outline-none p-1 w-[300px] h-[200px] md:w-[400px] mb-5 text-black'
          ></textarea>
          <br />
          <button type="submit" className="bg-[#2B3C52] p-2 rounded cursor-pointer">
            Submit
          </button>
        </form>
      </div>
      <div className='flex flex-row space-x-4 justify-center '>
        <a href="https://github.com/Akash8245" target="_blank" rel="noopener noreferrer">
          <img
            src={git}
            alt=""
            className="w-[30px] lg:w-[40px] bg-[#00BD95] p-2 rounded-[40%] mb-3"
          />
        </a>
        <a href="https://www.instagram.com/akash__024/" target="_blank" rel="noopener noreferrer">
          <img
            src={insta}
            alt=""
            className="w-[30px] lg:w-[40px] bg-[#00BD95] p-2 rounded-[40%] mb-3"
          />
        </a>
        <a href="mailto:akash93433@gmail.com" target="_blank">
            <img
              src={mail}
              alt=""
              className="w-[30px] lg:w-[40px] bg-[#00BD95] p-2 rounded-[40%] mb-3 "
            />
          </a>
      </div>
    </div>
  );
}
