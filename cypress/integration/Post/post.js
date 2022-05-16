import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import {
  setEmail,
  clickLogin,
  setPassword,
  backToPosts,
  getPostList,
  clickNewPost,
  setPostTitle,
  clearPostTitle,
  publishPostNow,
  updatePostNow,
  clickFirstPost,
  firstPostInList,
  clickDeletePost,
  openPostSettings,
  getPostListItems,
  filterByStatusDraft,
  publishPostScheduled,
  filterByStatusAllPosts,
  filterByStatusPublished,
  filterByStatusScheduled,
} from "../common/PageObjectIndex";

//overwrite screenshots
Cypress.Screenshot.defaults({
  overwrite: true
})

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post1");
});

Given("I login into the admin page", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(Cypress.env("admin_password"));
  clickLogin();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post2");
});

Given("I go to the new post page", () => {
  clickNewPost();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post3");
});

When("I create a new post with title {string}", (title) => {
  setPostTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post4");
});

When("I publish the new post", () => {
  publishPostNow();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post5");
});

When("I return to the posts list", () => {
  backToPosts();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post6");
});

When("I filter posts by status Published", (status) => {
  filterByStatusPublished();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("post7");
});

When("I filter posts by status Draft", (status) => {
  filterByStatusDraft();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("post8");
});

When("I filter posts by status Scheduled", (status) => {
  filterByStatusScheduled();
  cy.wait(1000);
  Cypress.env("vrtActive") && cy.screenshot("post9");
});

When("I schedule the new post", (title) => {
  publishPostScheduled();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post10");
});

When("I click in the first post in the list", () => {
  clickFirstPost();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post11");
});

When("I open the post settings", () => {
  openPostSettings();
  Cypress.env("vrtActive") && cy.screenshot("post12");
});

When("I delete the post", () => {
  clickDeletePost();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post13");
});

Then(
  "I see that the first post in the list has title {string} and status {string}",
  (title, status) => {
    const post = firstPostInList();
    post.should("contain.text", title);
    post.should("contain.text", status);
    Cypress.env("vrtActive") && cy.screenshot("post14");
  }
);

Then(
  "I see that there is no post with the title {string} in the post list",
  (title) => {
    const postList = getPostList();
    postList.should("not.contain.text", title);
    Cypress.env("vrtActive") && cy.screenshot("post15");
  }
);

After({ tags: "@clear" }, function () {
  filterByStatusAllPosts();
  cy.wait(2000);
  const postList = getPostListItems();
  if (postList) {
    postList.each(() => {
      clickFirstPost();
      cy.wait(2000);
      openPostSettings();
      clickDeletePost();
      cy.wait(2000);
    });
  }
  Cypress.env("vrtActive") && cy.screenshot("post16");
});

When("I clear the post title", (title) => {
  clearPostTitle();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post17");
});


When("I edit the post with title {string}", (title) => {
  setPostTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post18");
});

When("I update the new post", () => {
  updatePostNow();
  cy.wait(2000);
  Cypress.env("vrtActive") && cy.screenshot("post19");
});