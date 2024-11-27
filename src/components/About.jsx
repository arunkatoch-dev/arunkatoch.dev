import React from "react";

const About = () => {
  return (
    <section
      className="w-full sm:h-screen sm:pt-5 sm:px-5 flex flex-col gap-2"
      id="about"
    >
      <span className="font-title text-2xl sm:text-5xl text-tertiary">
        &lt;About&gt;
      </span>
      <div className="w-full flex flex-col sm:px-5 py-2 gap-2">
        <h1 className="font-paragraph text-base sm:text-lg text-tertiary tracking-wide">
          Hello, I'm
          <strong className="uppercase font-title tracking-wider text-textPrimary">
            Arun Katoch
          </strong>
          , a passionate and versatile
          <strong className="uppercase font-title tracking-wider text-textPrimary">
            Full-Stack Developer
          </strong>
          with a knack for building intuitive, high-performance web
          applications. My expertise spans the entire web development stack,
          from crafting seamless front-end interfaces with React to architecting
          robust back-end solutions using Node.js, Express, and MongoDB. My
          journey into the world of coding began with a curiosity to understand
          how technology shapes our daily lives. Over time, I honed my skills by
          working on projects that combine clean design, efficient code, and a
          user-first approach.
        </h1>
      </div>
      <div className="flex gap-3 sm:pl-6">
        <span className="font-title text-lg sm:text-xl text-tertiary">
          &lt;h2&gt;
        </span>
        <h2 className="uppercase text-base sm:text-xl text-secondaryText">
          What I Bring to the Table
        </h2>
        <span className="font-title text-lg sm:text-xl text-tertiary">
          &lt;h2 /&gt;
        </span>
      </div>

      <ul className="flex flex-col justify-center gap-2">
        <li className="sm:pl-14">
          <strong className="text-base sm:text-lg font-title text-tertiary uppercase">
            Front-End Proficiency:
          </strong>
          <span className="text-base sm:text-lg font-paragraph text-tertiary inline-block pl-2">
            Developing responsive, dynamic user interfaces using React, tailwind
            and more.
          </span>
        </li>
        <li className="sm:pl-14">
          <strong className="text-base sm:text-lg font-title text-tertiary uppercase">
            Back-End Expertise:
          </strong>
          <span className="text-base sm:text-lg font-paragraph text-tertiary inline-block pl-2">
            Designing scalable and secure server-side applications with Node.js
            and Express.
          </span>
        </li>
        <li className="sm:pl-14">
          <strong className="text-base sm:text-lg font-title text-tertiary uppercase">
            Database Management:
          </strong>
          <span className="text-base sm:text-lg font-paragraph text-tertiary inline-block pl-2">
            Efficient data storage and retrieval with MongoDB.
          </span>
        </li>
        <li className="sm:pl-14">
          <strong className="text-base sm:text-lg font-title text-tertiary uppercase">
            Problem-Solving:
          </strong>
          <span className="text-base sm:text-lg font-paragraph text-tertiary inline-block pl-2">
            Tackling complex challenges with a structured and creative approach.
          </span>
        </li>
      </ul>
      <section className="flex flex-col pl-2 sm:pl-7">
        <span className="font-title text-lg sm:text-xl text-tertiary inline-block pl-3">
          &lt;summary&gt;
        </span>
        <p className="font-paragraph text-base smtext-lg text-tertiary tracking-wide pl-4 sm:pl-10 leading-2">
          Whether it’s a sleek single-page application or a full-fledged web
          platform, I thrive on turning ideas into functional, visually
          appealing realities. If you’re looking for a developer who is
          committed to delivering quality and innovation, I’d love to connect!
        </p>
        <span className="font-title text-lg sm:text-xl text-tertiary">
          &lt;/summary&gt;
        </span>
      </section>
      <span className="font-title text-lg sm:text-3xl text-tertiary">
        &lt;About /&gt;
      </span>
    </section>
  );
};

export default About;
