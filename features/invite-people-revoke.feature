Feature: Revoke colaborator

@user1 @web
Scenario: Revoke colaborator successfully
  Given I navigate to page "<URL>"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  And I click on the settings page
  And I wait for 2 seconds
  And I click to the staff page
  And I wait for 2 seconds
  And I click on the revoke button 
  Then I see that the last prompt has value "Invitation revoked"