import Head from "next/head";
import Image from "next/image";
import SpiritedAway from "../images/spirited-away-home.png";
import CursorTracker from "../components/CursorTracker";
import NavBar from "../components/NavBar";
import PageNumber from "../components/PageNumber";
import LogoBar from "../components/LogoBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Pattison</title>
      </Head>
      <div className="home-page-container">
        <NavBar activePage={"home"} />
        <PageNumber pageNumber={1} id={"hidden"} />
        <LogoBar id={"home-logo-bar"} />
        <CursorTracker />
        <div className="home-content-container">
          <p>hello, my name is</p>
          <h2 className="home-title">Josh Pattison</h2>
          <div className="home-contents-container">
            <div className="home-information-container">
              <p>
                I enjoy creating beautiful webpages and coding things to solve
                problems.
              </p>
              <p className="home-p">
                I achieved a BSc in Psychology and recently graduated from the
                School of Code 16 week bootcamp. <br /> I pride myself in
                developing well tested and high quality software. <br /> I am
                always looking to learn new things so I am currently learning
                Python!
              </p>
              <br />
              <p>Welcome to my website.</p>
              <br />
            </div>
            <div className="home-button-container">
              <br />
              <a
                href="https://www.linkedin.com/in/josh-pattison/"
                target="_blank"
                rel="noreferrer"
                className="linkedin-button"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/pattisoj"
                target="_blank"
                rel="noreferrer"
                className="github-button"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="home-image-wrapper">
          <Image
            alt="spirited away"
            src={SpiritedAway}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
}
