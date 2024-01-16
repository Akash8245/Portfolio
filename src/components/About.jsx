import React, { useState, useEffect } from "react";
import image from "../assets/image.jpg";
import git from "../assets/git.svg";
import insta from "../assets/insta.svg";
import email from "../assets/email.svg";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const targetTexts = ["Web Developer", "Freelancer" , "WebDev Intern"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(targetTexts[currentTextIndex].substring(0, index));
      index++;

      if (index > targetTexts[currentTextIndex].length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentTextIndex((prevIndex) =>
            prevIndex === targetTexts.length - 1 ? 0 : prevIndex + 1
          );
          setTypedText("");
        }, 3000);
      }
    }, 300);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentTextIndex]);

  return (
    <div id="about" className="h-[70vh] md:h-[72vh]  bg-[#20272F] font-[Poppins] text-white font-bold">
      <section className="flex items-center justify-between lg:float-right ">
        <div>
          <img
           draggable="false"
            src={image}
            alt=""
            className="w-[200px] md:w-[250px] lg:w-[350px] rounded-[50%] m-auto py-10 lg:float-right lg:mr-[25%] ml-[40%] md:ml-[125%]"
          />
        </div>

        <div className="mr-4">
          <a href="https://github.com/Akash8245" target="_blank">
            <img
              src={git}
              alt=""
              className="w-[30px] lg:w-[40px] bg-[#00BD95] p-2 rounded-[40%] mb-3"
            />
          </a>
          <a href="https://www.instagram.com/akash__024/" target="_blank">
            <img
              src={insta}
              alt=""
              className="w-[30px] lg:w-[40px] bg-[#00BD95] p-2 rounded-[40%] mb-3"
            />
          </a>
          <a href="mailto:akash93433@gmail.com" target="_blank">
            <img
              src={email}
              alt=""
              className="w-[30px] lg:w-[40px] bg-[#00BD95] p-2 rounded-[40%] mb-3"
            />
          </a>
        </div>
      </section>

      <div className="lg:pt-[5%] md:text-center lg:text-left">
        <h1 className="text-[50px] pt-14 px-9 lg:px-14 leading-[28px]">
          Hi, I am{" "}
        </h1>
        <p className="text-[#00BD95] text-[70px] px-8 lg:px-14 ">Akash</p>
        <div className="flex items-center text-[25px]  lg:text-[40px] md:pl-[23%] lg:pl-0 ">
          <p className="pl-9  lg:pl-14 pr-2">I am a </p>
          <p className="text-[#00BD95]">
            {typedText}
            {cursorVisible && <span> |</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
