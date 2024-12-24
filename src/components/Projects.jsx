import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { lazy, Suspense, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay, Controller } from "swiper/modules";
import { projectsData } from "../data/projectsdata";
import CircularSpinner from "./Loaders/CircularSpinner";
const CardDetails = lazy(() => import("./Projects/CardDetails"));
const ImageCube = lazy(() => import("./Projects/ImageCube"));
const swipperSlideStyles = "bg-center bg-cover w-full shadow-2xl rounded-lg";
const Projects = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <section
      className="w-full py-10 mt-5 sm:mt-10 sm:px-5 flex gap-2 flex-col"
      id="projects"
    >
      <span className="font-title text-tertiary text-3xl sm:text-5xl inline-block pl-10">
        &lt;Projects&gt;
      </span>
      <section className="w-full px-2 py-5  h-[58vh] sm:h-[40vh] sm:gap-5 flex flex-col sm:flex-row items-center justify-center rounded-lg">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
          }}
          modules={[EffectCube, Pagination, Autoplay, Controller]}
          className="w-full sm:w-[30%] sm:h-full"
        >
          {projectsData.length > 0 &&
            projectsData.map((project) => (
              <SwiperSlide className={swipperSlideStyles} key={project.title}>
                <Suspense fallback={<CircularSpinner />}>
                  <ImageCube imgSrc={project.imgLink} title={project.title} />
                </Suspense>
              </SwiperSlide>
            ))}
        </Swiper>

        <Swiper
          direction={"vertical"}
          modules={[Controller, Autoplay, Pagination]}
          onSwiper={setSecondSwiper}
          loop={true}
          controller={{ control: firstSwiper }}
          className="flex flex-col w-full sm:w-[70%] sm:h-full"
        >
          {projectsData.length > 0 &&
            projectsData.map((project) => (
              <SwiperSlide className={swipperSlideStyles} key={project.title}>
                <Suspense fallback={<CircularSpinner />}>
                  <CardDetails
                    title={project.title}
                    projectDescription={project.projectDescription}
                    liveLink={project.liveLink}
                    codeLink={project.codeLink}
                  />
                </Suspense>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <span className="font-title text-tertiary text-3xl">
        &lt;/Projects&gt;
      </span>
    </section>
  );
};

export default Projects;
