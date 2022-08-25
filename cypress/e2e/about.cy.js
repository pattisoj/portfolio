describe("About Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("should display correct text content on load", () => {
    cy.get(".about-title").should("have.text", "ABOUT");

    cy.get(".about-info > :nth-child(1)").should(
      "have.text",
      "Josh Pattison Information"
    );

    cy.get(".about-option-button.active").should("have.text", "Welcome.");

    cy.get(".welcome-h2").should("have.text", "Welcome to my about page.");

    cy.get(".welcome-p").should(
      "have.text",
      `Select a tab in the options bar to view its contents.`
    );

    cy.get(".about-blockquote").should("be.visible");
  });

  it("should show correct content on button click", () => {
    cy.get(".about-options > :nth-child(2)").click();
    cy.get(".about-info-content > legend").should("have.text", "PROFILE");

    cy.get(".about-options > :nth-child(3)").click();
    cy.get(".about-info-content > legend").should("have.text", "BIOGRAPHY");

    cy.get(".about-options > :nth-child(4)").click();
    cy.get(".about-info-content > legend").should("have.text", "TECHNOLOGIES");

    cy.get(".about-options > :nth-child(5)").click();
    cy.get(".about-info-content > legend").should("have.text", "EXPERIENCE");
  });
});
