import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const faker = require('faker');
import * as data from '../../data/data.json'
import randomString from "../../functions/randomString";
import removeChar from "../../functions/modifyString";

import * as commonSettings from "../common/PageObjectIndex";

//overwrite screenshots
Cypress.Screenshot.defaults({
  overwrite: true
})

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("setting1");
});

Given("I login into the admin page", () => {
  commonSettings.setEmail(Cypress.env("admin_email"));
  commonSettings.setPassword(Cypress.env("admin_password"));
  commonSettings.clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("setting2");
});

Given("I go to the settings page", () => {
  commonSettings.clickSettings();
  cy.wait(100);
  Cypress.env("vrtActive") && cy.screenshot("setting3");
});

Given("I go to general settings page", () => {
  commonSettings.clickGeneralSettings();
  cy.wait(100);
  Cypress.env("vrtActive") && cy.screenshot("setting4");
});

Given("I expand site title and description settings", () => {
  commonSettings.clickExpandButton();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("setting5");
});

Given("I expand social accounts settings", () => {
  commonSettings.clickExpandSocialButton();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("setting6");
});

When(
  "I modify the site with title {string} and description {string}",
  (title, description) => {
    commonSettings.clearTitle();
    commonSettings.setSiteTitle(title);
    cy.wait(1000);
    commonSettings.clearDescription();
    commonSettings.setSiteDescription(description);
    commonSettings.saveSettings();
    cy.wait(2000);
    Cypress.env("vrtActive") && cy.screenshot("setting7");
  }
);

When("I view the site", () => {
  commonSettings.clickViewSite();
  cy.wait(3000);
  Cypress.env("vrtActive") && cy.screenshot("setting8");
});

Then(`I see {string} in the site title`, (title) => {
  const siteTitle = commonSettings.getNavSiteTitle();
  siteTitle.should("contain.text", title);
  Cypress.env("vrtActive") && cy.screenshot("setting9");
});

When("I modify the facebook url with {string}", (facebookUrl) => {
  commonSettings.clearFacebookUrl();
  commonSettings.setFacebookUrl(facebookUrl);
  commonSettings.saveSettings();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("setting10");
});

When("I modify the twitter url with {string}", (twitterUrl) => {
  commonSettings.clearTwitterUrl();
  commonSettings.setTwitterUrl(twitterUrl);
  commonSettings.saveSettings();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("setting11");
});


Then(`I can access to {string} facebook url`, (facebookUrl) => {
  cy.visit(Cypress.env("ghost_url"));
  const siteTitle = commonSettings.getFacebookLink();
  siteTitle.invoke("attr", "href").should("eq", facebookUrl);
  Cypress.env("vrtActive") && cy.screenshot("setting12");
});

Then(`I can access to {string} twitter url`, (twitterUrl) => {
  cy.visit(Cypress.env("ghost_url"));
  const siteTitle = commonSettings.getTwitterLink();
  siteTitle.invoke("attr", "href").should("eq", twitterUrl);
  Cypress.env("vrtActive") && cy.screenshot("setting13");
});

When(`I expand title and description`, () => {
  commonSettings.clickExpandTitleAndDescription();
  Cypress.env("vrtActive") && cy.screenshot("setting14");
})

When(`I expand language`, () => {
  commonSettings.clickExpandLanguage();
  Cypress.env("vrtActive") && cy.screenshot("setting14");
})

When(`I clear title field`, () => {
  commonSettings.clearTitleField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear description field`, () => {
  commonSettings.clearDescriptionField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear language field`, () => {
  commonSettings.clearLanguageField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I save settings`, () => {
  commonSettings.saveSettings();
  Cypress.env("vrtActive") && cy.screenshot("setting16");
})

Then(`I see the settings saved message`, () => {
  commonSettings.isSaveButtonSuccess();
  Cypress.env("vrtActive") && cy.screenshot("setting17"); 
})

When(`I type a title with {string} characters`, (textLength) => {
  commonSettings.writeSiteTitle(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a description with {string} characters`, (textLength) => {
  commonSettings.writeSiteDescription(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a language with {string} characters`, (textLength) => {
  commonSettings.writeSiteLanguage(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I focus in description field`, () => {
  commonSettings.focusDescriptionField();
  Cypress.env("vrtActive") && cy.screenshot("setting19");
})

When(`I focus in title field`, () => {
  commonSettings.focusTitleField();
  Cypress.env("vrtActive") && cy.screenshot("setting19");
})

When(`I focus in language field`, () => {
  commonSettings.focusLanguageField();
  Cypress.env("vrtActive") && cy.screenshot("setting19");
})

Then('I should see a title message error', () => {
  commonSettings.isTitleError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a title message error', () => {
  commonSettings.isNotTitleError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a description message error', () => {
  commonSettings.isDescriptionError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a description message error', () => {
  commonSettings.isNotDescriptionError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a language message error', () => {
  commonSettings.isLanguageError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a language message error', () => {
  commonSettings.isNotLanguageError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})