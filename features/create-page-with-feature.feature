Feature: Create featured page

@user1 @web
Scenario: Create a page successfully with feature
  Given I navigate to page "<URL>"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the page button
  And I wait for 2 seconds
  And I click on new page
  And I write "Nueva pagina con feature" in the page title
  And I click on page settings
  And I click on feature this page
  And I click on page settings
  And I click on publish page dropdown
  And I click on publish page button
  And I wait for 2 seconds
  And I click on go back to pages button
  And I wait for 2 seconds
  And I filter featured pages
  And I sort by newest pages
  Then I see that the new page is named as "Nueva pagina con feature"

