import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

// import data apriori
import * as data from '../../data/data.json'
import removeChar from "../../functions/modifyString";
import randomString from "../../functions/randomString";


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

//overwrite screenshots
Cypress.Screenshot.defaults({
  overwrite: true
})

const objPseudoAleatorio = {}

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
  // take screenshot with specific name
  Cypress.env("vrtActive") && cy.screenshot("page1");
});

Given("I login into the admin page", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(Cypress.env("admin_password"));
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("page2");
});

When("I go to the pages list", () => {
  selectPages();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("page3");
});

When("I create a new page", () => {
  createPage();
  Cypress.env("vrtActive") && cy.screenshot("page4");
});

When("I write a title with {string} characters", (titleLength) => {
  objPseudoAleatorio.title = randomString(titleLength);
  writeTitle(objPseudoAleatorio.title);
  cy.wait(100);
  Cypress.env("vrtActive") && cy.screenshot("page5");
});

When("I click outside textbox", () => {
  clickOutsideTextbox();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page6");
});

When("I click on go back to pages button", () => {
  goBackToPages();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("page7");
});

When("I filter draft pages", () => {
  filterDraftPages();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page8");
});

When("I filter published pages", () => {
  filterPublishedPages();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page9");
});

When("I sort by newest pages", () => {
  sortDropdown();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page10");
});

Then("I see that the new page is named as {string}", function (title) {
  // Get first post
  const firstPost = getFirstPost();
  firstPost.should("contain.text", title);
  Cypress.env("vrtActive") && cy.screenshot("page11");
});

Then("I see that the new page is named as the one just created", function () {
  // Get first post
  const firstPost = getFirstPost();
  firstPost.should("contain.text", objPseudoAleatorio.title);
  Cypress.env("vrtActive") && cy.screenshot("page11");
});

When("I click on publish page dropdown", function () {
  publishDropdown();
  Cypress.env("vrtActive") && cy.screenshot("page12");
});

When("I click on publish page button", function () {
  publishButton();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("page13");
});

Then("I see the page", function () {
  viewSite();
  Cypress.env("vrtActive") && cy.screenshot("page14");
});

When("I click on page settings", function () {
  pageSettings();
  Cypress.env("vrtActive") && cy.screenshot("page15");
});

When("I click on tag dropdown", function () {
  tagDropdown();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page16");
});

let tagName = "";
When("I click on first tag", function () {
  const tag = getFirstTag();
  tag.click();
  tag.invoke("text").then((sometext) => (tagName = sometext.trim()));
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page17");
});

Then("I see that the new page has the tag", function () {
  // Get first post
  const firstPost = getFirstPost();
  // check if text is in the post
  firstPost.should("contain.text", "News");
  Cypress.env("vrtActive") && cy.screenshot("page18");
});

When("I click on the first published page", function () {
  clickOnFirstPublishedPage();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page19");
});

When("I click on update page dropdown", function () {
  updatePageDropdown();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page20");
});

When("I sort by recently updated pages", function () {
  filterUpdatedPages();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page21");
});

When("I click on feature this page", function () {
  selectFeature();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page22");
});

When("I filter featured pages", function () {
  filterFeaturedPages();
  cy.screenshot("page23");
});

When("I create a new page with title {string}", (title) => {
  setPageTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("page24");
});

Given("I go to the new page page", () => {
  clickPages();
  cy.wait(2000);
  clickNewPage();
  Cypress.env("vrtActive") && cy.screenshot("page25");
});

When("I schedule the new page", (title) => {
  publishPostScheduled();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("page26");
});

When("I return to the pages list", () => {
  backToPages();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("page27");
});

When("I filter pages by status Scheduled", () => {
  filterByStatusScheduled();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("page28");
});

Then(
  "I see that the first page in the list has title {string} and status {string}",
  (title, status) => {
    const post = firstPageInList();
    post.should("contain.text", title);
    post.should("contain.text", status);
    Cypress.env("vrtActive") && cy.screenshot("page29");
  }
);
