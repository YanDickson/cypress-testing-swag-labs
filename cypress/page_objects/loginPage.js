export class LoginPage {
  constructor(pageUrl) {
    this._pageUrl = pageUrl;
  };

  get pageUrl() {
    return this._pageUrl;
  };

  get usernameField() {
    return cy.get('[data-test="username"]');
  };

  get passwordField() {
    return cy.get('[data-test="password"]');
  };

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  };

  get loginError() {
    return cy.get('[data-test="error"]');
  };

  loginUser(username, password) {
    this.usernameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  };

  submitLoginFormWithUsernameOnly(username) {
    this.usernameField.type(username);
    this.loginButton.click();
  };

  submitLoginFormWithPasswordOnly(password) {
    this.passwordField.type(password);
    this.loginButton.click();
  };
};

export const loginPage = new LoginPage('/');

