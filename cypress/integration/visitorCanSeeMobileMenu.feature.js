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

  describe("can click on the mobile menu icon and on 'About Me'", () => {
    before(() => {
      cy.get("[data-cy=mobile-menu-icon]").click();
      cy.get("[data-cy=about-menu-item]").click();
    });

    it("is expected to scroll down to the 'About Me' section", () => {
      cy.window()
        .its("scrollY")
        .should("equal", cy.$$("[data-cy=about-header]").offset().top - 100);
    });

    after(() => {
      cy.get(".MuiBackdrop-root").click(); // close mobile menu by clicking invisible overlay
    });
  });

  describe("can click on the mobile menu icon and on 'Projects'", () => {
    before(() => {
      cy.get("[data-cy=mobile-menu-icon]").click();
      cy.get("[data-cy=projects-menu-item]").click();
    });

    it("is expected to scroll down to the 'Projects' section", () => {
      cy.window()
        .its("scrollY")
        .should(
          "equal",
          Math.trunc(cy.$$("[data-cy=projects-header]").offset().top - 100)
        );
    });

    after(() => {
      cy.get(".MuiBackdrop-root").click();
    });
  });

  describe("can click on the mobile menu icon and on 'Contact'", () => {
    before(() => {
      cy.get("[data-cy=mobile-menu-icon]").click();
      cy.get("[data-cy=contact-menu-item]").click();
    });

    it("is expected to scroll down to the 'Contact' section", () => {
      cy.get("[data-cy=contact-header]").should("be.inViewport");
    });

    after(() => {
      cy.get(".MuiBackdrop-root").click();
    });
  });
});
