import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";
import * as data from '../../data/data.json';
import removeChar from "../../functions/modifyString";

import {
  setEmail,
  setPassword,
  clickLogin,
  errorMessageEmail,
  getDashboardTitle,

} from "../common/PageObjectIndex";

//overwrite screenshots
Cypress.Screenshot.defaults({
  overwrite: true
})

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite1");
});

When("I login into the admin page with empty email", () => {
  setPassword(data.input_password);
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite2");
});

When("I login into the admin page with empty password", () => {
  setEmail(data.input_email);
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite2");
});

When("I login into the admin page with invalid email", () => {
  setEmail(data.page_title);
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite2");
});

When("I login into the admin page with invalid password", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(data.page_title);
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite2");
});

When("I login into the admin page with email without @", () => {
  setEmail(removeChar(data.input_email_admin, "@"));
  setPassword(data.input_password_admin);
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite2");
});

When("I login into the admin page with email without '.'", () => {
  setEmail(removeChar(data.input_email_admin, "."));
  setPassword(data.input_password_admin);
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite2");
});

When("I login into the admin page", () => {
  setEmail(data.input_email_admin);
  setPassword(data.input_password_admin);
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite2");
});

Then(
    "I see that an error message appears with text {string}",
    () => {
      const tag = errorMessageEmail();
      tag.should("contain.text", "Please fill out the form to sign in.");
      cy.wait(1000);
      Cypress.env("vrtActive") && cy.screenshot("invite10");
    }
  );

  Then(
    "I see that an error message2 appears with text {string}",
    () => {
      const tag = errorMessageEmail();
      tag.should("contain.text", "Your password is incorrect.");
      cy.wait(1000);
      Cypress.env("vrtActive") && cy.screenshot("invite11");
    }
  );

  Then(
    "I see the Dashboard page",
    () => {
      const tag = getDashboardTitle();
      tag.should("contain.text", "Dashboard");
      cy.wait(1000);
      Cypress.env("vrtActive") && cy.screenshot("invite12");
    }
  );