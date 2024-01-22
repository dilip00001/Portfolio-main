import React from "react";

import about from "../assets/971.jpg";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img
                src={about}
                alt="programming"
                className="img-side__main-img"
              />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Full-Stack Developer <br />
                based in Chennai, India 📍
              </h4>
              <p>
                I'm Dilip Kumar, Recent college graduate (Class of 2023) with a
                strong academic background , eager to launch a career in web
                development. Proficient in Next JS, React JS , Node JS, Mongo DB
                , TailWind CSS with a passion for creating dynamic and visually
                appealing websites. A quick learner and highly motivated
                individual who is excited to apply knowledge to real-world
                projects and grow as a web developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
