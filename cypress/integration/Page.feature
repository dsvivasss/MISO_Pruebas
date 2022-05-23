Feature: Page features

  I want to create/modify page 

  @focus @clear
  Scenario: Create a page successfully and see it listed
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the pages list
    When I create a new page
    And I write a title with "10" characters
    And I click outside textbox
    And I click on publish page dropdown
    And I click on publish page button
    And I click on go back to pages button
    And I filter published pages
    Then I see that the new page is named as the one just created