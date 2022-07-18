import Email from "../images/logo/email.svg";
import GitHub from "../images/logo/github.svg";
import LinkedIn from "../images/logo/linkedin.svg";
import Twitter from "../images/logo/twitter.svg";
import Hashnode from "../images/logo/hashnode.svg";

export default function LogoBar() {
  return (
    <div className="absolute self-end mr-10 opacity-0 sm:opacity-50 sm:mt-48">
      <Email className="w-5 h-5 mb-3" />
      <GitHub className="w-5 h-5 mb-3" />
      <LinkedIn className="w-5 h-5 mb-3" />
      <Twitter className="w-5 h-5 mb-3" />
      <Hashnode className="w-5 h-5" />
    </div>
  );
}
