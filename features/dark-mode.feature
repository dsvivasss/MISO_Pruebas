Feature: Dark mode

@user1 @web
Scenario: Pass from bright to dark mode
  Given I navigate to page "<URL>"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds


