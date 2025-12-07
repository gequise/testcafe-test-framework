import { Selector } from 'testcafe';


class LoginPage {
    usernameInput: Selector;
    passwordInput: Selector;
    loginButton: Selector;
    forgetLoginButton: Selector;
    welcomeText: Selector;

    constructor () {
        this.usernameInput  = Selector('input[name=\"username\"]');
        this.passwordInput = Selector('input[name=\"password\"]');
        this.loginButton = Selector('input[type="submit"][value="Log In"]');
        this.forgetLoginButton =Selector('a').withText('Forgot login info?');
        this.welcomeText = Selector('p.smallText')
    }
}

export default new LoginPage();
