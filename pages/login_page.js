class LoginPage {
    get usernameLabel() {
      return $('body > div.ng-scope > div > div.ng-scope > div > div:nth-child(1) > strong > span');
    }
  
    get usernameField() {
      return $('select#userSelect');
    }
  
    get passwordLabel() {
      return $('app-login > div > div > form > div:nth-child(2) > div > div > label');
    }
  
    get loginButton() {
      return $('button=Login');
    }
    
    get customerloginButton() {
        return $('button=Customer Login');
    }
    
     get SelectAccount() {
        return $('select#accountSelect');
    }

    /**
     *
     * @param {String} username
     * @param {String} password
     */
    login(username, password) {
      this.usernameField.setValue(username);
      this.passwordField.setValue(password);
      this.loginButton.click();
    }
  }
  
  module.exports = new LoginPage();