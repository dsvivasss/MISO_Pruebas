const selectors = require("../common/PageObjectIndex");
const properties = require("../../../properties.json");

const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const expect = require("chai").expect;

const screenshots_path = properties.screenshots_path
const vrtActive = properties.vrtActive

Given("I enter email {kraken-string}", async function (email) {
  let emailInput = await this.driver.$(selectors.selInputEmail);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken1.png`);
  return await emailInput.setValue(email);
});

Given("I enter password {kraken-string}", async function (email) {
  let passwordInput = await this.driver.$(selectors.selInputPassword);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken2.png`);
  return await passwordInput.setValue(email);
});

Given("I click on the login button", async function () {
  let loginButton = await this.driver.$(selectors.selButtonLogin);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken3.png`);
  return await loginButton.click();
});

When("I click on the new post button", async function () {
  let newPostButton = this.driver.$(selectors.selLinkNewPost);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken4.png`);
  return await newPostButton.click();
});

When("I write {kraken-string} in the post title", async function (title) {
  let titleInput = await this.driver.$(selectors.selTextAreaTitle);

  await titleInput.setValue(title);

  // Clicking outside the title text area
  const buttonBack = await this.driver.$(selectors.selButtonBack);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken5.png`)
  return await buttonBack.click();
});

When("I publish the new post", async function () {
  const spanSettingsMenu = await this.driver.$(selectors.selSpanSettingsMenu);
  await spanSettingsMenu.click();
  const divPublish = await this.driver.$(selectors.selDivPublish);
  await divPublish.click();
  const buttonPublish = await this.driver.$(selectors.selButtonPublish);
  await buttonPublish.click();
  const buttonPublishConfirmation = await this.driver.$(
    selectors.selButtonPublishConfirmation
  );
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken6.png`)
  return await buttonPublishConfirmation.click();
});

When("I schedule the new post", async function () {
  const spanSettingsMenu = await this.driver.$(selectors.selSpanSettingsMenu);
  await spanSettingsMenu.click();
  const divPublish = await this.driver.$(selectors.selDivPublish);
  await divPublish.click();
  const radioButtonSchedule = await this.driver.$(
    selectors.selRadioButtonSchedule
  );
  await radioButtonSchedule.click();
  const scheduleButton = await this.driver.$(selectors.selButtonSchedule);
  await scheduleButton.click();
  const scheduleConfirmationButton = await this.driver.$(
    selectors.selButtonScheduleConfirmation
  );
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken7.png`)
  return await scheduleConfirmationButton.click();
});

When("I return to the posts list", async function () {
  const buttonBack = await this.driver.$(selectors.selButtonBack);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken8.png`)
  return await buttonBack.click();
});

When("I filter posts by status Published", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const publishedOption = await this.driver.$(selectors.selPublishedOption);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken9.png`)
  return await publishedOption.click();
});

When("I filter posts by status Draft", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const draftOption = await this.driver.$(selectors.selDraftOption);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken10.png`)
  return await draftOption.click();
});

When("I filter posts by status Scheduled", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const scheduledOption = await this.driver.$(selectors.selScheduledOption);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken11.png`)
  return await scheduledOption.click();
});

When("I click in the first post in the list", async function () {
  const firstPostItem = await this.driver.$(selectors.selListPostItem);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken12.png`)
  return await firstPostItem.click();
});

When("I open the post settings", async function () {
  const settingsButton = await this.driver.$(selectors.selButtonPostSettings);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken13.png`)
  return await settingsButton.click();
});

When("I delete the post", async function () {
  const buttonDeletePost = await this.driver.$(selectors.selButtonDeletePost);
  await buttonDeletePost.click();
  const buttonConfirmDeletePost = await this.driver.$(
    selectors.selButtonConfirmDeletePost
  );
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken14.png`)
  return await buttonConfirmDeletePost.click();
});

Then(
  "I see that the first post in the list has title {kraken-string}",
  async function (title) {
    const list = await this.driver.$$(selectors.selPostItemTitle);
    const postTitle = await list[0].getText();
    expect(postTitle).to.equal(title);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken15.png`)
  }
);

Then(
  "I see that there is no post with the title {kraken-string} in the post list",
  async function (title) {
    const list = await this.driver.$$(selectors.selPostItemTitle);
    const postTitle = await list[0].getText();
    expect(postTitle).to.not.equal(title);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken16.png`)
  }
);

When("I publish the edited post", async function () {
  const divPublish = await this.driver.$(selectors.selDivUpdate);
  await divPublish.click();
  const buttonPublish = await this.driver.$(selectors.selButtonPublish);
  await buttonPublish.click();
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken17.png`)
});

When("I edit {kraken-string} in the post title", async function (title) {
  let titleInput = await this.driver.$(selectors.selTextAreaTitle);
  await titleInput.setValue(title);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken18.png`)
});

Given("I click on tags option", async function () {
  let tagsButton = this.driver.$(selectors.selLinkTags);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken19.png`)
  return await tagsButton.click();
});

When("I click on the new tags button", async function () {
  let newTagButton = this.driver.$(selectors.selLinkNewTag);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken20.png`)
  return await newTagButton.click();
});

When("I write {kraken-string} in the tag name", async function (name) {
  let nameInput = await this.driver.$(selectors.selInputName);

  await nameInput.setValue(name);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken21.png`)
});

When(
  "I write {kraken-string} in the tag description",
  async function (description) {
    let descriptionTextArea = await this.driver.$(selectors.selTextAreaDesc);
    await descriptionTextArea.setValue(description);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken22.png`)
  }
);

When("I save the new tag", async function () {
  let saveTagButton = this.driver.$(selectors.selButtonSave);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken23.png`)
  return await saveTagButton.click();
});

When("I click the last tag in the list", async function () {
  const list = await this.driver.$$(selectors.selTagItemTitle);
  const lastTag = await list[list.length - 1];
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken24.png`)
  return await lastTag.click();
});

Then(
  "I see that the last tag in the list has name {kraken-string}",
  async function (name) {
    const list = await this.driver.$$(selectors.selTagItemTitle);
    const lastTag = await list[list.length - 1].getText();
    expect(lastTag).to.equal(name);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken25.png`)
  }
);

Then(
  "I see that there is a tag in the list with name {kraken-string}",
  async function (name) {
    const list = await this.driver.$$(selectors.selTagItemName);
    let expectedTag = "";
    for (let index = 0; index < list.length; index++) {
      const tagText = await list[index].getText();
      if (tagText === name) {
        expectedTag = tagText;
      }
    }
    expect(expectedTag).to.equal(name);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken26.png`)
  }
);

When("I delete the tag", async function () {
  const buttonDeleteTag = await this.driver.$(selectors.selButtonDeleteTag);
  await buttonDeleteTag.click();
  const buttonConfirmDeleteTag = await this.driver.$(
    selectors.selButtonConfirmDeleteTag
  );
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken27.png`)
  return await buttonConfirmDeleteTag.click();
});

When("I click the delete tag button", async function () {
  const buttonDeleteTag = await this.driver.$(selectors.selButtonDeleteTag);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken28.png`)
  return await buttonDeleteTag.click();
});

When("I click confirm tag deleting", async function () {
  const buttonConfirmDeleteTag = await this.driver.$(
    selectors.selButtonConfirmDeleteTag
  );
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken29.png`)
  return await buttonConfirmDeleteTag.click();
});

Then(
  "I see that there is no tag with the name {kraken-string} in the tag list",
  async function (name) {
    const list = await this.driver.$$(selectors.selListTagItem);
    const tagTitle = await list[0].getText();
    expect(tagTitle).to.not.equal(name);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken30.png`)
  }
);

Given("I click on posts option", async function () {
  let postsButton = this.driver.$(selectors.selLinkPosts);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken31.png`)
  return await postsButton.click();
});

When("I asign the tag {kraken-string} to the post", async function (name) {
  const tagsInput = await this.driver.$(selectors.selInputTag);
  await tagsInput.click();
  await tagsInput.setValue(name);
  const firstTagOption = await this.driver.$(selectors.selFirstTagOption);
  await firstTagOption.click();
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken32.png`)
});

Then(
  "I see that there is a post in the list with name {kraken-string}",
  async function (name) {
    const list = await this.driver.$$(selectors.selPostItemTag);
    const postTag = await list[1].getText();
    expect(postTag).to.equal(name);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken33.png`)
  }
);

When("I click on the page button", async function () {
  const pageButton = await this.driver.$(selectors.selPageButton);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken34.png`)
  return await pageButton.click();
});

When("I click on new page", async function () {
  const createPage = await this.driver.$(selectors.selCreatePage);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken35.png`)
  return await createPage.click();
});

When("I write {kraken-string} in the page title", async function (title) {
  let titleInput = await this.driver.$(selectors.selTitlePage);

  await titleInput.setValue(title);

  const newPageOutsideArea = await this.driver.$(
    selectors.selNewPageOutsideArea
  );
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken36.png`)
  return await newPageOutsideArea.click();
});

When("I click on publish page dropdown", async function () {
  const publishDropdown = await this.driver.$(selectors.selPublishDropdown);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken37.png`)
  return await publishDropdown.click();
});

When("I click on publish page button", async function () {
  const publishButton = await this.driver.$(selectors.selPublishButton);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken38.png`)
  return await publishButton.click();
});

When("I click on go back to pages button", async function () {
  const pagesBackButton = await this.driver.$(selectors.selPagesBackButton);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken39.png`)
  return await pagesBackButton.click();
});

When("I filter published pages", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const publishedOption = await this.driver.$(selectors.selPublishedOption);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken40.png`)
  return await publishedOption.click();
});

When("I sort by newest pages", async function () {
  const sortDropdown = await this.driver.$(selectors.selSortDropdown);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken41.png`)
  return await sortDropdown.click();
});

Then(
  "I see that the new page is named as {kraken-string}",
  async function (title) {
    const list = await this.driver.$$(selectors.selPagesList);
    const pageFirstItem = await list[0];
    const pageTitle = await pageFirstItem.$(selectors.selPageTitle).getText();
    expect(pageTitle).to.equal(title);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken42.png`)
  }
);

Then(
  "I see that the new page is not named as {kraken-string}",
  async function (title) {
    const list = await this.driver.$$(selectors.selPagesList);
    const pageFirstItem = await list[0];
    const pageTitle = await pageFirstItem.$(selectors.selPageTitle).getText();

    expect(pageTitle).to.not.equal(title);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken43.png`)
  }
);

When("I filter draft pages", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const draftOption = await this.driver.$(selectors.selDraftOption);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken44.png`)
  return await draftOption.click();
});

Then("I see the page", async function () {
  const viewSite = await this.driver.$(selectors.selViewSiteButton);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken45.png`)
  return await viewSite.click();
});

When("I click on page settings", async function () {
  const pageSettings = await this.driver.$(selectors.selSpanSettingsMenu);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken46.png`)
  return await pageSettings.click();
});

When("I click on tag dropdown", async function () {
  const tagDropdown = await this.driver.$(selectors.selTagDropdown);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken47.png`)
  return await tagDropdown.click();
});

When("I click on tag button", async function () {
  const tagButton = await this.driver.$(selectors.selTagDropdown);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken48.png`)
  return await tagButton.click();
});

let tagName = "";
When("I click on first tag", async function () {
  const lista = await this.driver.$$(".ember-power-select-option");

  // click on first tag
  const firstTag = await lista[0];

  // get tag name and assign to variable
  tagName = await firstTag.getText();
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken49.png`)

  return await firstTag.click();
});

Then("I see that the new page has the tag", async function () {
  const list = await this.driver.$$(selectors.selPagesList);
  const pageFirstItem = await list[0];
  const pageTag = await pageFirstItem.$(selectors.selPageTag).getText();

  // Check if the page has the tag name
  expect(pageTag).to.include("News");
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken50.png`)
});

When("I click on the first published page", async function () {
  const list = await this.driver.$$(selectors.selPagesList);
  const pageFirstItem = await list[0];
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken51.png`)
  return await pageFirstItem.click();
});

When("I sort by recently updated pages", async function () {
  const sortDropdown = await this.driver.$(selectors.selSortDropdown);
  await sortDropdown.click();
  const sortRecentlyUpdated = await this.driver.$(
    selectors.selSortRecentlyUpdated
  );
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken52.png`)
  return await sortRecentlyUpdated.click();
});

When("I click on update page dropdown", async function () {
  const updateDropdown = await this.driver.$(selectors.selUpdateDropdown);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken53.png`)
  return await updateDropdown.click();
});

When("I click on feature this page", async function () {
  const featureThisPage = await this.driver.$(selectors.selFeature);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken54.png`)
  return await featureThisPage.click();
});

When("I filter featured pages", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const featureOption = await this.driver.$(selectors.selFeatureFilter);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken55.png`)
  return await featureOption.click();
});

When("I unpublish the page", async function () {
  const unpublishPage = await this.driver.$(selectors.selUnpublishPage);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken56.png`)
  return await unpublishPage.click();
});

When("I delete the page", async function () {
  const deletePage = await this.driver.$(selectors.selDeletePage);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken57.png`)
  return await deletePage.click();
});

When("I confirm the delete", async function () {
  const confirmDelete = await this.driver.$(selectors.selDeleteConfirmation);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken58.png`)
  return await confirmDelete.click();
});

When("I click on preview", async function () {
  const preview = await this.driver.$(selectors.selPreview);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken59.png`)
  return await preview.click();
});

Then("I should see a preview of the page", async function () {
  // Check if element was found
  const preview = await this.driver.$(selectors.selPreviewContainer);
  expect(preview).to.exist;
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken60.png`)
});

When("I click on user profile", async function () {
  const userProfile = await this.driver.$(selectors.selUserProfile);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken61.png`)
  return await userProfile.click();
});

Then("I should see the user email {kraken-string}", async function (email) {
  const userEmail = await this.driver.$(selectors.selUserEmail);
  const userEmailText = await userEmail.getText();
  expect(userEmailText).to.equal(email);
  vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken62.png`)
});

Then(
  "I should see the user username {kraken-string}",
  async function (user_name) {
    const username = await this.driver.$(selectors.selUsername);
    const usernameText = await username.getText();
    expect(usernameText).to.equal(user_name);
    vrtActive && await this.driver.saveScreenshot(`${screenshots_path}/kraken63.png`)
  }
);
