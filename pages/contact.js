import Head from "next/head";
import Image from "next/image.js";
import Ponyo from "../images/contact/ponyo.png";
import NavBar from "../components/NavBar.js";
import CursorTracker from "../components/CursorTracker.js";
import PageNumber from "../components/PageNumber";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Josh Pattison</title>
      </Head>
      <div className="contact-page-container">
        <NavBar activePage={"contact"} />
        <CursorTracker id={"contact"} />
        <div className="contact-information-container">
          <h2 className="contact-title">Where to find me</h2>
          <div className="contact-contents-container">
            <div className="contact-links-container">
              <p className="contact-p">
                You can email me here -{" "}
                <a
                  href="mailto:joshpattison23@icloud.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  joshpattison23@icloud.com
                </a>
              </p>
              <p className="contact-p">
                GitHub followers are the most valuable -{" "}
                <a
                  href="https://github.com/pattisoj"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/pattisoj
                </a>
              </p>
              <p className="contact-p">
                Oh, we should definitely connect -{" "}
                <a
                  href="https://www.linkedin.com/in/josh-pattison/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/josh-pattison
                </a>
              </p>
              <p className="contact-p">
                Keep up with my day-to-day on Twitter -{" "}
                <a
                  href="https://twitter.com/_pattisoj"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter.com/_pattisoj
                </a>
              </p>
              <p className="contact-p">
                Once in a while I blog -{" "}
                <a
                  href="https://pattisoj.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  pattisoj.hashnode.dev
                </a>
              </p>
            </div>
            <div className="contact-totoro-container">
              <Image
                alt="Ponyo"
                src={Ponyo}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
