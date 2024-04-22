# cypress-testing-swag-labs
## About
Testing the Swag Labs website with the cypress.io test automation tool. This website was created by Sauce Labs for paracticing software testing.

Tests are created for the following features/wprkflows:
- User login

# Project Setup
1. Clone the repository.
2. Navigate to the root of the project directory.
3. Execute the command `npm install` to install. all project dependencies.

# Executing Tests

## Locally
Tests can be executed via the Cypress IDE. From the UI tests can be seen running on the browser. Follow these steps:
1. From the command line run the command `npx cypress open`.
2. Select the "E2E Testing" option in the Cypress UI.
3. Select the browser, Chrome, Electron or Firefox.
4. Click on "Start E2E Testing in {selected_browser}".
5. Click on the test you would like to execute.

Tests can also be executed headlessly from the command line. To do this run the command `npx cypress run` to run all tests. 

# Project Design
The base URL was specified in the `cypress.config.js` file so as to shorten the URLs 
A data-driven approach was taken particulary for the login tests where multiple users are being used for testing.
