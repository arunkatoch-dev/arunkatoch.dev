import { lazy, Suspense } from "react";
import { techStackIcons } from "../config/techStack";
import CircularSpinner from "./Loaders/CircularSpinner";

const ToolsAndTech = lazy(() => import("./Experience/ToolsAndTech"));

const ExperienceTimeline = () => (
  <div className="w-1 h-20 bg-white border border-white sm:ml-56 mt-10 rounded-lg relative">
    <div className="absolute top-[15%] w-4 h-4 border-white border border-double rounded-full bg-textPrimary -left-2" />
    <div className="absolute top-[5%] w-80 flex-col px-2 py-2 left-7 bg-slate-300 flex">
      <div className="flex gap-2">
        <span className="font-paragraph text-background font-bold">
          Full Stack Developer
        </span>
        <a
          href="https://www.fusionsync.ai/"
          target="_blank"
          className="text-purple-700 hover:text-purple-600 hover:underline"
        >
          - Fusion Sync AI
        </a>
      </div>
      <span className="text-sm text-gray-700 mt-1">Next.js • React • TypeScript</span>
      <span className="text-xs">June 2025 - Present</span>
    </div>
  </div>
);

const TechStack = () => (
  <div className="flex w-full flex-col">
    <span className="inline-block sm:pl-56 pt-10 text-2xl capitalize text-tertiary font-bold font-title">
      Experience in the Following tools and technologies:
    </span>
    <div className="flex border-t sm:ml-56 mt-4 pt-5">
      <div className="w-full flex gap-3 flex-wrap sm:p-3">
        {techStackIcons.map((icon, index) => (
          <Suspense key={index} fallback={<CircularSpinner />}>
            <ToolsAndTech iconSrc={icon} />
          </Suspense>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section
      className="w-full h-full sm:h-full mt-5 px-5 flex gap-2 flex-col"
      id="experience"
    >
      <span className="font-title text-tertiary text-5xl inline-block pl-5 sm:pl-10">
        &lt;Experience&gt;
      </span>

      <div className="flex flex-col w-full h-full">
        <ExperienceTimeline />
        <TechStack />
      </div>

      <span className="font-title text-tertiary text-lg mt-10 sm:text-3xl">
        &lt;/Experience&gt;
      </span>
    </section>
  );
};

export default Experience;
