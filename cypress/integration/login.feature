Feature: Login features

  I want to login successfully

  @focus @clear
  Scenario: Cannot Login with empty email
    Given I open Ghost admin page
    When I login into the admin page with empty email
    Then I see that an error message appears with text "Please fill out the form to sign in."

  @focus @clear
  Scenario: Cannot Login with empty password
    Given I open Ghost admin page
    When I login into the admin page with empty password
    Then I see that an error message appears with text "Please fill out the form to sign in."

  @focus @clear
  Scenario: Cannot Login with invalid email
    Given I open Ghost admin page
    When I login into the admin page with invalid email
    Then I see that an error message appears with text "Please fill out the form to sign in."

  @focus @clear
  Scenario: Cannot Login with invalid password
    Given I open Ghost admin page
    When I login into the admin page with invalid password
    Then I see that an error message2 appears with text "Your password is incorrect."

  @focus @clear
  Scenario: Cannot Login with email without @
    Given I open Ghost admin page
    When I login into the admin page with email without @
    Then I see that an error message appears with text "Please fill out the form to sign in."

  @focus @clear
  Scenario: Cannot Login with email without '.'
    Given I open Ghost admin page
    When I login into the admin page with email without '.'
    Then I see that an error message appears with text "Please fill out the form to sign in."

  @focus @clear
  Scenario: Login successfull
    Given I open Ghost admin page
    When I login into the admin page
    Then I see the Dashboard page