import Page from './_page'

export default class ShopPage extends Page {
  constructor() {
    super({ path: '/shop/' })

    this.h1Title = '#main h1.tg-page-header__title'

    this.listH2ProductTitles =
      'ul.products li.product h2.woocommerce-loop-product__title'
    this.listBdiProductPrices = 'ul.products li.product span.price ins bdi'
    this.listButtonsAddToCart = 'ul.products li.product a.add_to_cart_button'
    this.listButtonsAddedToCart = 'ul.products li.product a.added_to_cart'
  }

  validatePage() {
    cy.get(this.h1Title).should('have.text', 'Shop')
  }

  saveProductData() {
    cy.get(this.listH2ProductTitles)
      .first()
      .invoke('text')
      .then(text => {
        cy.wrap(text).as('ProductName')
      })
    cy.get(this.listBdiProductPrices)
      .first()
      .invoke('text')
      .then(text => {
        cy.wrap(text).as('ProductPrice')
      })
  }

  addToCart() {
    cy.get(this.listButtonsAddToCart).first().click()
  }

  goToCart() {
    cy.get(this.listButtonsAddedToCart).first().should('be.visible').click()
  }
}
