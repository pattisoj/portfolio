import { useState, useEffect } from "react";

export default function CursorTracker() {
  const [dateTime, setDateTime] = useState('"DATE" - "TIME"');
  const [cursorTrackerDisplay, setCursorTrackerDisplay] = useState("0/0");

  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
  }, []);

  function refreshTime() {
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    setDateTime(formattedString);
  }
  setInterval(refreshTime, 1000);

  function mousemove(event) {
    const cursorLocation = `${event.pageX} / ${event.pageY}`;
    setCursorTrackerDisplay(cursorLocation);
  }

  return (
    <div className="font-Graduate absolute text-right self-end sm:mt-[32rem] md:mt-[22rem] opacity-0 lg:opacity-50 text-sm mr-10 z-10">
      <a href="mailto:joshpattison23@icloud.com">
        <p className="hover:underline">joshpattison23@icloud.com</p>
      </a>
      <p>{dateTime}</p>
      <p>{cursorTrackerDisplay}</p>
    </div>
  );
}
