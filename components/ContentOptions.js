export default function ContentOptions({
  displayedOption,
  setDisplayedOption,
}) {
  function handleClick(option) {
    setDisplayedOption(option);
  }

  return (
    <div className="projects-options">
      <button
        className={`about-option-button ${
          "1" === displayedOption ? "active" : ""
        }`}
        onClick={() => handleClick("1")}
      >
        Welcome.
      </button>
    </div>
  );
}
