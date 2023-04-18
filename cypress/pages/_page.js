export default class Page {
  constructor({ baseUrl, path }) {
    this.baseUrl = baseUrl || Cypress.env('BASE_URL')
    this.path = path || '/'

    this.url = `${this.baseUrl}${this.path}`
  }

  goto() {
    cy.visit(this.url)
  }

  load() {
    cy.url().should('eql', this.url)
  }

  loadInclude() {
    cy.url().should('include', this.url)
  }
}
