const selInputEmail = "input.email";
const selButtonLogin = "button.login";
const selInputPassword = "input.password";
const selErrorMessageEmail = "/html/body/div[2]/div/main/div/div/section/p";

export function setEmail(email) {
  cy.get(selInputEmail).type(email);
}

export function setPassword(password) {
  cy.get(selInputPassword).type(password);
}

export function clickLogin() {
  cy.get(selButtonLogin).click();
}

export function errorMessageEmail() {
  return cy.xpath(selErrorMessageEmail).last();
}
