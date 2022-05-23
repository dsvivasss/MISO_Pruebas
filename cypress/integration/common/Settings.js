const selLinkSettings = 'a[href="#/settings/"]';
const selLinkGeneralSettings = 'a[href="#/settings/general/"]';
const selNavigationLink = '/html/body/div[2]/div/main/section/section/div[2]/a[3]'
const selInputs = ".ember-text-field.gh-input.ember-view";
const selButtonSave = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selExpandButton = ".gh-expandable-header>button";
const selLinkFacebook = ".gh-social-facebook";
const selLinkTwitter = ".gh-social-twitter";
const selSavedButtonSuccess = ".gh-btn-green"

const selExpandTiTleAndDescription = "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[1]/button";
const selExpandLanguage = '/html/body/div[2]/div/main/section/div[2]/section/div[3]/div[1]/button'
const selExpandMetadata = '/html/body/div[2]/div/main/section/div[3]/section/div[1]/div[1]/button'
const selExpandTwitter = '/html/body/div[2]/div/main/section/div[3]/section/div[2]/div[1]/button'
const selExpandFacebook = '/html/body/div[2]/div/main/section/div[3]/section/div[3]/div[1]/button'
const selExpandSocial = '/html/body/div[2]/div/main/section/div[3]/section/div[4]/div[1]/button'

const selTitle = "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[1]/input"
const selDescription = "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[2]/input"
const selLanguage = '/html/body/div[2]/div/main/section/div[2]/section/div[3]/div[2]/div/div/div/div/input'
const selMetadataTitle = '/html/body/div[2]/div/main/section/div[3]/section/div[1]/div[2]/div/div/div/div/div[1]/div[1]/input'
const selMetadataDescription = '/html/body/div[2]/div/main/section/div[3]/section/div[1]/div[2]/div/div/div/div/div[1]/div[2]/textarea'
const selTwitterTitle = '/html/body/div[2]/div/main/section/div[3]/section/div[2]/div[2]/div/div/div/div/div[1]/div[2]/input'
const selTwitterDescription = '/html/body/div[2]/div/main/section/div[3]/section/div[2]/div[2]/div/div/div/div/div[1]/div[3]/textarea'
const selFacebookTitle = '/html/body/div[2]/div/main/section/div[3]/section/div[3]/div[2]/div/div/div/div/div[1]/div[2]/input'
const selFacebookDescription = '/html/body/div[2]/div/main/section/div[3]/section/div[3]/div[2]/div/div/div/div/div[1]/div[3]/textarea'
const selSocialFacebook = '/html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[1]/input'
const selSocialTwitter = '/html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[2]/input'
const selNavigationHome = '/html/body/div[2]/div/main/section/section/div[1]/div/form/div[1]/div[1]/div/div/span[1]/input'
const selNavigationHomeUrl = '/html/body/div[2]/div/main/section/section/div[1]/div/form/div[1]/div[1]/div/div/span[2]/input'
const selNavigationSecondary = '/html/body/div[2]/div/main/section/section/div[2]/div/form/div[1]/div/div/div/span[1]/input'
const selNavigationSecondaryUrl = '/html/body/div[2]/div/main/section/section/div[2]/div/form/div[1]/div/div/div/span[2]/input'

const selTitleError = '/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[1]/p[1]'
const selDescriptionError = '/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[2]/p[1]'
const selLanguageError = '/html/body/div[2]/div/main/section/div[2]/section/div[3]/div[2]/div/div/div/div/p[1]'
const selMetadataTitleError = '/html/body/div[2]/div/main/section/div[3]/section/div[1]/div[2]/div/div/div/div/div[1]/div[1]/p[1]'
const selMetadataDescriptionError = '/html/body/div[2]/div/main/section/div[3]/section/div[1]/div[2]/div/div/div/div/div[1]/div[2]/p[1]'
const selTwitterTitleError = '/html/body/div[2]/div/main/section/div[3]/section/div[2]/div[2]/div/div/div/div/div[1]/div[2]/p'
const selTwitterDescriptionError = '/html/body/div[2]/div/main/section/div[3]/section/div[2]/div[2]/div/div/div/div/div[1]/div[3]/p'
const selFacebookTitleError = '/html/body/div[2]/div/main/section/div[3]/section/div[3]/div[2]/div/div/div/div/div[1]/div[2]/p'
const selFacebookDescriptionError = '/html/body/div[2]/div/main/section/div[3]/section/div[3]/div[2]/div/div/div/div/div[1]/div[3]/p'
const selSocialFacebookError = '/html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[1]/p[1]'
const selSocialTwitterError = '/html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[2]/p[1]'
const selNavigationHomeError = '/html/body/div[2]/div/main/section/section/div[1]/div/form/div[1]/div[1]/div/div/span[1]/p'
const selNavigationHomeUrlError = '/html/body/div[2]/div/main/section/section/div[1]/div/form/div[1]/div[1]/div/div/span[2]/p'
const selNavigationSecondaryError = '/html/body/div[2]/div/main/section/section/div[2]/div/form/div[1]/div/div/div/span[1]/p'
const selNavigationSecondaryUrlError = '/html/body/div[2]/div/main/section/section/div[2]/div/form/div[1]/div/div/div/span[2]/p'

export function clickSettings() {
  cy.get(selLinkSettings).click();
}

export function clickGeneralSettings() {
  cy.get(selLinkGeneralSettings).click();
}

export function clickNavigationLink() {
  cy.xpath(selNavigationLink).click();
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

export function clickExpandMetadata() {
  cy.xpath(selExpandMetadata).click()
}

export function clickExpandTwitter() {
  cy.xpath(selExpandTwitter).click()
}

export function clickExpandFacebook() {
  cy.xpath(selExpandFacebook).click()
}

export function clickExpandSocial() {
  cy.xpath(selExpandSocial).click()
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

export function clearMetadataTitleField() {
  cy.xpath(selMetadataTitle).clear();
}

export function clearMetadataDescriptionField() {
  cy.xpath(selMetadataDescription).clear();
}

export function clearTwitterTitleField() {
  cy.xpath(selTwitterTitle).clear();
}

export function clearTwitterDescriptionField() {
  cy.xpath(selTwitterDescription).clear();
}

export function clearFacebookTitleField() {
  cy.xpath(selFacebookTitle).clear();
}

export function clearFacebookDescriptionField() {
  cy.xpath(selFacebookDescription).clear();
}

export function clearSocialFacebookField() {
  cy.xpath(selSocialFacebook).clear();
}

export function clearSocialTwitterField() {
  cy.xpath(selSocialTwitter).clear();
}

export function clearNavigationHomeField() {
  cy.xpath(selNavigationHome).clear();
}

export function clearNavigationHomeUrlField() {
  cy.xpath(selNavigationHomeUrl).clear();
}

export function clearNavigationSecondaryField() {
  cy.xpath(selNavigationSecondary).clear();
}

export function clearNavigationSecondaryUrlField() {
  cy.xpath(selNavigationSecondaryUrl).clear();
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

export function isMetadataTitleError() {
  cy.xpath(selMetadataTitleError).should('be.visible');
}

export function isNotMetadataTitleError() {
  cy.xpath(selMetadataTitleError).should('not.be.visible');
}

export function isMetadataDescriptionError() {
  cy.xpath(selMetadataDescriptionError).should('be.visible');
}

export function isNotMetadataDescriptionError() {
  cy.xpath(selMetadataDescriptionError).should('not.be.visible');
}

export function isTwitterTitleError() {
  cy.xpath(selTwitterTitleError).should('be.visible');
}

export function isNotTwitterTitleError() {
  cy.xpath(selTwitterTitleError).should('not.be.visible');
}

export function isTwitterDescriptionError() {
  cy.xpath(selTwitterDescriptionError).should('be.visible');
}

export function isNotTwitterDescriptionError() {
  cy.xpath(selTwitterDescriptionError).should('not.be.visible');
}

export function isFacebookTitleError() {
  cy.xpath(selFacebookTitleError).should('be.visible');
}

export function isNotFacebookTitleError() {
  cy.xpath(selFacebookTitleError).should('not.be.visible');
}

export function isFacebookDescriptionError() {
  cy.xpath(selFacebookDescriptionError).should('be.visible');
}

export function isNotFacebookDescriptionError() {
  cy.xpath(selFacebookDescriptionError).should('not.be.visible');
}

export function isSocialFacebookError() {
  cy.xpath(selSocialFacebookError).should('be.visible');
}

export function isNotSocialFacebookError() {
  cy.xpath(selSocialFacebookError).should('not.be.visible');
}

export function isSocialTwitterError() {
  cy.xpath(selSocialTwitterError).should('be.visible');
}

export function isNotSocialTwitterError() {
  cy.xpath(selSocialTwitterError).should('not.be.visible');
}

export function isNavigationHomeError() {
  cy.xpath(selNavigationHomeError).should('be.visible');
}

export function isNotNavigationHomeError() {
  cy.xpath(selNavigationHomeError).should('not.be.visible');
}

export function isNavigationHomeUrlError() {
  cy.xpath(selNavigationHomeUrlError).should('be.visible');
}

export function isNotNavigationHomeUrlError() {
  cy.xpath(selNavigationHomeUrlError).should('not.be.visible');
}

export function isNavigationSecondaryError() {
  cy.xpath(selNavigationSecondaryError).should('be.visible');
}

export function isNotNavigationSecondaryError() {
  cy.xpath(selNavigationSecondaryError).should('not.be.visible');
}

export function isNavigationSecondaryUrlError() {
  cy.xpath(selNavigationSecondaryUrlError).should('be.visible');
}

export function isNotNavigationSecondaryUrlError() {
  cy.xpath(selNavigationSecondaryUrlError).should('not.be.visible');
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

export function writeSiteMetadataTitle(text) {
  cy.xpath(selMetadataTitle).invoke('val', text).type('a', {force: true})
}

export function writeSiteMetadataDescription(text) {
  cy.xpath(selMetadataDescription).invoke('val', text).type('a', {force: true})
}

export function writeSiteTwitterTitle(text) {
  cy.xpath(selTwitterTitle).invoke('val', text).type('a', {force: true})
}

export function writeSiteTwitterDescription(text) {
  cy.xpath(selTwitterDescription).invoke('val', text).type('a', {force: true})
}

export function writeSiteFacebookTitle(text) {
  cy.xpath(selFacebookTitle).invoke('val', text).type('a', {force: true})
}

export function writeSiteFacebookDescription(text) {
  cy.xpath(selFacebookDescription).invoke('val', text).type('a', {force: true})
}

export function writeSiteSocialFacebook(text) {
  cy.xpath(selSocialFacebook).invoke('val', text).type('a', {force: true})
}

export function writeSiteSocialTwitter(text) {
  cy.xpath(selSocialTwitter).invoke('val', text).click().type('a', {force: true})
}

export function writeSiteNavigationHome(text) {
  cy.xpath(selNavigationHome).invoke('val', text).type('a', {force: true})
}

export function writeSiteNavigationHomeUrl(text) {
  cy.xpath(selNavigationHomeUrl).invoke('val', text).click().type('a', {force: true})
}

export function writeSiteNavigationSecondary(text) {
  cy.xpath(selNavigationSecondary).invoke('val', text).type('a', {force: true})
}

export function writeSiteNavigationSecondaryUrl(text) {
  cy.xpath(selNavigationSecondaryUrl).invoke('val', text).click().type('a', {force: true})
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

export function focusMetadataTitleField() {
  cy.xpath(selMetadataTitle).click();
}

export function focusMetadataDescriptionField() {
  cy.xpath(selMetadataDescription).click();
}

export function focusTwitterTitleField() {
  cy.xpath(selTwitterTitle).click();
}

export function focusTwitterDescriptionField() {
  cy.xpath(selTwitterDescription).click();
}

export function focusFacebookTitleField() {
  cy.xpath(selFacebookTitle).click();
}

export function focusFacebookDescriptionField() {
  cy.xpath(selFacebookDescription).click();
}