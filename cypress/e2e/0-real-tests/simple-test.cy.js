/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('simple tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000')
  })

  it('Has the correct title', () => {
    cy.get('h1').should('have.text', 'Project C')
  })
  it('has all the input-fields empty', () => {
    cy.get('input').should('have.not.have.value')
    cy.get('#TotalIncome').should('have.text', 'Total inkomst: 0')

  })
  it('can handle simple calc of total income', () => {
    cy.get('#HourlyWage').type('100')
    cy.get('#HourlyWage').should('have.value', '100')
    cy.get('#Hours').type('200')
    cy.get('#Hours').should('have.value', '200')
    cy.get('#TotalIncome').should('have.text', 'Total inkomst: 20000')
  })
})
