Feature: Invite colaborator

@user1 @web
Scenario: Invite colaborator successfully
  Given I navigate to page "<URL>"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  And I click on the settings page
  And I wait for 2 seconds
  And I click to the staff page
  And I wait for 2 seconds
  And I click on the invite people button
  And I wait for 2 seconds
  When I write "mateoolaya1@gmail.com" in the email
  And I wait for 2 seconds
  And I click on the colaborator button
  And I wait for 2 seconds
  And I click on send invitation now button
  And I wait for 2 seconds
  And I click on the settings page
  And I wait for 2 seconds
  And I click to the staff page 
  Then I see that the last active user in the invited users list has email "mateoolaya1@gmail.com"