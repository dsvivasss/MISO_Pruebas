Feature: Settings features

  I want to modify the site settings

  @focus
  Scenario: Change site title with non characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I clear title field
    And I save settings
    Then I see the settings saved message

  @focus
  Scenario: Change site title with more than 150 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I clear title field
    And I type a title with "151" characters
    And I focus in description field
    Then I should see a title message error

  @focus
  Scenario: Change site title with less than 150 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I clear title field
    And I type a title with "100" characters
    And I focus in description field
    Then I should not see a title message error

  @focus
  Scenario: Change site title with 150 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I clear title field
    And I type a title with "150" characters
    And I focus in description field
    Then I should not see a title message error

  @focus
  Scenario: Change site description with non characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I clear description field
    And I save settings
    Then I see the settings saved message

  @focus
  Scenario: Change site description with more than 200 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I clear description field
    And I type a description with "201" characters
    And I focus in title field
    Then I should see a description message error

  @focus
  Scenario: Change site description with less than 200 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I clear title field
    And I type a description with "150" characters
    And I focus in title field
    Then I should not see a description message error

  @focus
  Scenario: Change site description with 200 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I clear title field
    And I type a description with "200" characters
    And I focus in title field
    Then I should not see a description message error

  @focus
  Scenario: Change site language with non characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I expand language
    And I clear language field
    And I focus in description field
    Then I should see a language message error

  @focus
  Scenario: Change site language with more than 10000 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I expand language 
    And I clear language field
    And I type a language with "10001" characters
    And I focus in description field
    Then I should see a language message error

  @focus
  Scenario: Change site language with less than 10000 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I expand language
    And I clear language field
    And I type a language with "10000" characters
    And I focus in description field
    Then I should not see a language message error

  @focus
  Scenario: Change site language with 10000 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand title and description
    And I expand language
    And I clear language field
    And I type a language with "5000" characters
    And I focus in description field
    Then I should not see a language message error
  