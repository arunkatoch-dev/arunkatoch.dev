import React, { memo } from "react";
const swipperImageStyles = "block w-full rounded-lg h-[70%]";
const swipperTitleStyles =
  "flex tracking-wider text-base sm:text-xl bg-secondary/10 text-secondaryText items-center justify-center w-full py-4 font-title font-bold";
const ImageCube = ({ imgSrc, title }) => {
  return (
    <>
      <img
        src={imgSrc}
        alt={title}
        className={swipperImageStyles}
        loading="lazy"
      />
      <div className={swipperTitleStyles}>{title}</div>
    </>
  );
};

export default memo(ImageCube);
