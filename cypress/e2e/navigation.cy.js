describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    cy.url().should("include", "/about");

    cy.get(".about-title").should("have.text", "ABOUT");
  });

  it("should navigate to the projects page", () => {
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="projects"]').click();

    cy.url().should("include", "/projects");

    cy.get("h1").should(
      "have.text",
      "The Projects Page is a work in progress..."
    );
  });

  it("should navigate to the contact page", () => {
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="contact"]').click();

    cy.url().should("include", "/contact");

    cy.get("h1").should(
      "have.text",
      "The Contact Page is a work in progress..."
    );
  });
});
