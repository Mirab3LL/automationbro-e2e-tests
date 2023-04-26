Feature: Login
    Scenario: access the account
        Given its on my account page
        When fill in login fields
        Then user is logged in
