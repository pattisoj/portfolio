import Email from "../images/logo/email.svg";
import GitHub from "../images/logo/github.svg";
import LinkedIn from "../images/logo/linkedin.svg";
import Twitter from "../images/logo/twitter.svg";
import Hashnode from "../images/logo/hashnode.svg";

export default function LogoBar() {
  return (
    <div className="absolute self-end p-2 mr-8 invisible sm:visible sm:mt-44 border-red-600 transition ease-in-out duration-500 delay-300 hover:border-r-2">
      <div className="transition duration-300 hover:scale-150 hover:-translate-x-1.5">
        <a
          href="mailto:joshpattison23@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email className="w-5 h-5 mb-3" />
        </a>
      </div>
      <div className="transition duration-300 hover:scale-150 hover:-translate-x-1.5">
        <a href="https://github.com/pattisoj" target="_blank" rel="noreferrer">
          <GitHub className="w-5 h-5 mb-3" />
        </a>
      </div>
      <div className="transition duration-300 hover:scale-150 hover:-translate-x-1.5">
        <a
          href="https://www.linkedin.com/in/josh-pattison/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="w-5 h-5 mb-3" />
        </a>
      </div>
      <div className="transition duration-300 hover:scale-150 hover:-translate-x-1.5">
        <a
          href="https://twitter.com/_pattisoj"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="w-5 h-5 mb-3" />
        </a>
      </div>
      <div className="transition duration-300 hover:scale-150 hover:-translate-x-1.5">
        <a href="" target="_blank" rel="noreferrer">
          <Hashnode className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
