Feature: Access "Login Page" in Bootstrap documentation
  As I user
  I want to be able to access "Login Page" in https://getbootstrap.com/

  Scenario: Load bootstrap login page
    Given I want to access "Login Page" in bootstrap
    When I provide my user credentials via the login form
    Then I should successfully access "Bootstrap App"