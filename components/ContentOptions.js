export default function ContentOptions({
  displayedOption,
  setDisplayedOption,
}) {
  function handleClick(option) {
    setDisplayedOption(option);
  }

  return <div className="projects-options"></div>;
}
