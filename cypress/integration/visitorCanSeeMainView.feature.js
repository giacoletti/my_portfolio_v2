describe("A visitor visiting the portfolio", () => {
  before(() => {
    cy.visit("/");
  });

  describe("can see a navbar", () => {
    it("is expected to see navbar element", () => {
      cy.get("[data-cy=navbar]").should("be.visible");
    });

    it("is expected to contain 'Giovanni Iacoletti' header", () => {
      cy.get("[data-cy=header-nav]").should(
        "contain.text",
        "Giovanni Iacoletti"
      );
    });

    it("is expected to contain 'About Me' button", () => {
      cy.get("[data-cy=about-nav]").should("contain.text", "About Me");
    });

    it("is expected to contain 'Projects' button", () => {
      cy.get("[data-cy=projects-nav]").should("contain.text", "Projects");
    });

    it("is expected to contain 'Contact' button", () => {
      cy.get("[data-cy=contact-nav]").should("contain.text", "Contact");
    });

    it("is expected to contain 'LinkedIn' icon button", () => {
      cy.get("[data-cy=linkedin-nav]").should("be.visible");
    });

    it("is expected to contain 'GitHub' icon button", () => {
      cy.get("[data-cy=github-nav]").should("be.visible");
    });
  });

  describe("can see parallax component", () => {
    it("is expected to see background image", () => {
      cy.get("[data-cy=background-image]").should("be.visible");
    });

    it("is expected to see Welcome header", () => {
      cy.get("[data-cy=welcome-header]").should(
        "contain.text",
        "Welcome to my portfolio"
      );
    });
  });

  describe("can see main container", () => {
    it("is expected to see About Me header", () => {
      cy.get("[data-cy=about-header]").should("contain.text", "About Me");
    });

    it("is expected to see About Me description", () => {
      cy.get("[data-cy=about-description]").should(
        "contain.text",
        "Example text"
      );
    });

    it("is expected to see Projects header", () => {
      cy.get("[data-cy=projects-header]").should("contain.text", "Projects");
    });

    it("is expected to see Contact header", () => {
      cy.get("[data-cy=contact-header]").should("contain.text", "Contact");
    });
  });
});
