export default function ProjectsContent({
  displayedOption,
  setDisplayedOption,
}) {
  return (
    <div className="projects-info-display">
      {displayedOption === "1" ? (
        <div className="projects-info-content-container">
          <fieldset className="projects-info-content">
            <legend>WELCOME</legend>
            <h2 className="welcome-h2">Welcome to my projects page.</h2>
            <p className="welcome-p">
              Select a tab in the options bar to view its contents.
            </p>
          </fieldset>
        </div>
      ) : null}
    </div>
  );
}
