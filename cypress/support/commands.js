Cypress.Commands.add("createBoard", () => {
  cy.get("input")
    .type("New board{enter}")
    .get("ul > li")
    .should("contain", "New board");
});

Cypress.Commands.add("deleteBoard", () => {
  cy.get("ul > li svg")
    .click()
    .get(".empty-list")
    .should("be.visible");
});

Cypress.Commands.add("createColumn", () => {
  cy.get("input")
    .type("New column{enter}")
    .get(".board-column")
    .should("contain", "New column");
});

Cypress.Commands.add("deleteColumn", () => {
  cy.get(".board-column .column-options svg")
    .click()
    .get(".empty-list")
    .should("be.visible");
});
