describe("A visitor can click on a project card to check the project", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=projects-nav]").click();
    cy.get("[data-cy=project-card-1]").click();
  });

  it("is expected to navigate to project url", () => {
    cy.url().should("contain", "https://recipe-hub-ca.netlify.app/");
  });

  describe("can click on GitHub button to navigate to the project repository", () => {
    before(() => {
      cy.visit("/");
      cy.get("[data-cy=projects-nav]").click();
      cy.get("[data-cy=project-card-1]").within(() => {
        cy.get("[data-cy=project-github-btn]").click();
      });
    });

    it("is expected to navigate to GitHub url", () => {
      cy.url().should(
        "contain",
        "https://github.com/giacoletti/recipe_hub_client"
      );
    });
  });
});
