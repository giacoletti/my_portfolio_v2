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

  describe("can click on 'Projects' button to scroll down its relative section", () => {
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

  describe("can click on 'Contact' button to scroll down its relative section", () => {
    before(() => {
      cy.get("[data-cy=contact-nav]").click();
    });

    it("is expected to scroll down to the 'Contact' section", () => {
      cy.get("[data-cy=contact-header]").should("be.inViewport");
    });
  });

  describe("can click on LinkedIn icon button to navigate to LinkedIn profile", () => {
    before(() => {
      cy.get("[data-cy=linkedin-nav]").click();
    });

    it("is expected to navigate to Giovanni's LinkedIn profile", () => {
      cy.url().should(
        "contain",
        "https://www.linkedin.com/in/giovanni-iacoletti/"
      );
    });
  });

  describe("can click on GitHub icon button to navigate to GitHub profile", () => {
    before(() => {
      cy.visit("/");
      cy.get("[data-cy=github-nav]").click();
    });

    it("is expected to navigate to Giovanni's GitHub profile", () => {
      cy.url().should("contain", "https://github.com/giacoletti");
    });
  });
});
