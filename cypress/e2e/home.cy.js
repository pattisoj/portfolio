describe("Home Page", () => {
  it("should display correct text content", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#greeting").should("have.text", "hello, my name is");

    cy.get("#titleName").should("have.text", "Josh Pattison");

    cy.get("#introLineOne").should(
      "have.text",
      "I enjoy coding things that solve problems"
    );

    cy.get("#introLineTwo").should(
      "have.text",
      "I love developing and producing high quality software."
    );

    cy.get("#introLineThree").should(
      "have.text",
      "I am always looking to learn new things and I am currently studying software development at the School of Code"
    );

    cy.get("#websiteWelcome").should("have.text", "welcome to my website.");
  });

  it("should display both call to action buttons", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#linkedInCallToAction").should("have.text", "linkedin");

    cy.get("#gitHubCallToAction").should("have.text", "github");
  });

  it("both call to action buttons have correct href", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#linkedInATag").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/in/josh-pattison/"
    );

    cy.get("#gitHubATag").should(
      "have.attr",
      "href",
      "https://github.com/pattisoj"
    );
  });
});
