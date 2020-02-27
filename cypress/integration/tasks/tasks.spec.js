/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Tasks", () => {
  before(() => {
    cy.visit("/");
  });

  describe("Tasks operations", () => {
    it("Should create a task on submit", () => {
      cy.createBoard()
        .click()
        .createColumn()
        .click()
        .get(".board-column input")
        .type("New task{enter}")
        .get(".task")
        .should("contain", "New task");
    });

    it("Should delete a task on click", () => {
      cy.get(".task svg")
        .click()
        .get(".task ")
        .should("not.exist");
    });
  });
});
