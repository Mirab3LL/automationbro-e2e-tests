Feature: Purchase
    Scenario: Purchase first item
        Given its on shop page
        When adds the first item to cart
        And validate the item on cart
        And checkout with sucess
        Then the order should be completed