import Head from "next/head";
import CursorTracker from "../components/CursorTracker";
import LogoBar from "../components/LogoBar";
import NavBar from "../components/NavBar";
import PageNumber from "../components/PageNumber";

export default function About() {
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
      </div>
    </>
  );
}
