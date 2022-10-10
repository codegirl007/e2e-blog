Feature: Authorization test 
Scenario: Authorization
   
    Given I open the application
    And I am logged out
    When I click on Login NavItem on Navbar
    Then I can see the Login page
    When I input username "codegirl" and password "userPass"
    And I submit the login form
    And I am logged in and on page My Articles