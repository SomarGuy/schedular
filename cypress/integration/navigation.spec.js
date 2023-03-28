describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday and check for the day-list__item--selected class", () => {
    cy.contains("li", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
