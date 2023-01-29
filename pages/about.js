import Head from "next/head";
import Image from "next/image";
import Profile from "../images/about/profile/profile-picture.png";
import Flower from "../images/about/icons/nier-automata-1.jpeg";
import Eye from "../images/about/icons/nier-automata-2.jpeg";
import Horizon from "../images/about/icons/nier-automata-3.png";
import { useState } from "react";
import LogoBar from "../components/LogoBar";
import NavBar from "../components/NavBar";
import PageNumber from "../components/PageNumber";

export default function About() {
  const [displayedOption, setDisplayedOption] = useState("welcome");

  function handleClick(option) {
    console.log(`Clicked on the ${option} button`);
    setDisplayedOption(option);
  }

  return (
    <>
      <Head>
        <title>Josh Pattison</title>
      </Head>
      <div className="about-page-container">
        <NavBar activePage={"about"} />
        <LogoBar id={"about-logo-bar"} />
        <PageNumber pageNumber={2} id={"hidden"} />
        <h1 className="about-title">ABOUT</h1>
        <fieldset className="about-info">
          <legend>Josh Pattison Information</legend>
          <div className="about-options">
            <button
              className={`about-option-button ${
                "welcome" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("welcome")}
            >
              Welcome.
            </button>
            <button
              className={`about-option-button ${
                "profile" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("profile")}
            >
              Profile.
            </button>
            <button
              className={`about-option-button ${
                "biography" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("biography")}
            >
              Biography.
            </button>
            <button
              className={`about-option-button ${
                "technologies" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("technologies")}
            >
              Technologies.
            </button>
            <button
              className={`about-option-button ${
                "experience" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("experience")}
            >
              Experience.
            </button>
          </div>
          <div className="about-info-display">
            {displayedOption === "welcome" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>WELCOME</legend>
                  <h2 className="welcome-h2">Welcome to my about page.</h2>
                  <p className="welcome-p">
                    Select a tab in the options bar to view its contents.
                  </p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "profile" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>PROFILE</legend>
                  <div className="profile-content-container">
                    <div className="image-wrapper">
                      <Image
                        alt="profile head-shot"
                        src={Profile}
                        height={210}
                        width={210}
                      />
                    </div>
                    <div className="profile-information-container">
                      <p>
                        <label htmlFor="text">Name</label>
                        <input
                          className="profile-input"
                          type="text"
                          placeholder="Josh Pattison."
                          disabled
                        />
                      </p>
                      <p>
                        <label htmlFor="text">Age</label>
                        <input
                          className="profile-input"
                          type="text"
                          placeholder="Twenty Two Years."
                          disabled
                        />
                      </p>
                      <p>
                        <label htmlFor="text">Hobbies</label>
                        <input
                          className="profile-input"
                          type="text"
                          placeholder="Football. Formula 1. Anime."
                          disabled
                        />
                      </p>
                    </div>
                  </div>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "biography" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>BIOGRAPHY</legend>
                  <p>
                    Before moving into code I earned a{" "}
                    <ins>BSc in Psychology!</ins>
                  </p>
                  <br />
                  <p>
                    I started my coding journey by joining the{" "}
                    <ins>
                      <a href="https://www.schoolofcode.co.uk/">
                        School of Code
                      </a>
                    </ins>{" "}
                    a 16-week intensive bootcamp focused on{" "}
                    <mark>full-stack development</mark> that mimics a work based
                    environment.
                  </p>
                  <br />
                  <p>
                    I enjoy creating <ins>clean and testable code</ins> to solve
                    problems. I have a passion for both front and back end and
                    would love to continue exploring both in my career!
                  </p>
                  <br />
                  <p>
                    This has helped me secure my first role in tech! If you want
                    to reach out{" "}
                    <mark>
                      contact me on my{" "}
                      <a href="https://joshpattison.com/contact">
                        contact page.
                      </a>
                    </mark>
                  </p>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "technologies" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>TECHNOLOGIES</legend>
                  <div className="technologies-container">
                    <dl>
                      <dt>Languages</dt>
                      <dd>HTML5.</dd>
                      <dd>CSS.</dd>
                      <dd>JavaScript.</dd>
                      <dd>Python.</dd>
                      <dd>SQL.</dd>
                    </dl>
                    <dl>
                      <dt>Libraries</dt>
                      <dd>Node.js.</dd>
                      <dd>React.</dd>
                      <dd>Express.js.</dd>
                      <dd>TailwindCSS.</dd>
                      <dd>Next.js.</dd>
                    </dl>
                    <dl>
                      <dt>Hosting</dt>
                      <dd>Heroku.</dd>
                      <dd>Netlify.</dd>
                      <dd>AWS.</dd>
                      <dd>Vercel.</dd>
                      <dd>Azure.</dd>
                    </dl>
                    <dl>
                      <dt>Testing</dt>
                      <dd>Jest.</dd>
                      <dd>PyTest.</dd>
                      <dd>Cypress.</dd>
                      <dd>Postman.</dd>
                    </dl>
                    <dl>
                      <dt>Databases</dt>
                      <dd>PostgreSQL.</dd>
                      <dd>DynamoDB.</dd>
                      <dd>MongoDB.</dd>
                    </dl>
                  </div>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "experience" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>EXPERIENCE</legend>
                  <mark>
                    Full Stack Development, The School of Code - Remote. April
                    2022 - August 2022.
                  </mark>
                  <br />
                  <p>
                    Focused on learning and using{" "}
                    <ins>full stack technologies</ins> to solve real world
                    problems in programming teams. - Worked in{" "}
                    <ins>13 diverse teams over 16 weeks</ins>. Mainly pair
                    programming but I also worked in a 4-person team for a
                    weeklong project and a 5-person team for a four-week
                    project.
                  </p>
                  <br />
                  <p>
                    <mark>Four-week project.</mark> - Used agile methodologies
                    in a team of five to create a full-stack travel application
                    whereby users could find unbiased information on countries
                    in the world to better inform their destination decisions.{" "}
                    <ins>
                      <a href="https://joshpattison.com/projects">
                        See the projects page for more.
                      </a>
                    </ins>
                  </p>
                </fieldset>
              </div>
            ) : null}
          </div>
          <div className="about-icons">
            <Image alt="flower-icon" src={Flower} height={100} width={100} />
            <Image alt="eye-icon" src={Eye} height={100} width={100} />
            <Image alt="horizon-icon" src={Horizon} height={100} width={100} />
          </div>
        </fieldset>
        <div className="about-footer">
          <blockquote className="about-blockquote">
            This page and the projects page were inspired by the menu screens in
            Nier: Automata (ニーア オートマタ). Nier: Automata is an action
            role-playing video game developed by PlatinumGames and published by
            Square Enix for PlayStation 4 and Microsoft Windows. The game is set
            in the midst of a proxy war between machines created by otherworldly
            invaders and the remnants of humanity, the story follows the battles
            of a combat android and her companion.
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
