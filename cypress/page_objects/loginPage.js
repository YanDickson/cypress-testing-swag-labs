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

  /**
   * Logs in the user to the application
   */
  loginUser(username, password) {
    this.usernameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  };
};

export const loginPage = new LoginPage('/');

