import Head from "next/head";
import { useState } from "react";
import CursorTracker from "../components/CursorTracker";
import LogoBar from "../components/LogoBar";
import NavBar from "../components/NavBar";
import PageNumber from "../components/PageNumber";

export default function About() {
  const [displayedOption, setDisplayedOption] = useState("options");

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
        <CursorTracker />
        <LogoBar />
        <PageNumber pageNumber={2} />
        <h1 className="about-title">ABOUT</h1>
        <fieldset className="about-info">
          <legend>Josh Pattison Information</legend>
          <div className="about-options">
            <button onClick={() => handleClick("options")}>OPTIONS</button>
            <button onClick={() => handleClick("profile")}>PROFILE</button>
            <button onClick={() => handleClick("biography")}>BIOGRAPHY</button>
            <button onClick={() => handleClick("technologies")}>
              TECHNOLOGIES
            </button>
          </div>
          <div className="about-info-display">
            {displayedOption === "options" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>OPTIONS</legend>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "profile" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>PROFILE</legend>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "biography" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>BIOGRAPHY</legend>
                </fieldset>
              </div>
            ) : null}
            {displayedOption === "technologies" ? (
              <div className="about-info-content-container">
                <fieldset className="about-info-content">
                  <legend>TECHNOLOGIES</legend>
                </fieldset>
              </div>
            ) : null}
          </div>
        </fieldset>
        <div className="about-footer">
          <blockquote className="about-blockquote">
            This page was inspired by the menu screens in Nier: Automata
            (Japanese: ニーア オートマタ). Nier: Automata is an action
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
