import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import {
  setEmail,
  setPassword,
  clickLogin,
  setInviteEmail,
  lastInviteInList,
  clickSettings,
  clickStaff,
  clickInvitePeople,
  clickRoleAuthor,
  clickInviteNow,
  clickRevoke,
  lastPrompt

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

Given("I login into the admin page", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(Cypress.env("admin_password"));
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite2");
});

Given("I go to the settings page", () => {
  clickSettings();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite3");
});

Given("I go to the staff page", () => {
  clickStaff();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("invite4");
});

Given("I click on invite people button", () => {
  clickInvitePeople();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("invite5");
});

When(
  "I invite people with email {string}",
  (email) => {
    setInviteEmail(email);
    clickRoleAuthor();
    // saveSendInvitation();
    cy.wait(2000);
    Cypress.env("vrtActive") && cy.screenshot("invite6");
  }
);

When(
  "I click on send invitation now button",() => {
    clickInviteNow();
    cy.wait(2000);
    Cypress.env("vrtActive") && cy.screenshot("invite7");
});

When(
  "I click on revoke button",() => {
    clickRevoke();
    cy.wait(2000);
    Cypress.env("vrtActive") && cy.screenshot("invite8");
});

Then(
  "I see that the last active user in the invited users list has email {string}",
  (email) => {
    cy.reload()
    const tag = lastInviteInList();
    tag.should("contain.text", email);
    cy.wait(2000);
    Cypress.env("vrtActive") && cy.screenshot("invite9");
  }
);

Then(
  "I see that the prompt notification list has email {string}",
  () => {
    const tag = lastPrompt();
    tag.should("contain.text", "Invitation revoked");
    cy.wait(100);
    Cypress.env("vrtActive") && cy.screenshot("invite10");
  }
);