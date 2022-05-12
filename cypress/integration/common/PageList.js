const selCreatePage = "/html/body/div[2]/div/main/section/div/header/section/a";
const selPageButton =
  "body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(2)";
const selTitlePage =
  "/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea";
const selNewPageOutsideArea =
  "/html/body/div[2]/div/main/div/section/div[1]/div[1]";
const selPublishDropdown =
  "/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]";
const selUpdateDropdown =
  "/html/body/div[2]/div/main/div/section/header/section/div[1]/div[1]";
const selPublishButton = "/html/body/div[1]/div/footer/button[2]";
const selPagesBackButton =
  "/html/body/div[2]/div/main/div/section/header/div/div[1]";
const selPagesList = ".gh-posts-list-item";
const selPageTitle = ".gh-content-entry-title";
const selSortDropdown =
  "/html/body/div[2]/div/main/section/div/header/section/div/div[5]/div[1]";
const selViewSiteButton =
  "/html/body/div[2]/div/aside/article/div[2]/span[2]/a";
const selTagDropdown =
  "/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[3]/div/div[1]";
const selTag = ".ember-power-select-option";
const selPageTag =
  "/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/p/span";
const selSortRecentlyUpdated = "/html/body/div[1]/div/ul/li[3]";

const selFilterByStatus = ".gh-contentfilter-type > .ember-view";
const selDraftOption = '[data-option-index="1"]';
const selPublishedOption = '[data-option-index="2"]';
const selSpanSettingsMenu = ".settings-menu-toggle > span";
const selFeature =
  "/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[7]/label";
const selFeatureFilter = "/html/body/div[1]/div/ul/li[5]";
const selListPageItem = "li.gh-list-row.gh-posts-list-item";

export function selectPages() {
  return cy.get(selPageButton).click();
}

export function createPage() {
  return cy.xpath(selCreatePage).click();
}

export function writeTitle(title) {
  return cy.xpath(selTitlePage).type(title);
}

export function clickOutsideTextbox() {
  return cy.xpath(selNewPageOutsideArea).click();
}

export function goBackToPages() {
  return cy.xpath(selPagesBackButton).click();
}

export function filterDraftPages() {
  cy.get(selFilterByStatus).click();
  return cy.get(selDraftOption).click();
}

export function sortDropdown() {
  return cy.xpath(selSortDropdown).click();
}

export function getFirstPost() {
  // get all posts as a list
  return cy.get(selPagesList).first();
}

export function publishDropdown() {
  return cy.xpath(selPublishDropdown).click();
}

export function publishButton() {
  return cy.xpath(selPublishButton).click();
}

export function filterPublishedPages() {
  cy.get(selFilterByStatus).click();
  return cy.get(selPublishedOption).click();
}

export function viewSite() {
  return cy.xpath(selViewSiteButton).click();
}

export function pageSettings() {
  return cy.get(selSpanSettingsMenu).click();
}

export function tagDropdown() {
  return cy.xpath(selTagDropdown).click();
}

export function getFirstTag() {
  return cy.get(selTag).first();
}

export function clickOnFirstPublishedPage() {
  return cy.get(selPagesList).first().click();
}

export function updatePageDropdown() {
  return cy.xpath(selUpdateDropdown).click();
}

export function filterUpdatedPages() {
  cy.xpath(selSortDropdown).click();
  return cy.xpath(selSortRecentlyUpdated).click();
}

export function selectFeature() {
  return cy.xpath(selFeature).click();
}

export function filterFeaturedPages() {
  cy.get(selFilterByStatus).click();
  return cy.xpath(selFeatureFilter).click();
}

export function firstPageInList() {
  return cy.get(selListPageItem).first();
}
