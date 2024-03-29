import Link from "next/link";

export default function Navbar({ activePage }) {
  return (
    <nav className="bg-transparent">
      <div className="flex justify-end ml-auto mt-10 mr-auto sm:mr-10">
        <a
          href="/josh-pattison-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          resume
        </a>
        {activePage === "home" ? (
          <p
            className={`font-Graduate m-2 opacity-70 text-red-600 underline underline-offset-2`}
          >
            01 · home.
          </p>
        ) : (
          <Link href="/">
            <a>
              <p className="font-Graduate m-2 opacity-50 relative group">
                <span className="group-hover:text-white">01 · home.</span>
                <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
              </p>
            </a>
          </Link>
        )}
        {activePage === "about" ? (
          <p
            className={`font-Graduate m-2 opacity-70 text-red-600 underline underline-offset-2`}
          >
            02 · about.
          </p>
        ) : (
          <Link href="/about">
            <a>
              <p className="font-Graduate m-2 opacity-50 relative group">
                <span className="group-hover:text-white">02 · about.</span>
                <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
              </p>
            </a>
          </Link>
        )}
        {activePage === "projects" ? (
          <p
            className={`font-Graduate m-2 opacity-70 text-red-600 underline underline-offset-2`}
          >
            03 · projects.
          </p>
        ) : (
          <Link href="/projects">
            <a>
              <p className="font-Graduate m-2 opacity-50 relative group">
                <span className="group-hover:text-white">03 · projects.</span>
                <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
              </p>
            </a>
          </Link>
        )}
        {activePage === "contact" ? (
          <p
            className={`font-Graduate m-2 opacity-70 text-red-600 underline underline-offset-2`}
          >
            04 · contact.
          </p>
        ) : (
          <Link href="/contact">
            <a>
              <p className="font-Graduate m-2 opacity-50 relative group">
                <span className="group-hover:text-white">04 · contact.</span>
                <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
              </p>
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
}
