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
              Npm package.
            </button>
            <button
              className={`about-option-button ${
                "3" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("3")}
            >
              Travel application.
            </button>
            <button
              className={`about-option-button ${
                "4" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("4")}
            >
              Revision application.
            </button>
            <button
              className={`about-option-button ${
                "5" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("5")}
            >
              Scientific Computing Certification
            </button>
            <button
              className={`about-option-button ${
                "6" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("6")}
            >
              ...
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
                  <legend>JPSTRING</legend>
                  <div className="projects-buttons">
                    <a
                      href="https://github.com/pattisoj/jpString"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Project repository.
                    </a>
                    <br />
                    <p>-</p>
                    <br />
                    <a
                      href="https://www.npmjs.com/package/jp-string"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on npm.
                    </a>
                    <br />
                    <p>-</p>
                    <br />
                    <p className="languages">JavaScript. Jest.</p>
                  </div>
                  <br />
                  <p>An NPM string manipulation package.</p>
                  <br />
                  <mark>
                    This is an open source project that anyone can contribute
                    to.
                  </mark>
                  <br />
                  <br />
                  <p>
                    <ins>
                      I created this NPM package as a learning opportunity.
                    </ins>
                    <br />I wanted to experience and learn about the creation of
                    a public package.
                    <br /> I also wanted to{" "}
                    <mark>learn about CI/CD pipelines</mark> and this project
                    was my first experience of it. I was able to create a GitHub
                    workflow that runs all tests on a push or pull request and
                    if they pass is able to automatically publish to npm if the
                    version is updated! This facilitated the addition of a CI/CD
                    pipeline to my final project where I additionally
                    experimented with running ESLint on a pull request!
                  </p>
                  <br />
                  <p>
                    I chose a string manipulation package as I felt it gave me
                    the most opportunities to keep adding functionality. I wrote
                    all of the methods and tests in the library and all of the
                    documentation. <br />
                    <mark>This library is fully tested (100% coverage).</mark>
                  </p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "3" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>FINDERS KEEPERS TRAVEL APPLICATION</legend>
                  <div className="projects-buttons">
                    <a
                      href="https://github.com/pattisoj/final-project-travel-app-team-jenga"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Project repository.
                    </a>
                    <br />
                    <p>-</p>
                    <br />
                    <a
                      href="https://finders-keepers-soc.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site.
                    </a>
                    <br />
                    <p>-</p>
                    <br />
                    <p className="languages">
                      HTML. CSS. JavaScript. AWS. Jest. Cypress. Auth0.
                    </p>
                  </div>
                  <br />
                  <p>
                    A Travel app for any user.
                    <mark>Created as a team of 5 in 4 weeks.</mark> (Week 13 -
                    16 of our 16 week bootcamp.)
                  </p>
                  <br />
                  <mark>The Brief</mark>
                  <p>
                    The brief for this project was <ins>brief</ins> (no pun
                    intended!). We had to simply identify and solve a problem
                    using technology.
                  </p>
                  <br />
                  <mark>The Problems & Our Solution</mark>
                  <p>
                    So what problems did we find? The problem this app aimed to
                    solve can be split into two sections:{" "}
                  </p>
                  <br />
                  <ins>Too much information</ins>
                  <p>
                    During our consumer research, before app creation, we found
                    that consumers were overwhelmed by all of the information
                    out there when they were trying to book a holiday. They had
                    way too many tabs open and felt they had to hold a lot of
                    information between webpages to inform their decision We set
                    out to solve this by creating an app that could store all
                    the information you would need in one place. This is the
                    first purpose of FINDERS KEEPERS.
                  </p>
                  <br />
                  <ins> Profit influenced information</ins>
                  <p>
                    Whilst doing our research to source the best information for
                    our new application we discovered a second problem; profit
                    influenced the information websites provided. We found that
                    websites seemed to avoid tougher topics like crime or
                    possible negatives to travel in order to sell you their
                    travel guides for example.
                  </p>
                  <br />
                  <p>
                    {`
                    This gave us a unique opportunity. We didn't need to make
                    profit. We decided to take this as a bonus and focus on showing the
                    truthful information - unedited and unbiased. To achieve
                    this we didn't cherry pick our information and decided to
                    display it to users as is. Giving our users full confidence
                    in our information.`}
                  </p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "4" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>SOC REVISION APPLICATION</legend>
                  <div className="projects-buttons">
                    <a
                      href="https://github.com/pattisoj/soc-revision-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Project repository.
                    </a>
                    <br />
                    <p>-</p>
                    <br />
                    <a
                      href="https://team16.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site.
                    </a>
                    <br />
                    <p>-</p>
                    <br />
                    <p className="languages">
                      HTML. CSS. JavaScript. SQL. Jest. Cypress.
                    </p>
                  </div>
                  <br />
                  <p>
                    A Revision app for the School of Code.{" "}
                    <mark>Created as a team of 4 in one week</mark> (5 days).
                  </p>
                  <br />
                  <p>
                    This project was completed for week 9 of our 16 week
                    bootcamp. I personally only had{" "}
                    <ins>8 weeks of coding experience</ins> going into this
                    project!
                  </p>
                  <br />
                  <p>
                    <mark>The Brief</mark>
                  </p>
                  <p>
                    {` We had to use what we had learnt on
                    the course up until that point to try and improve the lives
                    of our fellow bootcampers. We had to consider our user's
                    experiences and their problems. Specifically, we wanted to
                    enhance the remote experience of a bootcamper, or find
                    something that could help them with the vast amount of
                    learning they're undertaking.`}
                  </p>
                  <br />
                  <p>
                    <mark>The Problem & Our Solution</mark>{" "}
                  </p>
                  <p>
                    {`After sending out a
                    survey to our fellow bootcampers we found what they wanted
                    most was more time. As we couldn't code more hours into the
                    day we decided to try and facilitate the best use of their
                    time outside of bootcamp hours by creating a revision app.`}
                  </p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "5" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>SCIENTIFIC COMPUTING CERTIFICATION</legend>
                  <p>
                    The following <ins>5 Projects</ins> were created to achieve
                    the Scientific Computing with Python certification from
                    freeCodeCamp.
                  </p>
                  <br />
                  <div className="projects-buttons">
                    <a href="" target="_blank" rel="noreferrer">
                      Project 1 Repository.
                    </a>
                    <br />
                    <p>-</p>
                    <br />
                    <p className="languages">Python.</p>
                  </div>
                  <br />
                  <ins> Arithmetic Formatter </ins>
                  <br />
                  <br />
                  <mark>The Brief</mark>
                  <p>
                    Create a function that receives a list of strings that are
                    arithmetic problems and returns the problems arranged
                    vertically and side-by-side. The function should optionally
                    take a second argument. When the second argument is set to
                    True, the answers should be displayed.
                  </p>
                  <br />
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "6" ? (
              <div className="projects-info-content-container">
                <fieldset className="projects-info-content">
                  <legend>COMING SOON</legend>
                  <p>This space is empty for now...</p>
                  <p>
                    I am looking forward to sharing what I have been working on.
                  </p>
                  <br />
                  <p>
                    For a sneak peak of my work <mark> right now</mark> be sure
                    to head over to my{" "}
                    <a
                      href="https://github.com/pattisoj"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ins> GitHub.</ins>
                    </a>
                  </p>
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
            {`After completing the School of Code I have continued my learning on
            freeCodeCamp. I am currently working to my first certification
            "Scientific Computing with Python".  I am also working on some projects with other bootcampers. To keep up to date with the progress of these projects head over to my github.`}
            <cite className="about-cite">
              <a href="https://github.com/pattisoj">GitHub</a>
            </cite>
          </blockquote>
        </div>
      </div>
    </>
  );
}
