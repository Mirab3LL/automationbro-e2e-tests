import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

import MyAccountPage from '../../pages/myAccount'

Given('its on my account page', () => {
  const myAccountPage = new MyAccountPage()
  myAccountPage.goto()

  myAccountPage.validatePage()
})

When('fill in login fields', () => {
  const myAccountPage = new MyAccountPage()
  myAccountPage.login()
})

Then('user is logged in', () => {
  const myAccountPage = new MyAccountPage()
  myAccountPage.validateLogin()
})
