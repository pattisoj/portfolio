describe("Home Page", () => {
  it("should display correct text content", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".home-content-container > :nth-child(1)").should(
      "have.text",
      "hello, my name is"
    );

    cy.get(".home-title").should("have.text", "Josh Pattison");

    cy.get(".home-information-container > :nth-child(1)").should(
      "have.text",
      "I enjoy creating beautiful webpages and coding things to solve problems."
    );

    cy.get(".home-p").should("be.visible");

    cy.get(".home-information-container > :nth-child(4)").should(
      "have.text",
      "Welcome to my website."
    );
  });

  it("should display both call to action buttons", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".linkedin-button").should("have.text", "LinkedIn");

    cy.get(".github-button").should("have.text", "GitHub");
  });

  it("both call to action buttons have correct href", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".linkedin-button").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/in/josh-pattison/"
    );

    cy.get(".github-button").should(
      "have.attr",
      "href",
      "https://github.com/pattisoj"
    );
  });
});
