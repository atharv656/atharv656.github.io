import React from "react";
import "./style/style.css"
import Pfp from "./assets/pfp.jpeg"

export default function Banner() {
  return (
    <banner>
      <div className="Banner">
        <div className="Container">
          <img src={Pfp} className = "Pfp"/>

          <div className="IntroContainer">
            <div className="First">
              <span>Hi, I'm</span><span id="second">
              Atharv Agashe<br></br>
              a Storyteller<br></br>
              a Programmer<br></br>
              a Designer<br></br>
              </span>
            </div>
          </div>

          <div id="BriefAbout">
            <p>Hi there and welcome to my website! My name is <a href="aboutMe.html">Atharv Agashe</a>
              and I'm a student at Dartmouth College, Class of 2025. I'm a <a>storyteller</a> — I love
              listening to and telling stories through many mediums, most recently by <a>designing</a>
              websites. I also have a passion for building robots, and I am self taught in multiple
              <a>programming</a> languages.
              <br></br>
              <br></br>
              Check out some of my projects, including the featured <a href="portfolio.html">Arbitrage bot</a> which spots
              cross exchange arbitrage opportunities and reports them via discord bot. This bot has
              a 327% ROI to date!
            </p>
          </div>
        </div>
      </div>
    </banner>
  );
};
