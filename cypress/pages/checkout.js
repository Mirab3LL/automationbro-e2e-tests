import Page from './_page'
import { faker } from '@faker-js/faker'

export default class CheckoutPage extends Page {
  constructor() {
    super({ path: '/checkout/' })

    this.h1Title = '#main h1.tg-page-header__title'

    this.idFirstName = '#billing_first_name'
    this.idLastName = '#billing_last_name'
    this.elementAdress = '[name="billing_address_1"]'
    this.elementCity = '[for="billing_city"]'
    this.elementPostalCode = '[name="billing_postcode"]'
    this.idPhone = '#billing_phone'

    this.idEmail = '#billing_email'
    this.idUsername = '#account_username'
    this.idPassword = '#account_password'

    this.buttonRegister = '.button#place_order'

    this.notice = 'p.woocommerce-notice'
  }

  validatePage() {
    cy.get(this.h1Title).should('be.visible').should('have.text', 'Checkout')
  }

  register() {
    cy.get(this.idFirstName).type('joao')
    cy.get(this.idLastName).type('frango')
    cy.get(this.elementAdress).type('Rua Sao jose dos pinheiros')
    cy.get(this.elementCity).type('Joanesburgo')
    cy.get(this.elementPostalCode).type('M4B 1G5')
    cy.get(this.idPhone).type('99999999')

    const nome = faker.internet.userName()
    const email = faker.internet.email(nome, 'gmail.com')
    const senha = faker.internet.password(20, true, /[A-Z]/)

    cy.get(this.idEmail).type(email)
    cy.get(this.idUsername).type(nome)
    cy.get(this.idPassword).type(senha)

    cy.get(this.buttonRegister).click()
  }

  validateOrderCompleted() {
    cy.get(this.notice)
      .should('be.visible')
      .should('have.text', 'Thank you. Your order has been received.')
  }
}
