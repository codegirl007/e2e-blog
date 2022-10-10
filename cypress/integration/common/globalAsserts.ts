import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(`I am logged out`, () => {
  cy.clearLocalStorage()
  cy.clearCookies()
  cy.window().then((win) => {
    win.sessionStorage.clear()
  })
})
