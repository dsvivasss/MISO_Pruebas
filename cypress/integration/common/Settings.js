const selLinkSettings = 'a[href="#/settings/"]';
const selLinkGeneralSettings = 'a[href="#/settings/general/"]';
const selInputs = ".ember-text-field.gh-input.ember-view";
const selButtonSave = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selExpandButton = ".gh-expandable-header>button";
const selLinkFacebook = ".gh-social-facebook";
const selLinkTwitter = ".gh-social-twitter";
const selExpandTiTleAndDescription = "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[1]/button";
const selExpandLanguage = '/html/body/div[2]/div/main/section/div[2]/section/div[3]/div[1]/button'
const selTitle = "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[1]/input"
const selDescription = "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[2]/input"
const selLanguage = '/html/body/div[2]/div/main/section/div[2]/section/div[3]/div[2]/div/div/div/div/input'
const selSavedButtonSuccess = ".gh-btn-green"
const selTitleError = '/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[1]/p[1]'
const selDescriptionError = '/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[2]/p[1]'
const selLanguageError = '/html/body/div[2]/div/main/section/div[2]/section/div[3]/div[2]/div/div/div/div/p[1]'

export function clickSettings() {
  cy.get(selLinkSettings).click();
}

export function clickGeneralSettings() {
  cy.get(selLinkGeneralSettings).click();
}

export function clickExpandButton() {
  cy.get(selExpandButton).then(($expand) => {
    $expand[0].click();
    cy.wait(1000);
  });
}

export function clickExpandSocialButton() {
  cy.get(selExpandButton).then(($expand) => {
    $expand[6].click();
    cy.wait(1000);
  });
}

export function clickExpandTitleAndDescription() {
  cy.xpath(selExpandTiTleAndDescription).click()
}

export function clickExpandLanguage() {
  cy.xpath(selExpandLanguage).click()
}

export function clearTitle() {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[0]).clear();
    cy.wait(1000);
  });
}

export function setSiteTitle(title) {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[0]).type(title, { force: true });
    cy.wait(1000);
  });
}

export function clearDescription() {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[1]).clear();
    cy.wait(1000);
  });
}

export function setSiteDescription(description) {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[1]).type(description, { force: true });
    cy.wait(1000);
  });
}

export function saveSettings() {
  cy.get(selButtonSave).click();
}

export function clearFacebookUrl() {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[0]).clear();
    cy.wait(1000);
  });
}

export function clearTwitterUrl() {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[1]).clear();
    cy.wait(1000);
  });
}

export function setFacebookUrl(facebookUrl) {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[0]).type(facebookUrl, { force: true });
    cy.wait(1000);
  });
}

export function setTwitterUrl(twitterUrl) {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[1]).type(twitterUrl, { force: true });
    cy.wait(1000);
  });
}

export function getFacebookLink() {
  return cy.get(selLinkFacebook);
}

export function getTwitterLink() {
  return cy.get(selLinkTwitter);
}

export function clearTitleField() {
  cy.xpath(selTitle).clear();
}

export function clearDescriptionField() {
  cy.xpath(selDescription).clear();
}

export function clearLanguageField() {
  cy.xpath(selLanguage).clear();
}

export function isTitleError() {
  cy.xpath(selTitleError).should('be.visible');
}

export function isNotTitleError() {
  cy.xpath(selTitleError).should('not.be.visible');
}

export function isDescriptionError() {
  cy.xpath(selDescriptionError).should('be.visible');
}

export function isNotDescriptionError() {
  cy.xpath(selDescriptionError).should('not.be.visible');
}

export function isLanguageError() {
  cy.xpath(selLanguageError).should('be.visible');
}

export function isNotLanguageError() {
  cy.xpath(selLanguageError).should('not.be.visible');
}

export function isSaveButtonSuccess() {
  cy.get(selSavedButtonSuccess).should('be.visible');
}

export function writeSiteTitle(text) {
  cy.xpath(selTitle).invoke('val', text).type('a', {force: true})
}

export function writeSiteDescription(text) {
  cy.xpath(selDescription).invoke('val', text).type('a', {force: true})
}

export function writeSiteLanguage(text) {
  cy.xpath(selLanguage).invoke('val', text).type('a', {force: true})
}

export function focusDescriptionField() {
  cy.xpath(selDescription).click();
}

export function focusTitleField() {
  cy.xpath(selTitle).click();
}

export function focusLanguageField() {
  cy.xpath(selLanguage).click();
}