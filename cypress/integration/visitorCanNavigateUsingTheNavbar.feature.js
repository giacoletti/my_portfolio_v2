describe("A visitor can use the navbar to navigate to the different sections", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=about-nav]").click();
  });

  it("is expected to scroll down to the 'About Me' section", () => {
    cy.window()
      .its("scrollY")
      .should("equal", cy.$$("[data-cy=about-header]").offset().top);
  });

  describe("can click on 'Projects' button to scroll down to the relative section", () => {
    before(() => {
      cy.get("[data-cy=projects-nav]").click();
    });

    it("is expected to scroll down to the 'Projects' section", () => {
      cy.window()
        .its("scrollY")
        .should(
          "equal",
          Math.trunc(cy.$$("[data-cy=projects-header]").offset().top)
        );
    });
  });
});
