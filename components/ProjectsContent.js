import data from "../data/projectsData.json";

export default function ProjectsContent({ displayedOption }) {
  return (
    <div className="projects-info-display">
      {displayedOption === 1 ? (
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

      {data.map((content, index) => (
        <>
          {displayedOption == index + 2 ? (
            <div className="projects-info-content-container">
              <fieldset className="projects-info-content">
                <legend>{content.legend}</legend>
                <div className="projects-buttons">
                  {content.buttons
                    ? content.buttons.map((button, index) => (
                        <>
                          <a
                            href={button.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {button.title}
                          </a>
                          <br />
                          {index + 1 === content.buttons.length ? null : (
                            <p>-</p>
                          )}
                        </>
                      ))
                    : null}
                </div>
                <br />
                {content.title ? (
                  <>
                    <p>{content.title}</p>
                    <br />
                  </>
                ) : null}
                {content.hook ? (
                  <>
                    <mark>{content.hook}</mark>
                    <br />
                    <br />
                  </>
                ) : null}
                {content.content.map((section, index) => (
                  <>
                    {section.title ? <ins>{section.title}</ins> : null}
                    {section.mark ? (
                      <>
                        <br /> <mark>{section.mark}</mark>{" "}
                      </>
                    ) : null}
                    {section.content ? <p>{section.content}</p> : null}
                    {section.subcontent ? (
                      <>
                        <br /> <p>{section.subcontent}</p>
                      </>
                    ) : null}
                    {index + 1 === content.content.length ? null : <br />}
                  </>
                ))}
              </fieldset>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}
