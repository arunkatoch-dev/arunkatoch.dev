import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import CircularSpinner from "./components/Loaders/CircularSpinner";
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const App = () => {
  return (
    <>
      <main
        className="w-full min-h-screen bg-background p-2 sm:p-5 relative"
        id="home"
      >
        <Navbar />
        <Suspense fallback={<CircularSpinner />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<CircularSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<CircularSpinner />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<CircularSpinner />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<CircularSpinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<CircularSpinner />}>
          <Footer />
        </Suspense>
        <Suspense fallback={<CircularSpinner />}>
          <ScrollToTop />
        </Suspense>
      </main>
    </>
  );
};

export default App;
