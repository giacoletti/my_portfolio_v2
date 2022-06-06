describe("A visitor visiting the portfolio on mobile", () => {
  before(() => {
    Cypress.config({
      viewportWidth: 375,
      viewportHeight: 812
    });
    cy.viewport(375, 812);
    cy.visit("/");
  });

  it("is expected to see mobile menu icon in the navbar", () => {
    cy.get("[data-cy=mobile-menu-icon]").should("be.visible");
  });

  it("is expected to not see 'About Me' button", () => {
    cy.get("[data-cy=about-nav]").should("not.exist");
  });

  it("is expected to not see 'Projects' button", () => {
    cy.get("[data-cy=projects-nav]").should("not.exist");
  });

  it("is expected to not see 'Contact' button", () => {
    cy.get("[data-cy=contact-nav]").should("not.exist");
  });

  it("is expected to not see 'LinkedIn' icon button", () => {
    cy.get("[data-cy=linkedin-nav]").should("not.exist");
  });

  it("is expected to not see 'GitHub' icon button", () => {
    cy.get("[data-cy=github-nav]").should("not.exist");
  });
});
