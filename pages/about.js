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
            {displayedOption === "options" ? <p>options</p> : null}
            {displayedOption === "profile" ? <p>profile</p> : null}
            {displayedOption === "biography" ? <p>biography</p> : null}
            {displayedOption === "technologies" ? <p>technologies</p> : null}
          </div>
        </fieldset>
      </div>
    </>
  );
}
