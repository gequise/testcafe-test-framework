import loginPage from './page-model'

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `https://parabank.parasoft.com/parabank/index.html`;

// Tests
test('Text typing basics', async t => {
    await t
        .typeText(loginPage.usernameInput, 'gustavo')
        .typeText(loginPage.passwordInput, 'ABC123')
        .expect(loginPage.usernameInput.value).eql('gustavo')
        .click(loginPage.loginButton)
        .expect(loginPage.welcomeText.innerText).eql('Welcome gustavo gustavo', 'The Welcome text is correct');
});

