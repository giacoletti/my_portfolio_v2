describe("A user visiting the portfolio", () => {
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
});
