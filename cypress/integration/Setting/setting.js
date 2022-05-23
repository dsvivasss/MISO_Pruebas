import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import * as data from '../../data/data.json'
import randomString from "../../functions/randomString";

import * as commonSettings from "../common/PageObjectIndex";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

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

Given('I go to navigation settings page', () => {
  commonSettings.clickNavigationLink();
  cy.wait(100);
  Cypress.env("vrtActive") && cy.screenshot("setting5"); 
})

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

When(`I expand meta data`, () => {
  commonSettings.clickExpandMetadata();
  Cypress.env("vrtActive") && cy.screenshot("setting14");
})

When(`I expand twitter`, () => {
  commonSettings.clickExpandTwitter();
  Cypress.env("vrtActive") && cy.screenshot("setting14");
})

When(`I expand facebook`, () => {
  commonSettings.clickExpandFacebook();
  Cypress.env("vrtActive") && cy.screenshot("setting14");
})

When(`I expand social`, () => {
  commonSettings.clickExpandSocial();
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

When(`I clear meta data title field`, () => {
  commonSettings.clearMetadataTitleField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear meta data description field`, () => {
  commonSettings.clearMetadataDescriptionField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear twitter title field`, () => {
  commonSettings.clearTwitterTitleField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear twitter description field`, () => {
  commonSettings.clearTwitterDescriptionField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear facebook title field`, () => {
  commonSettings.clearFacebookTitleField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear facebook description field`, () => {
  commonSettings.clearFacebookDescriptionField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear social facebook field`, () => {
  commonSettings.clearSocialFacebookField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear social twitter field`, () => {
  commonSettings.clearSocialTwitterField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear navigation field`, () => {
  commonSettings.clearNavigationHomeField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear navigation url field`, () => {
  commonSettings.clearNavigationHomeUrlField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear secondary navigation field`, () => {
  commonSettings.clearNavigationSecondaryField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I clear secondary navigation url field`, () => {
  commonSettings.clearNavigationSecondaryUrlField();
  Cypress.env("vrtActive") && cy.screenshot("setting15");
})

When(`I save settings`, () => {
  commonSettings.saveSettings();
  cy.wait(500);
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

When(`I type a meta data title with {string} characters`, (textLength) => {
  commonSettings.writeSiteMetadataTitle(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a meta data description with {string} characters`, (textLength) => {
  commonSettings.writeSiteMetadataDescription(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a twitter title with {string} characters`, (textLength) => {
  commonSettings.writeSiteTwitterTitle(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a twitter description with {string} characters`, (textLength) => {
  commonSettings.writeSiteTwitterDescription(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a facebook title with {string} characters`, (textLength) => {
  commonSettings.writeSiteFacebookTitle(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a facebook description with {string} characters`, (textLength) => {
  commonSettings.writeSiteFacebookDescription(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a correct social facebook account`, () => {
  commonSettings.writeSiteSocialFacebook(data.facebook_url);
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a correct social twitter account`, () => {
  commonSettings.writeSiteSocialTwitter(data.twitter_url);
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type an incorrect social facebook account`, () => {
  commonSettings.writeSiteSocialFacebook(data.facebook_url + data.description_page_invalid);
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type an incorrect social twitter account`, () => {
  commonSettings.writeSiteSocialTwitter(data.twitter_url + data.description_page_invalid);
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a navigation with {string} characters`, (textLength) => {
  commonSettings.writeSiteNavigationHome(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a correct navigation url`, () => {
  commonSettings.writeSiteNavigationHomeUrl(Cypress.env("ghost_url"));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type an incorrect navigation url`, () => {
  commonSettings.writeSiteNavigationHomeUrl(Cypress.env("ghost_url") + data.description_page_invalid);
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a secondary navigation with {string} characters`, (textLength) => {
  commonSettings.writeSiteNavigationSecondary(randomString(textLength - 1));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type a correct secondary navigation url`, () => {
  commonSettings.writeSiteNavigationSecondaryUrl(Cypress.env("ghost_url"));
  Cypress.env("vrtActive") && cy.screenshot("setting18");
})

When(`I type an incorrect secondary navigation url`, () => {
  commonSettings.writeSiteNavigationSecondaryUrl(Cypress.env("ghost_url") + data.description_page_invalid);
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

When(`I focus in meta data title field`, () => {
  commonSettings.focusMetadataTitleField();
  Cypress.env("vrtActive") && cy.screenshot("setting19");
})

When(`I focus in meta data description field`, () => {
  commonSettings.focusMetadataDescriptionField();
  Cypress.env("vrtActive") && cy.screenshot("setting19");
})

When(`I focus in twitter title field`, () => {
  commonSettings.focusTwitterTitleField();
  Cypress.env("vrtActive") && cy.screenshot("setting19");
})

When(`I focus in twitter description field`, () => {
  commonSettings.focusTwitterDescriptionField();
  Cypress.env("vrtActive") && cy.screenshot("setting19");
})

When(`I focus in facebook title field`, () => {
  commonSettings.focusFacebookTitleField();
  Cypress.env("vrtActive") && cy.screenshot("setting19");
})

When(`I focus in facebook description field`, () => {
  commonSettings.focusFacebookDescriptionField();
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

Then('I should see a meta data title message error', () => {
  commonSettings.isMetadataTitleError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a meta data title message error', () => {
  commonSettings.isNotMetadataTitleError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a meta data description message error', () => {
  commonSettings.isMetadataDescriptionError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a meta data description message error', () => {
  commonSettings.isNotMetadataDescriptionError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a twitter title message error', () => {
  commonSettings.isTwitterTitleError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a twitter title message error', () => {
  commonSettings.isNotTwitterTitleError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a twitter description message error', () => {
  commonSettings.isTwitterDescriptionError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a twitter description message error', () => {
  commonSettings.isNotTwitterDescriptionError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a facebook title message error', () => {
  commonSettings.isFacebookTitleError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a facebook title message error', () => {
  commonSettings.isNotFacebookTitleError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a facebook description message error', () => {
  commonSettings.isFacebookDescriptionError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a facebook description message error', () => {
  commonSettings.isNotFacebookDescriptionError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a social facebook message error', () => {
  commonSettings.isSocialFacebookError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a social facebook message error', () => {
  commonSettings.isNotSocialFacebookError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a social twitter message error', () => {
  commonSettings.isSocialTwitterError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a social twitter message error', () => {
  commonSettings.isNotSocialTwitterError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a navigation message error', () => {
  commonSettings.isNavigationHomeError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a navigation message error', () => {
  commonSettings.isNotNavigationHomeError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a navigation url message error', () => {
  commonSettings.isNavigationHomeUrlError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a navigation url message error', () => {
  commonSettings.isNotNavigationHomeUrlError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a secondary navigation message error', () => {
  commonSettings.isNavigationSecondaryError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a secondary navigation message error', () => {
  commonSettings.isNotNavigationSecondaryError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should see a secondary navigation url message error', () => {
  commonSettings.isNavigationSecondaryUrlError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})

Then('I should not see a secondary navigation url message error', () => {
  commonSettings.isNotNavigationSecondaryUrlError();
  Cypress.env("vrtActive") && cy.screenshot("setting19"); 
})