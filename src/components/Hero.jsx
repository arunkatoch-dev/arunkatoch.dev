import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import devImg from "../assets/devImg.png";
import { motion } from "framer-motion";

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A Front End Developer.",
        "A Backend Developer.",
        "A Full Stack Developer.",
        "A MERN Stack Developer.",
      ],
      typeSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="w-full h-[50vh] sm:h-screen px-2 md:px-20 flex sm:flex-row">
      <div className="w-full sm:w-[70%] h-full flex flex-col justify-center md:pl-8 ">
        <span className="font-title text-lg md:text-xl text-tertiary">
          &lt;main&gt;
        </span>
        <div className="flex flex-col justify-center pl-1 md:pl-5 py-1 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-lg md:text-xl font-title text-tertiary">
              &lt;span &gt;
            </span>
            <span className="font-title text-xl md:text-4xl text-tertiary tracking-wider">
              Hello World !
            </span>
            <span className="text-lg md:text-xl font-title text-tertiary">
              &lt;span / &gt;
            </span>
          </div>
          <span className="text-lg md:text-xl font-title text-tertiary inline-block pl-5">
            &lt;h1 &gt;
          </span>
          <div className=" w-full flex gap-1 sm:gap-3 items-center pl-2 md:pl-10">
            <h1 className="font-paragraph text-lg md:text-3xl text-tertiary tracking-wider">
              I'm Arun Katoch.
            </h1>
            <span
              className="font-paragraph text-base sm:text-lg md:text-3xl text-textPrimary"
              ref={el}
            />
          </div>
          <span className="text-lg md:text-xl font-title text-tertiary inline-block pl-2 md:pl-5">
            &lt;h1 / &gt;
          </span>
        </div>
        <span className="font-title text-lg md:text-xl text-tertiary">
          &lt;main/&gt;
        </span>
      </div>

      <div className="w-[30%] h-full hidden sm:flex items-center justify-start">
        <motion.div
          whileHover={{
            scale: 1.2,
            rotateY: 180,
            transition: { duration: 0.5, ease: "circInOut" },
          }}
          className="w-72 h-80 rounded-xl cursor-pointer  mt-5 backdrop-blur-sm border border-secondaryText hover:border-tertiary"
        >
          <img
            src={devImg}
            alt="developer Image"
            className="w-full h-full backdrop-saturate-200"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
