//import {TRwebdriver} from '../../common/webdriver';
//import {executeStatement} from '../../common/sql';
const LoginPage = require('../pages/login_page');

//import {short, medium, long} from '../../common/timeout';

describe('Init', () => {
    
    //Test Cases
    /*
    it('checks for wait(s)', () =>{
        try
        {
            browser.url('http://www.way2automation.com/angularjs-protractor/banking/#/login')
            $('button=Customer Login').click();
            $('select#userSelect').isDisplayed()
            $('select#userSelect').selectByIndex(1)
            $('button=Login').click();
            $('select#accountSelect').selectByVisibleText("1002")
            assert.equal($('body > div.ng-scope > div > div.ng-scope > div > div:nth-child(1) > strong > span').getText() , "Hermoine Granger")
            $('select#accountSelect').selectByVisibleText("1002")
            //console.log($('body > div.ng-scope > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(1)').getText())
            browser.pause(3000)
        }
        finally{
            browser.saveScreenshot('test-data/images/test1.png')
        }
    })
    */

    it('Create User', () =>{
        try
        {
            browser.url('http://www.way2automation.com/angularjs-protractor/banking/#/login')
            $('button=Bank Manager Login').click();

            //Add a Customer
            $('button=Add Customer').click();
            $('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(1) > input').setValue("Ron")
            $('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(2) > input').setValue("King")
            $('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(3) > input').setValue("123456")
            $('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > button').click();

            //Open a New Account
            $('button=Open Account').click();
            $('select#userSelect').selectByVisibleText("Ron King")
            $('select#currency').selectByVisibleText("Rupee")
            $('button=Process').click();

            //Verfiy Customers Name
            $('button=Customers').click();

        }
        finally{
            browser.saveScreenshot('test-data/images/test1.png')
        }
    })

    it('Login and Deposit', () =>{
        try
        {
            browser.url('http://www.way2automation.com/angularjs-protractor/banking/#/login')
            LoginPage.customerloginButton.click();
            LoginPage.usernameField.isDisplayed()
            LoginPage.usernameField.selectByIndex(1)
            LoginPage.loginButton.click();
            assert.equal(LoginPage.usernameLabel.getText() , "Hermoine Granger")
            LoginPage.SelectAccount.selectByVisibleText("1002")
            //browser.pause(3000)
            $('button=Deposit').click();
            $('body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > div > input').setValue("1")
            $('body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > button').click();
            console.log($('body > div.ng-scope > div > div.ng-scope > div > div:nth-child(3) > strong:nth-child(2)').getText())
        }
        finally{
            browser.saveScreenshot('test-data/images/test2.png')
        }
    })

});