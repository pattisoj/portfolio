describe("Contact Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact");
  });

  it("should display correct text content", () => {
    cy.get(".contact-title").should("have.text", "Where to find me");

    cy.get(".contact-links-container > :nth-child(1)").should(
      "have.text",
      "You can email me here - joshpattison23@icloud.com"
    );

    cy.get(".contact-links-container > :nth-child(2)").should(
      "have.text",
      "GitHub followers are the most valuable - github.com/pattisoj"
    );

    cy.get(".contact-links-container > :nth-child(3)").should(
      "have.text",
      "Oh, we should definitely connect - linkedin.com/in/josh-pattison"
    );

    cy.get(".contact-links-container > :nth-child(4)").should(
      "have.text",
      "Keep up with my day-to-day on Twitter - twitter.com/_pattisoj"
    );

    cy.get(".contact-links-container > :nth-child(5)").should(
      "have.text",
      "I enjoy films and write reviews here - letterboxd.com/_joshpattison/"
    );
  });

  it("should display correct image", () => {
    cy.get(
      '.contact-ponyo-container > [style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative"] > img'
    ).should("be.visible");
  });

  it("should have correct hyper links", () => {
    cy.get(".contact-links-container > :nth-child(1) > a").should(
      "have.attr",
      "href",
      "mailto:joshpattison23@icloud.com"
    );

    cy.get(".contact-links-container > :nth-child(2) > a").should(
      "have.attr",
      "href",
      "https://github.com/pattisoj"
    );

    cy.get(".contact-links-container > :nth-child(3) > a").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/in/josh-pattison/"
    );

    cy.get(".contact-links-container > :nth-child(4) > a").should(
      "have.attr",
      "href",
      "https://twitter.com/_pattisoj"
    );

    cy.get(".contact-links-container > :nth-child(5) > a").should(
      "have.attr",
      "href",
      "https://letterboxd.com/_joshpattison/"
    );
  });
});
