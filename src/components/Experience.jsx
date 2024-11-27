import React, { lazy, Suspense } from "react";
import bootstrap from "../assets/icons/bootstrap.png";
import canva from "../assets/icons/canva.png";
import cmd from "../assets/icons/cmd.png";
import compass from "../assets/icons/compass.png";
import css from "../assets/icons/css.png";
import expressjs from "../assets/icons/expressjs.png";
import figma from "../assets/icons/figma.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import html from "../assets/icons/html.png";
import js from "../assets/icons/js.png";
import mongodb from "../assets/icons/mongodb.png";
import mongoose from "../assets/icons/mongoose.png";
import nextjs from "../assets/icons/nextjs.png";
import nodejs from "../assets/icons/nodejs.png";
import npm from "../assets/icons/npm.png";
import postman from "../assets/icons/postman.png";
import reactjs from "../assets/icons/reactjs.png";
import tailwind from "../assets/icons/tailwind.png";
import ts from "../assets/icons/ts.png";
import vite from "../assets/icons/vite.png";
import vscode from "../assets/icons/vscode.png";
import webpack from "../assets/icons/webpack.png";
import CircularSpinner from "./Loaders/CircularSpinner";
const ToolsAndTech = lazy(() => import("./Experience/ToolsAndTech"));

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
        <div className="w-1 h-20 bg-white border border-white sm:ml-56 mt-10 rounded-lg relative">
          <div className="absolute top-[15%] w-4 h-4 border-white border border-double rounded-full bg-textPrimary -left-2"></div>
          <div className="absolute top-[5%] w-80  px-2 py-2 left-7 bg-slate-300 flex">
            <span className="font-paragraph text-background font-bold">
              Currently Looking for Opportunities to Start.
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <span className="inline-block sm:pl-56 pt-10 text-2xl capitalize text-tertiary font-bold font-title">
            Experience in the Following tools and technologies:
          </span>

          <div className="flex border-t  sm:ml-56 mt-4 pt-5">
            <div className="w-full flex gap-3 flex-wrap sm:p-3">
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={html} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={css} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={js} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={reactjs} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={tailwind} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={bootstrap} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={nodejs} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={figma} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={expressjs} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={canva} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={mongodb} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={compass} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={mongoose} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={vscode} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={github} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={vite} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={git} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={webpack} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={ts} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={nextjs} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={cmd} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={postman} />
              </Suspense>
              <Suspense fallback={<CircularSpinner />}>
                <ToolsAndTech iconSrc={npm} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <span className="font-title text-tertiary text-lg mt-10 sm:text-3xl">
        &lt;/Experience&gt;
      </span>
    </section>
  );
};

export default Experience;
