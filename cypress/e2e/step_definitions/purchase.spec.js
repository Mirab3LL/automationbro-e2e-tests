import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

import ShopPage from '../../pages/shop'
import CartPage from '../../pages/cart'
import CheckoutPage from '../../pages/checkout'

Given('its on shop page', () => {
  const shopPage = new ShopPage()
  shopPage.goto()

  shopPage.validatePage()

  // salvar dados do produto
  shopPage.saveProductData()

  // adiciona o primeiro produto ao carrinho
  shopPage.addToCart()

  // clica para acessar o carrinho
  shopPage.goToCart()
})

When('adds the first item to cart', () => {
  const cartPage = new CartPage()
  cartPage.load()
  cartPage.validatePage()

  // valida que o produto está no carrinho
  cartPage.validateItemCart()

  // valida nome do produto
  cartPage.validateProductName()

  // valida preço do produto
  cartPage.validateProductPrice()

  // valida quantidade do produto
  cartPage.alterQuantityProduct()

  // ir para checkout
  cartPage.goToCheckout()
})

When('validate the item on cart', () => {
  const checkoutPage = new CheckoutPage()
  checkoutPage.load()
  checkoutPage.validatePage()
})

When('checkout with sucess', () => {
  const checkoutPage = new CheckoutPage()
  // realiza cadastro

  checkoutPage.register()

  // valida cadastro cocluído

  checkoutPage.loadInclude()
})

Then('the order should be completed', () => {
  const checkoutPage = new CheckoutPage()
  // valida pedido confirmado
  checkoutPage.validateOrderCompleted()
})
