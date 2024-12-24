import upArrow from "../assets/icons/upArrow.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const ScrollToTop = () => {
  return (
    <motion.div
      className="w-14 h-14 fixed bottom-10 right-5 rounded-full z-20"
      animate={{
        y: -10,
        scale: 1.1,
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        type: "easeIn",
      }}
    >
      <Link to="home" spy={true} smooth={true} offset={50} duration={50}>
        <img
          src={upArrow}
          alt="upArrow"
          className="w-full h-full cursor-pointer"
        />
      </Link>
    </motion.div>
  );
};

export default ScrollToTop;
