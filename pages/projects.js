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
    // console.log(`Clicked on project number ${option}`);
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
        <PageNumber pageNumber={3} id={"hidden"} />
        <h1 className="projects-title">PROJECTS</h1>
        <fieldset className="projects-info">
          <legend>Josh Pattison Projects</legend>
          <div className="projects-options"></div>
          <div className="projects-info-display"></div>
          <div className="projects-icons">
            <Image alt="phoenix icon" src={Phoenix} height={100} width={100} />
            <Image alt="robots icon" src={Robots} height={100} width={100} />
            <Image alt="hand icon" src={Hand} height={100} width={100} />
          </div>
        </fieldset>
        <div className="about-footer">
          <blockquote className="about-blockquote">
            {`After completing the School of Code I continued my learning on
            freeCodeCamp, I completed the
            "Scientific Computing with Python" certification.  I am working on some personal projects and continuing my learning - focusing on cloud computing. To keep up to date with the progress of these projects and to see anything else I am working on head over to my github.`}
            <cite className="about-cite">
              <a href="https://github.com/pattisoj">GitHub</a>
            </cite>
          </blockquote>
        </div>
      </div>
    </>
  );
}
