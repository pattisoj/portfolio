describe("Projects Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/projects");
  });

  it("should display correct text content on load", () => {
    cy.get(".projects-title").should("have.text", "PROJECTS");

    cy.get(".projects-info > :nth-child(1)").should(
      "have.text",
      "Josh Pattison Projects"
    );

    cy.get(".about-option-button.active").should("have.text", "Welcome.");

    cy.get(".welcome-h2").should("have.text", "Welcome to my projects page.");

    cy.get(".welcome-p").should(
      "have.text",
      `Select a tab in the options bar to view its contents.`
    );
  });

  it("should show correct content on button click", () => {
    cy.get(".projects-options > :nth-child(2)").click();
    cy.get(".projects-info-content > legend").should("have.text", "JPSTRING");

    cy.get(".projects-options > :nth-child(3)").click();
    cy.get(".projects-info-content > legend").should(
      "have.text",
      "FINDERS KEEPERS TRAVEL APPLICATION"
    );

    cy.get(".projects-options > :nth-child(4)").click();
    cy.get(".projects-info-content > legend").should(
      "have.text",
      "SOC REVISION APPLICATION"
    );

    cy.get(".projects-options > :nth-child(5)").click();
    cy.get(".projects-info-content > legend").should(
      "have.text",
      "COMING SOON"
    );
  });
});
