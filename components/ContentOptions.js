import data from "../data/projectsData.json";

export default function ContentOptions({
  displayedOption,
  setDisplayedOption,
}) {
  function handleClick(option) {
    console.log(option);
    setDisplayedOption(option);
  }

  return (
    <div className="projects-options">
      <button
        className={`about-option-button ${
          1 === displayedOption ? "active" : ""
        }`}
        onClick={() => handleClick(1)}
      >
        Welcome.
      </button>

      {data.map((option, index) => (
        <button
          key={index}
          className={`about-option-button ${
            index + 2 === displayedOption ? "active" : ""
          }`}
          onClick={() => handleClick(index + 2)}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}
