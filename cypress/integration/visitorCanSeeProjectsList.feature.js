describe("A visitor can see my projects list when scrolls down", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=projects-nav]").click();
  });

  it("is expected to see latest project card element", () => {
    cy.get("[data-cy=project-card-1]").within(() => {
      cy.get("[data-cy=project-image]").should("be.visible");
      cy.get("[data-cy=project-header]").should(
        "contain.text",
        "Rekindle"
      );
      cy.get("[data-cy=project-description]").should(
        "contain.text",
        "Blog platform built with Next.js, React and Firebase. (Work in progress)"
      );
    });
  });

  it("is expected to see second last project card element", () => {
    cy.get("[data-cy=project-card-2]").within(() => {
      cy.get("[data-cy=project-image]").should("be.visible");
      cy.get("[data-cy=project-header]").should(
        "contain.text",
        "Recipe Hub (Client)"
      );
      cy.get("[data-cy=project-description]").should(
        "contain.text",
        "Social web application platform built to share recipes"
      );
    });
  });
});
