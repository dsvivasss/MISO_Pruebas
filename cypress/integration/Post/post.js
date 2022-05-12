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

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
});

Given("I login into the admin page", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(Cypress.env("admin_password"));
  clickLogin();
  cy.wait(2000);
});

Given("I go to the new post page", () => {
  clickNewPost();
  cy.wait(2000);
});

When("I create a new post with title {string}", (title) => {
  setPostTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
});

When("I publish the new post", () => {
  publishPostNow();
  cy.wait(2000);
});

When("I return to the posts list", () => {
  backToPosts();
  cy.wait(2000);
});

When("I filter posts by status Published", (status) => {
  filterByStatusPublished();
  cy.wait(1000);
});

When("I filter posts by status Draft", (status) => {
  filterByStatusDraft();
  cy.wait(1000);
});

When("I filter posts by status Scheduled", (status) => {
  filterByStatusScheduled();
  cy.wait(1000);
});

When("I schedule the new post", (title) => {
  publishPostScheduled();
  cy.wait(2000);
});

When("I click in the first post in the list", () => {
  clickFirstPost();
  cy.wait(2000);
});

When("I open the post settings", () => {
  openPostSettings();
});

When("I delete the post", () => {
  clickDeletePost();
  cy.wait(2000);
});

Then(
  "I see that the first post in the list has title {string} and status {string}",
  (title, status) => {
    const post = firstPostInList();
    post.should("contain.text", title);
    post.should("contain.text", status);
  }
);

Then(
  "I see that there is no post with the title {string} in the post list",
  (title) => {
    const postList = getPostList();
    postList.should("not.contain.text", title);
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
});

When("I clear the post title", (title) => {
  clearPostTitle();
  cy.wait(2000);
});


When("I edit the post with title {string}", (title) => {
  setPostTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
});

When("I update the new post", () => {
  updatePostNow();
  cy.wait(2000);
});