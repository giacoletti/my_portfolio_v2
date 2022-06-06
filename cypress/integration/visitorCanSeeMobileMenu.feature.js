describe("A visitor visiting the portfolio on mobile", () => {
  before(() => {
    cy.viewport("samsung-s10");
    cy.visit("/");
  });
  
  it("is expected to see mobile menu icon in the navbar", () => {
    cy.get("[data-cy=mobile-menu-icon]").should("be.visible");
  });
});
