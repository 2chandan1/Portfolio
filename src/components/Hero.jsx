import React from "react";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <>
      <div className="custom-gradient hero bg-base-200 h-screen flex justify-center items-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="fade-up-left">
            <img
              src="photo.jpg.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div data-aos="fade-down-right" className="max-w-lg">
            <div className="badge badge-soft badge-accent my-4">
              <div aria-label="success" className="status status-success"></div>
              AVAILABLE FOR WORK
            </div>
            <p className="text-amber-50 uppercase">Hello There, Welcome to my site</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              I'm Chandan Tiwari{" "} <br />{" "}
              <span className="text-success mt-4 pt-4 text-4xl md:text-4xl">
                <TypeAnimation
                  sequence={[
      
                    "A Full Stack Developer",
                    2000,
                    "A React Expert",
                    2000,
                    "A Next.Js Developer",
                    2000,
                    "A Vue.Js Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="py-3">
              I'm a Full-Stack Web Developer with 3+ years of experience in
              React, Next, Vue, Laravel, MySQL, MongoDB.
              <br /> I build fast, responsive, and user-friendly websites.
            </p>

            <a href="/Resume.pdf" download>
              <button className="btn btn-outline btn-info text-amber-50 rounded-2xl"><i class="fa-solid fa-arrow-down"></i> Download My Resume !</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
