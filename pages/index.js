import Navbar from "../components/NavBar";
import PageNumber from "../components/PageNumber";

export default function Home() {
  return (
    <div className="flex flex-col w-screen  h-screen bg-cover bg-right sm:bg-center bg-[url('../images/home-bg.jpg')]">
      <Navbar activePage={"home"} />
      <PageNumber pageNumber={1} />
      <div className="ml-4 md:ml-44 mt-12 self-top">
        <p className="font-Abril text-base sm:text-lg tracking-wide mb-2">
          hello, my name is
        </p>
        <h1 className="font-Abril text-4xl sm:text-6xl tracking-wide mb-2">
          Josh Pattison
        </h1>
        <p className="font-Abril text-1xl sm:text-3xl tracking-wide mb-4">
          I enjoy coding things that solve problems
        </p>
        <p className="font-Abril text-xs sm:text-sm tracking-wide">
          I love developing and producing high quality software.
        </p>
        <p className="font-Abril text-xs sm:text-sm tracking-wide mb-6">
          I am always looking to learn new things and I am currently studying
          software development at the School of Code
        </p>
        <p className="font-Abril text-sm sm:text-lg tracking-wide mb-4">
          welcome to my website.
        </p>
        <span>
          <a
            href="https://www.linkedin.com/in/josh-pattison/"
            target="_blank"
            rel="noreferrer"
            className="font-Abril text-lg sm:text-lg tracking-wide text-red-600 "
          >
            view my LinkedIn |
          </a>
          <a
            href="https://github.com/pattisoj"
            target="_blank"
            rel="noreferrer"
            className="font-Abril text-lg sm:text-lg tracking-wide text-red-600 "
          >
            | view my GitHub
          </a>
        </span>
      </div>
    </div>
  );
}
