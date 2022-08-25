import Head from "next/head";
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
      <div className="flex flex-col w-screen h-screen bg-cover bg-right sm:bg-center bg-[url('../images/home-bg.jpg')]">
        <NavBar activePage={"home"} />
        <PageNumber pageNumber={1} />
        <LogoBar />
        <CursorTracker />
        <div className="ml-4 lg:ml-44 mt-12 self-top">
          <p
            id="greeting"
            className="font-Roboto text-base md:text-lg tracking-wide mb-2"
          >
            hello, my name is
          </p>
          <h1
            id="titleName"
            className="font-Abril text-4xl md:text-6xl tracking-wide mb-2"
          >
            Josh Pattison
          </h1>
          <p
            id="introLineOne"
            className="font-Abril text-1xl md:text-3xl tracking-wide mb-4"
          >
            I enjoy coding things that solve problems
          </p>
          <p
            id="introLineTwo"
            className="font-Roboto text-xs md:text-sm tracking-wide"
          >
            I love developing and producing high quality software.
          </p>
          <p
            id="introLineThree"
            className="font-Roboto text-xs md:text-sm tracking-wide mb-6"
          >
            I am always looking to learn and I am currently studying software
            development at the School of Code
          </p>
          <p
            id="websiteWelcome"
            className="font-Abril text-sm md:text-lg tracking-wide mb-4"
          >
            welcome to my website.
          </p>
          <span>
            <a
              id="linkedInATag"
              href="https://www.linkedin.com/in/josh-pattison/"
              target="_blank"
              rel="noreferrer"
              className="font-Graduate text-sm md:text-base tracking-wide text-red-600"
            >
              <button
                id="linkedInCallToAction"
                type="button"
                className="text-red-600 border border-gray-800 opacity-80 hover:bg-gray-200 hover:bg-opacity-40 hover:shadow-xl hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg px-2 py-1 mr-2"
              >
                linkedin
              </button>
            </a>
            <a
              id="gitHubATag"
              href="https://github.com/pattisoj"
              target="_blank"
              rel="noreferrer"
              className="font-Graduate text-sm md:text-base tracking-wide text-red-600"
            >
              <button
                id="gitHubCallToAction"
                type="button"
                className="text-red-600 border border-gray-800 opacity-80 hover:bg-gray-200 hover:bg-opacity-40 hover:shadow-xl hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg px-2 py-1 mr-2"
              >
                github
              </button>
            </a>
            <a
              href="/josh-pattison-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-Graduate text-sm sm:text-base tracking-wide opacity-70 hover:opacity-100 self-center mr-2"
            >
              <button
                id="resumeCallToAction"
                type="button"
                className="visible sm:invisible text-red-600 border border-gray-800 opacity-80 hover:bg-gray-200 hover:bg-opacity-40 hover:shadow-xl hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg px-2 py-1"
              >
                resume
              </button>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
