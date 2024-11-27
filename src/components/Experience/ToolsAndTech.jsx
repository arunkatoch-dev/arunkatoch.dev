import React, { memo } from "react";
import { motion } from "framer-motion";

const ToolsAndTech = ({ iconSrc }) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
        transition: {
          duration: 0.5,
          ease: "backOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      className=" cursor-pointer w-14 h-14 items-center justify-center flex rounded-sm backdrop-blur-lg bg-white/10 p-1 shadow-lg hover:bg-transparent"
    >
      <motion.img
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.2, ease: "anticipate" },
        }}
        src={iconSrc}
        alt="icon"
        loading="lazy"
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default memo(ToolsAndTech);
