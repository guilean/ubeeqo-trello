/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Columns", () => {
  before(() => {
    cy.visit("/");
  });

  describe("Columns operations", () => {
    it("Should create a column on submit", () => {
      cy.createBoard()
        .click()
        .createColumn();
    });

    it("Should delete a column on click", () => {
      cy.deleteColumn();
    });
  });
});
