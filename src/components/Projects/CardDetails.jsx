import React, { memo } from "react";
import { Link } from "react-router";

const CardDetails = ({ title, projectDescription, liveLink, codeLink }) => {
  return (
    <div className="w-full flex flex-col p-5 gap-2 rounded-lg backdrop-blur-2xl bg-white/5">
      <span className="font-title text-lg sm:text-3xl text-tertiary">
        {title}
      </span>
      <span className="text-secondaryText bold text-base sm:text-xl ">
        Description:
      </span>
      <div className="flex gap-2">
        <span className=" text-sm sm:text-lg text-tertiary">
          &lt; span &gt; {projectDescription} &lt;/ span &gt;
        </span>
      </div>
      <div className="flex gap-1 sm:gap-3 p-1 sm:p-4">
        <Link
          to={liveLink}
          className=" hover:bg-textPrimary/50 bg-textPrimary text-white flex items-center justify-center px-1 py-1 sm:px-4 sm:py-2"
        >
          Preview
        </Link>
        <Link
          to={codeLink}
          className="hover:bg-secondary/50 bg-secondary text-white flex items-center justify-center px-1 sm:px-4 py-2"
        >
          &lt;/&gt; Code
        </Link>
      </div>
    </div>
  );
};

export default memo(CardDetails);
