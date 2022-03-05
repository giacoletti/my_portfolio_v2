describe("A user visiting the portfolio", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see Welcome header", () => {
    cy.get("[data-cy=main-header]").should(
      "contain.text",
      "Welcome to my portfolio"
    );
  });
});
