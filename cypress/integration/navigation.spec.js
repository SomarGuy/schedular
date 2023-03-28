const visitRoot = () => {
  cy.visit("/");
};

const navigateToTuesdayAndCheckSelected = () => {
  cy.contains("li", "Tuesday")
    .click()
    .should("have.class", "day-list__item--selected");
};

describe("Navigation", () => {
  it("should visit root", () => {
    visitRoot();
  });

  it("should navigate to Tuesday and check for the day-list__item--selected class", () => {
    navigateToTuesdayAndCheckSelected();
  });
});
