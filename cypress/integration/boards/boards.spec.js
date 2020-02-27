/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Boards", () => {
  before(() => {
    cy.visit("/");
  });

  describe("Board operations", () => {
    it("Should create a board on submit", () => {
      cy.createBoard();
    });
    it("Should navigate to a board on click", () => {
      cy.get("ul > li")
        .click()
        .get("#columns-container")
        .should("be.visible");
    });
    it("Should navigate back to landing page", () => {
      cy.get("header img")
        .click()
        .get("#boards-container")
        .should("be.visible");
    });
    it("Should delete a board on click", () => {
      cy.deleteBoard();
    });
  });
});
