import React from "react";
import CountUp from "react-countup";
import { aboutMe } from "../constants";

const HeroCounter = () => {
  return (
    <div className="hero-counter-wrap">
      <div className="counter-item counter-text-wrap">
        <span className="count-text plus">
          <CountUp start={0} end={aboutMe.yearsOfExperience} duration={2} />
        </span>
        <span className="counter-title">Years Of Experience</span>
      </div>
      <div className="counter-item counter-text-wrap">
        <span className="count-text plus">
          <CountUp start={0} end={aboutMe.totalCompletedProject} duration={2} />
        </span>
        <span className="counter-title">Project Complete</span>
      </div>
      <div className="counter-item counter-text-wrap">
        <span className="count-text percent">
          <CountUp start={0} end={aboutMe.clientSatisfactions} duration={2} />
        </span>
        <span className="counter-title">Client Satisfactions</span>
      </div>
    </div>
  );
};

export default HeroCounter;
