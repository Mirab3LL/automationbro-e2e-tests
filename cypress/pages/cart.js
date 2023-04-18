import Page from './_page'

export default class CartPage extends Page {
  constructor() {
    super({ path: '/cart/' })

    this.h1Title = '#main h1.tg-page-header__title'
    this.h1Title = '#main h1.tg-page-header__title'

    this.classCartItem = 'table.shop_table tr.cart_item'

    this.elementProductName = '[data-title="Product"] a'

    this.elementProductPrice = '[data-title="Price"] span bdi'

    this.inputQuantity = '[data-title="Quantity"] input.qty'

    this.buttonCheckout = 'a.checkout-button'
  }

  validatePage() {
    cy.get(this.h1Title).should('have.text', 'Cart')
  }

  validateItemCart() {
    cy.get(this.classCartItem).first().should('be.visible')
    cy.get(this.classCartItem).first().scrollIntoView()
  }

  validateProductName() {
    cy.get('@ProductName').then(productName => {
      cy.get(this.classCartItem)
        .first()
        .get(this.elementProductName)
        .should('have.text', productName)
    })
  }

  validateProductPrice() {
    cy.get('@ProductPrice').then(productPrice => {
      cy.get(this.classCartItem)
        .first()
        .get(this.elementProductPrice)
        .should('have.text', productPrice)
    })
  }

  alterQuantityProduct() {
    cy.get(this.classCartItem).first()
    cy.get(this.inputQuantity).should('have.value', '1')
  }

  goToCheckout() {
    cy.get(this.buttonCheckout).should('be.visible').click()
  }
}
