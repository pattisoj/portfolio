import Head from "next/head";
import NavBar from "../components/NavBar.js";
import CursorTracker from "../components/CursorTracker.js";
import PageNumber from "../components/PageNumber";
import LogoBar from "../components/LogoBar.js";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Josh Pattison</title>
      </Head>
      <div className="projects-page-container">
        <NavBar activePage={"projects"} />
        <CursorTracker />
        <LogoBar />
        <PageNumber pageNumber={3} />
      </div>
    </>
  );
}
