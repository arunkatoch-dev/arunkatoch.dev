import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { lazy, Suspense, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import resumeBuilder from "../assets/resumeBuilder.webp";
import fileexplorer from "../assets/fileexplorer.webp";
import schoolManagementSystem from "../assets/schoolManagementSystem.webp";
import sharendcare from "../assets/sharendcare.webp";
import myBnb from "../assets/myBnb.webp";
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
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <ImageCube imgSrc={myBnb} title="Air Bnb App Clone" />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <ImageCube imgSrc={sharendcare} title="Share And Care" />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <ImageCube
                imgSrc={schoolManagementSystem}
                title="School Management System"
              />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <ImageCube imgSrc={resumeBuilder} title="Resume Builder App" />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <ImageCube imgSrc={fileexplorer} title="VS Code File Explorer" />
            </Suspense>
          </SwiperSlide>
        </Swiper>

        <Swiper
          direction={"vertical"}
          modules={[Controller, Autoplay, Pagination]}
          onSwiper={setSecondSwiper}
          loop={true}
          controller={{ control: firstSwiper }}
          className="flex flex-col w-full sm:w-[70%] sm:h-full"
        >
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <CardDetails
                title={projectsData.airBnbProject.title}
                projectDescription={
                  projectsData.airBnbProject.projectDescription
                }
                liveLink={projectsData.airBnbProject.liveLink}
                codeLink={projectsData.airBnbProject.codeLink}
              />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <CardDetails
                title={projectsData.shareAndCareProject.title}
                projectDescription={
                  projectsData.shareAndCareProject.projectDescription
                }
                liveLink={projectsData.shareAndCareProject.liveLink}
                codeLink={projectsData.shareAndCareProject.codeLink}
              />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <CardDetails
                title={projectsData.schoolManagementSystemProject.title}
                projectDescription={
                  projectsData.schoolManagementSystemProject.projectDescription
                }
                liveLink={projectsData.schoolManagementSystemProject.liveLink}
                codeLink={projectsData.schoolManagementSystemProject.codeLink}
              />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <CardDetails
                title={projectsData.resumeBuilderProject.title}
                projectDescription={
                  projectsData.resumeBuilderProject.projectDescription
                }
                liveLink={projectsData.resumeBuilderProject.liveLink}
                codeLink={projectsData.resumeBuilderProject.codeLink}
              />
            </Suspense>
          </SwiperSlide>
          <SwiperSlide className={swipperSlideStyles}>
            <Suspense fallback={<CircularSpinner />}>
              <CardDetails
                title={projectsData.vscodeExplorerProject.title}
                projectDescription={
                  projectsData.vscodeExplorerProject.projectDescription
                }
                liveLink={projectsData.vscodeExplorerProject.liveLink}
                codeLink={projectsData.vscodeExplorerProject.codeLink}
              />
            </Suspense>
          </SwiperSlide>
        </Swiper>
      </section>
      <span className="font-title text-tertiary text-3xl">
        &lt;/Projects&gt;
      </span>
    </section>
  );
};

export default Projects;
