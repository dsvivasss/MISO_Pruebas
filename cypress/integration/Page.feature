Feature: Page features

  I want to create/modify page 

  @focus @clear
  Scenario: Create a page successfully and see it live
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the pages list
    When I create a new page
    And I write "Nueva pagina en vivo" in the page title
    And I click outside textbox
    And I click on publish page dropdown
    And I click on publish page button
    Then I see the page

  @focus @clear
  Scenario: Create a scheduled page successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new page page
    When I create a new page with title "Mi nueva page programado"
    And I schedule the new page
    And I return to the pages list
    And I filter pages by status Scheduled
    Then I see that the first page in the list has title "Mi nueva page programado" and status "Scheduled"

  @focus @clear
  Scenario: Create a featured page successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the pages list
    When I create a new page
    And I write "Nueva pagina con feature" in the page title
    And I click outside textbox
    And I click on page settings
    And I click on feature this page
    And I click on page settings
    And I click on publish page dropdown
    And I click on publish page button
    And I click on go back to pages button
    And I filter featured pages
    Then I see that the new page is named as "Nueva pagina con feature"

  @focus @clear
  Scenario: Create a draft page successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the pages list
    When I create a new page
    And I write "Nueva pagina como borrador" in the page title
    And I click outside textbox
    And I click on go back to pages button
    And I filter draft pages
    And I sort by newest pages
    Then I see that the new page is named as "Nueva pagina como borrador"

  @focus @clear
  Scenario: Create a page successfully and see it listed
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the pages list
    When I create a new page
    And I write "Nueva pagina" in the page title
    And I click outside textbox
    And I click on publish page dropdown
    And I click on publish page button
    And I click on go back to pages button
    And I filter published pages
    Then I see that the new page is named as "Nueva pagina"

  

  @focus @clear
  Scenario: Edit a page title and see the changes
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the pages list
    And I filter published pages
    And I click on the first published page
    When I write " titulo modificado" in the page title
    And I click on update page dropdown
    And I click on publish page button
    And I click on go back to pages button
    And I filter published pages
    And I sort by recently updated pages
    Then I see that the new page is named as " titulo modificado"

    