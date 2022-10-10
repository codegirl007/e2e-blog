import { Then, When, Given, And } from 'cypress-cucumber-preprocessor/steps'

Given('I open the application', () => {
  cy.visit('/')
})

When('I click on Login NavItem on Navbar', () => {
  cy.get('#login').click()
})

Then('I can see the Login page', () => {
  cy.url().should('contain', 'https://codegirl-blog.netlify.app/login')
})

When(
  'I input username {string} and password {string}',
  (username: string, password: string) => {
    cy.get('#email').clear().type(username)
    cy.get('#password').clear().type(password)
  }
)

And('I submit the login form', () => {
  cy.get('form').submit()
})

And('I am logged in and on page My Articles', () => {
  cy.url().should('contain', 'https://codegirl-blog.netlify.app/myArticles')
})
