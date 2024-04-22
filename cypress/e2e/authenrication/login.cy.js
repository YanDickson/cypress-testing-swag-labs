import signInData from '../../fixtures/loginTestUsers.json';
import { loginPage } from '../../page_objects/loginPage';

describe('Verify uses can log in', () => {

  const userCredentialsList = signInData.users;
  
    userCredentialsList.forEach(userCredential => {
      it(`should log in the ${userCredential.username} user`, () => {
        cy.visit(loginPage.pageUrl);
        loginPage.loginUser(userCredential.username, userCredential.password)
        cy.url().should('include', '/inventory.html');
      });
    });

});
