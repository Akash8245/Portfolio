import React, { useEffect, useState } from "react";

export default function Stack() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
      setShowScrollDown(scrollPosition <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="about"
        className={`bg-[#20272F] text-white font-[Poppins] opacity-0 transform transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Your main content */}
        <h1 className="text-center text-[38px] p-8 pb-2 font-bold">Why me ?</h1>
        <p className="p-8 md:p-14 text-[12px] md:text-[20px]">
          <p className="p-2">
            Hey there! 👋 I'm Akash, your go-to web developer with a passion for
            front-end magic! 🚀 Armed with the spells of{" "}
            <span className="font-bold">React.js</span> and the enchantments of{" "}
            <span className="font-bold">Tailwind CSS</span>, I'm on a quest to
            create interfaces that not only look good but also dance to the
            rhythm of user engagement.
          </p>

          <p className="p-2">
            Currently, I'm weaving my web wonders as an intern at{" "}
            <span className="font-bold">TekkyBench</span>, where I've been
            turning coding dreams into reality. Dive into my portfolio to
            witness the spectacle of my projects! To view my internship certificate <span className="font-bold cursor-pointer" ><a href="https://certificate.tekkybench.com/231202193-2/" target="_blank">Click here !</a></span>
          </p>

          <p className="p-2">
            But hey, the adventure doesn't end there! I'm all ears and code for
            any freelance quests you might have. Ready to sprinkle some of my
            expertise on your next project! Let's turn your ideas into digital
            fireworks! 💻
          </p>
        </p>
      </div>

      {/* Scroll-down animated arrow */}
      {showScrollDown && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-[#00BD95] font-extrabold text-center opacity-100 transition-opacity duration-500  ">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mx-auto font-extrabold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          Scroll down for more
        </div>
      )}
    </div>
  );
}
