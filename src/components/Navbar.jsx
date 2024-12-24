import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import menuBtn from "../assets/icons/menu.png";
import closeBtn from "../assets/icons/close.png";
const navlinksStyles =
  "cursor-pointer font-bold hover:text-primary text-tertiary";

const Navbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  const mobileNav = (e) => {
    e.preventDefault();
    setToggleMobileNav((toggleMobileNav) => !toggleMobileNav);
  };

  return (
    <nav className="w-full flex justify-between md:justify-normal items-center">
      <div className="flex justify-center">
        <span className="font-title tracking-wider text-textPrimary text-xl">
          &lt;Arun Katoch/&gt;
        </span>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-8 mt-8 ml-[25%]">
        <motion.div whileHover={{ y: -8 }}>
          <Link
            className={navlinksStyles}
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={50}
          >
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -8 }}>
          <Link
            className={navlinksStyles}
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={50}
          >
            About
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -8 }}>
          <Link
            className={navlinksStyles}
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={50}
          >
            Contact
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -8 }}>
          <Link
            className={navlinksStyles}
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={50}
          >
            Projects
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -8 }}>
          <Link
            className={navlinksStyles}
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={50}
          >
            Experience
          </Link>
        </motion.div>
      </div>
      <div className="flex sm:hidden items-center justify-center w-9 h-9">
        <img
          src={menuBtn}
          alt="menuBtn"
          className="w-full h-full"
          onClick={mobileNav}
        />
      </div>
      {toggleMobileNav && (
        <div className="w-[50%] z-20 absolute top-0 right-0 flex flex-col gap-5 p-5 bg-slate-900">
          <div className="w-full flex items-end justify-end">
            <img
              src={closeBtn}
              alt="closeBtn"
              className="w-6 h-6"
              onClick={mobileNav}
            />
          </div>
          <div className="flex flex-col mx-auto justify-center gap-3 py-3">
            <Link
              className={navlinksStyles}
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={mobileNav}
            >
              Home
            </Link>
            <Link
              className={navlinksStyles}
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={mobileNav}
            >
              About
            </Link>
            <Link
              className={navlinksStyles}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={mobileNav}
            >
              Contact
            </Link>
            <Link
              className={navlinksStyles}
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={mobileNav}
            >
              Projects
            </Link>
            <Link
              className={navlinksStyles}
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
              onClick={mobileNav}
            >
              Experience
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
