import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import {
  setEmail,
  clickLogin,
  setPassword,
  selectPages,
  createPage,
  writeTitle,
  clickOutsideTextbox,
  goBackToPages,
  filterDraftPages,
  sortDropdown,
  getFirstPost,
  publishDropdown,
  publishButton,
  filterPublishedPages,
  viewSite,
  pageSettings,
  tagDropdown,
  getFirstTag,
  clickOnFirstPublishedPage,
  updatePageDropdown,
  filterUpdatedPages,
  selectFeature,
  filterFeaturedPages,
  setPageTitle,
  clickNewPage,
  publishPostScheduled,
  backToPages,
  clickPages,
  filterByStatusScheduled,
  firstPageInList,
} from "../common/PageObjectIndex";

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
});

Given("I login into the admin page", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(Cypress.env("admin_password"));
  clickLogin();
  cy.wait(2000);
});

When("I go to the pages list", () => {
  selectPages();
  cy.wait(2000);
});

When("I create a new page", () => {
  createPage();
});

When("I write {string} in the page title", (title) => {
  writeTitle(title);
  cy.wait(100);
});

When("I click outside textbox", () => {
  clickOutsideTextbox();
  cy.wait(1000);
});

When("I click on go back to pages button", () => {
  goBackToPages();
  cy.wait(2000);
});

When("I filter draft pages", () => {
  filterDraftPages();
  cy.wait(1000);
});

When("I filter published pages", () => {
  filterPublishedPages();
  cy.wait(1000);
});

When("I sort by newest pages", () => {
  sortDropdown();
  cy.wait(1000);
});

Then("I see that the new page is named as {string}", function (title) {
  // Get first post
  const firstPost = getFirstPost();
  firstPost.should("contain.text", title);
});

When("I click on publish page dropdown", function () {
  publishDropdown();
});

When("I click on publish page button", function () {
  publishButton();
  cy.wait(2000);
});

Then("I see the page", function () {
  viewSite();
});

When("I click on page settings", function () {
  pageSettings();
});

When("I click on tag dropdown", function () {
  tagDropdown();
  cy.wait(1000);
});

let tagName = "";
When("I click on first tag", function () {
  const tag = getFirstTag();
  tag.click();
  tag.invoke("text").then((sometext) => (tagName = sometext.trim()));
  cy.wait(1000);
});

Then("I see that the new page has the tag", function () {
  // Get first post
  const firstPost = getFirstPost();
  // check if text is in the post
  firstPost.should("contain.text", "News");
});

When("I click on the first published page", function () {
  clickOnFirstPublishedPage();
  cy.wait(1000);
});

When("I click on update page dropdown", function () {
  updatePageDropdown();
  cy.wait(1000);
});

When("I sort by recently updated pages", function () {
  filterUpdatedPages();
  cy.wait(1000);
});

When("I click on feature this page", function () {
  selectFeature();
  cy.wait(1000);
});

When("I filter featured pages", function () {
  filterFeaturedPages();
});

When("I create a new page with title {string}", (title) => {
  setPageTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
});

Given("I go to the new page page", () => {
  clickPages();
  cy.wait(2000);
  clickNewPage();
});

When("I schedule the new page", (title) => {
  publishPostScheduled();
  cy.wait(2000);
});

When("I return to the pages list", () => {
  backToPages();
  cy.wait(2000);
});

When("I filter pages by status Scheduled", () => {
  filterByStatusScheduled();
  cy.wait(1000);
});

Then(
  "I see that the first page in the list has title {string} and status {string}",
  (title, status) => {
    const post = firstPageInList();
    post.should("contain.text", title);
    post.should("contain.text", status);
  }
);
