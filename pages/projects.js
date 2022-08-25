import Head from "next/head";
import Image from "next/image.js";
import Robots from "../images/projects/icons/nier-automata-4.png";
import Phoenix from "../images/projects/icons/nier-automata-5.png";
import Hand from "../images/projects/icons/nier-automata-6.jpeg";
import { useState } from "react";
import NavBar from "../components/NavBar.js";
import PageNumber from "../components/PageNumber";
import LogoBar from "../components/LogoBar.js";

export default function Projects() {
  const [displayedOption, setDisplayedOption] = useState("1");

  function handleClick(option) {
    console.log(`Clicked on project number ${option}`);
    setDisplayedOption(option);
  }

  return (
    <>
      <Head>
        <title>Josh Pattison</title>
      </Head>
      <div className="projects-page-container">
        <NavBar activePage={"projects"} />
        <LogoBar id={"projects-logo-bar"} />
        <PageNumber pageNumber={3} />
        <h1 className="projects-title">PROJECTS</h1>
        <fieldset className="projects-info">
          <legend>Josh Pattison Projects</legend>
          <div className="projects-options">
            <button
              className={`about-option-button ${
                "1" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("1")}
            >
              Welcome.
            </button>
            <button
              className={`about-option-button ${
                "2" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("2")}
            >
              2.
            </button>
            <button
              className={`about-option-button ${
                "3" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("3")}
            >
              3.
            </button>
            <button
              className={`about-option-button ${
                "4" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("4")}
            >
              4.
            </button>
            <button
              className={`about-option-button ${
                "5" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("5")}
            >
              5.
            </button>
          </div>
          <div className="projects-info-display">
            {displayedOption === "1" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>WELCOME</legend>
                  <h2 className="welcome-h2">Welcome to my projects page.</h2>
                  <p className="welcome-p">
                    Select a tab in the options bar to view its contents.
                  </p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "2" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>PROJECT NAME</legend>
                  <p>placeholder text 2</p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "3" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>PROJECT NAME</legend>
                  <p>placeholder text 3</p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "4" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>PROJECT NAME</legend>
                  <p>placeholder text 4</p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "5" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>PROJECT NAME</legend>
                  <p>placeholder text 5</p>
                </fieldset>
              </div>
            ) : null}
          </div>
          <div className="projects-icons">
            <Image alt="phoenix icon" src={Phoenix} height={100} width={100} />
            <Image alt="robots icon" src={Robots} height={100} width={100} />
            <Image alt="hand icon" src={Hand} height={100} width={100} />
          </div>
        </fieldset>
        <div className="about-footer">
          <blockquote className="about-blockquote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper ut nibh nec sollicitudin. Aliquam erat volutpat. Donec
            laoreet arcu diam, sed scelerisque lectus venenatis et. Nam lacinia
            nisi eget dui hendrerit placerat. Nullam at pellentesque massa,
            elementum porttitor nisl. Donec iaculis risus vel mauris elementum
            ultrices. Duis ac neque lectus. Mauris commodo dolor tristique arcu
            vehicula, non venenatis risus blandit. Aenean at gravida ipsum, non
            gravida enim.
            <cite className="about-cite">
              <a href="https://en.wikipedia.org/wiki/Nier:_Automata">
                Wikipedia
              </a>
            </cite>
          </blockquote>
        </div>
      </div>
    </>
  );
}
