import Page from './_page'

export default class MyAccountPage extends Page {
  constructor() {
    super({ path: '/my-account/' })

    this.h1Title = 'h1.tg-page-header__title'

    this.inputUsername = '#username'
    this.inputPassword = '#password'
    this.buttonLogin = '.login button'
    this.pWelcomeUser = 'p strong'
  }

  validatePage() {
    cy.get(this.h1Title).should('be.visible').should('have.text', 'My account')
  }

  login() {
    const username = 'mirab3llCypress'
    const password = 'Teste@1234'
    cy.get(this.inputUsername).type(username)
    cy.get(this.inputPassword).type(password)

    cy.get(this.buttonLogin).click()
  }

  validateLogin() {
    cy.get(this.pWelcomeUser).first().should('have.text', 'mirab3llCypress')
  }
}
