import signInData from '../../fixtures/loginTestUsers.json';
import { loginPage } from '../../page_objects/loginPage';

describe('Verify uses can log in', () => {

  const userCredentialsList = signInData.users;

  userCredentialsList.forEach(userCredential => {
    it(`should log in the ${userCredential.username} user`, () => {
      cy.visit(loginPage.pageUrl);
      loginPage.loginUser(userCredential.username, userCredential.password);
      cy.url().should('include', '/inventory.html');
    });

    it(`should not log in the ${userCredential.username} user without a password`, () => {
      cy.visit(loginPage.pageUrl);
      loginPage.submitLoginFormWithUsernameOnly(userCredential.username);
      loginPage.loginError.should('have.text', 'Epic sadface: Password is required');
    });
  });

  it('should not login a user with no username', () => {
    cy.visit(loginPage.pageUrl);
    loginPage.submitLoginFormWithPasswordOnly(userCredentialsList[0].password);
    loginPage.loginError.should('have.text', 'Epic sadface: Username is required');
  });


  it('should not login a user with no username and no password', () => {
    cy.visit(loginPage.pageUrl);
    loginPage.loginButton.click();
    loginPage.loginError.should('have.text', 'Epic sadface: Username is required');
  });

});
