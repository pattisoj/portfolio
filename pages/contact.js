import Head from "next/head";
import NavBar from "../components/NavBar.js";
import CursorTracker from "../components/CursorTracker.js";
import PageNumber from "../components/PageNumber";
import LogoBar from "../components/LogoBar.js";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Josh Pattison</title>
      </Head>
      <div className="contact-page-container">
        <NavBar activePage={"contact"} />
        <PageNumber pageNumber={4} />
        <LogoBar />
        <CursorTracker />
      </div>
    </>
  );
}
