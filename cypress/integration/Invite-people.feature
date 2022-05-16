Feature: Tags features

  I want to invite a colaborator succesfully

  @focus @clear
  Scenario: Invite a colaborator successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to the staff page
    And I click on invite people button
    When I invite people with email "mateoolaya1@gmail.com"
    And I click on send invitation now button
    Then I see that the last active user in the invited users list has email "mateoolaya1@gmail.com"

  @focus @clear
  Scenario: Revoke invitation successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to the staff page
    And I click on revoke button
    Then I see that the prompt notification list has email "mateoolaya1@gmail.com"
  