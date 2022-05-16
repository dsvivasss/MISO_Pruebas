const selLinkStaff = 'a[href="#/settings/staff/"]';
const selLinkSettings = 'a[href="#/settings/"]';
const selLinkInvitePeople = "/html/body/div[2]/div/main/section/div/header/section/button";
const selButtonSendInvitation = "/html/body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button";
const selInputRole = "/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[1]/div[2]";
const selInputEmail = "input.email";
const selListInviteItem = "/html/body/div[2]/div/main/section/section/section[1]/div/div/article/div[1]/div/h3";
const selRevokeButton = "/html/body/div[2]/div/main/section/section/section[1]/div/div/article/div[2]/div/a[1]";
const selPrompt = "/html/body/div[2]/div/aside/article/div[2]/span";

// export function clickSettings() {
//     cy.get(selLinkSettings).click();
// }

export function clickStaff() {
    cy.get(selLinkStaff).click();
}

export function clickInvitePeople() {
    return cy.xpath(selLinkInvitePeople).click();
}

export function setInviteEmail(email) {
  cy.get(selInputEmail).type(email);
}

export function clickRoleAuthor() {
    return cy.xpath(selInputRole).click();
}

export function clickInviteNow() {
    return cy.xpath(selButtonSendInvitation).click();
}

export function clickRevoke() {
    return cy.xpath(selRevokeButton).click();
}

export function lastInviteInList() {
    return cy.xpath(selListInviteItem).last();
}

export function lastPrompt() {
    return cy.xpath(selPrompt).last();
}

