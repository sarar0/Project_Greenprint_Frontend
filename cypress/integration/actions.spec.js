/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('.type() - type into a DOM element', () => {
    cy.get('input[name="from"')
      .type('London').should('have.value', 'London')

    cy.get('input[name="to"')
      .type('Paris').should('have.value', 'Paris')  
  })

  it('.submit() - submit ground transport form', () => {
    cy.get('#ground')
      .find('input[name="from"]').type('Cardiff')
    cy.get('#ground')  
      .find('input[name="to"]').type('London')
    cy.get('#ground').submit()
  })

  it('.submit() - submit flights form', () => {
    cy.get('#flights')
      .find('input[name="flying_from"]').type('Rome')
    cy.get('#flights')  
      .find('input[name="flying_to"]').type('London')
    cy.get('#ground').submit()
  })

  it('.submit() - returns flights results including carbon', () => {
    cy.get('#flights')
      .find('input[name="flying_from"]').type('FCO')
    cy.get('#flights')  
      .find('input[name="flying_to"]').type('LHR')
    cy.get('#flights').submit()
    cy.get('#flightList').should('contain', 'Carbon:')
  })

  it('.submit() - returns ground travel results including carbon', () => {
    cy.get('#ground')
    .find('input[name="from"]').type('Cardiff')
    cy.get('#ground')  
    .find('input[name="to"]').type('London')
    cy.get('#ground').submit()
    cy.get('#list').should('contain', 'Carbon:')
  })
})
