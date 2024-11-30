import { Link } from "react-router";
import like from "../assets/icons/like.png";
import { lastUpdate } from "../data/projectsdata";

const Footer = () => {
  return (
    <footer className="w-full mt-5 px-1 sm:px-5 flex gap-2 flex-col">
      <span className="font-title text-tertiary text-3xl sm:text-5xl inline-block sm:pl-10">
        &lt;Footer&gt;
      </span>
      <div className="flex items-end justify-end">
        <div className="flex flex-col items-center">
          <span className="text-base sm:text-3xl font-semibold font-title text-secondaryText">
            &lt;Arun Katoch / &gt;
          </span>
          <span className="text-base sm:text-xl font-title text-secondaryText font-bold">
            &lt;Day Dreamer / &gt;
          </span>
        </div>
      </div>

      <div className="w-full flex gap-2 items-center justify-between">
        <span className="font-title text-tertiary text-base sm:text-3xl">
          &lt;/Footer&gt;
        </span>
        <div className="flex items-center justify-center gap-2">
          <span className="text-white tracking-wider font-paragraph text-sm sm:text-lg ">
            arunkatoch.dev@gmail.com
          </span>
          <img src={like} alt="like Img" className="w-9 h-9" loading="lazy" />
        </div>
      </div>

      <div className="w-full border"></div>
      <div className="flex sm:flex-row flex-col w-full pt-2 justify-between">
        <div className=" w-full flex gap-2 justify-between items-center sm:px-2 sm:flex-row flex-col">
          <span className="text-tertiary hidden sm:inline-flex w-full">
            &copy; All Rights reserved 2024-25
          </span>
          <div className="w-full sm:flex flex-col items-center justify-center hidden">
            <span className="text-tertiary text-base font-paragraph">
              Developed by Arun Katoch
            </span>
            <span className="text-tertiary text-sm font-paragraph">
              Last updated on: {lastUpdate}
            </span>
          </div>

          <div className="w-full  flex sm:flex-row flex-col justify-end gap-2">
            <div className="bg-black hover:bg-gray-800 cursor-pointer sm:px-4 py-2 rounded-sm flex items-center justify-center">
              <Link
                to="https://github.com/arunkatoch-dev"
                className="text-white"
              >
                Github
              </Link>
            </div>
            <div className="bg-blue-700 hover:bg-blue-600 cursor-pointer sm:px-4 py-2 rounded-sm flex items-center justify-center">
              <Link
                to="https://www.linkedin.com/in/arunkatochdev/"
                className="text-white"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
