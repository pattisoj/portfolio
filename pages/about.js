import Head from "next/head";
import Image from "next/image";
import Flower from "../images/about/icons/nier-automata-1.jpeg";
import Eye from "../images/about/icons/nier-automata-2.jpeg";
import Horizon from "../images/about/icons/nier-automata-3.png";
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
            <button
              className={`about-option-button ${
                "options" === displayedOption ? "active" : ""
              }`}
              onClick={() => handleClick("options")}
            >
              Options.
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
          <div className="about-icons">
            <Image alt="flower-icon" src={Flower} height={100} width={100} />
            <Image alt="eye-icon" src={Eye} height={100} width={100} />
            <Image alt="horizon-icon" src={Horizon} height={100} width={100} />
          </div>
        </fieldset>
        <div className="about-footer">
          <blockquote className="about-blockquote">
            This page was inspired by the menu screens in Nier: Automata (ニーア
            オートマタ). Nier: Automata is an action role-playing video game
            developed by PlatinumGames and published by Square Enix for
            PlayStation 4 and Microsoft Windows. The game is set in the midst of
            a proxy war between machines created by otherworldly invaders and
            the remnants of humanity, the story follows the battles of a combat
            android and her companion.
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
