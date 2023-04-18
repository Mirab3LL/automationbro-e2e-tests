import ShopPage from '../pages/shop'
import CartPage from '../pages/cart'
import CheckoutPage from '../pages/checkout'

describe('automationbro shop', () => {
  it('sould be able to add product to cart', () => {
    // acessa o site
    const shopPage = new ShopPage()
    shopPage.goto()

    shopPage.validatePage()

    // salvar dados do produto
    shopPage.saveProductData()

    // adiciona o primeiro produto ao carrinho
    shopPage.addToCart()

    // clica para acessar o carrinho
    shopPage.goToCart()

    // valida que está na página do carrinho
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

    // valida pagina do checkout
    const checkoutPage = new CheckoutPage()
    checkoutPage.load()
    checkoutPage.validatePage()

    // realiza cadastro

    checkoutPage.register()

    // valida cadastro cocluído

    checkoutPage.loadInclude()

    // valida pedido confirmado
    checkoutPage.validateOrderCompleted()
  })
})
