const github = require('../locators/github.locators');
const PageActions = require('../util/page.action')

class GitHubLogin {

    // User lands in github main page
    // User will enter username and email id
    async mainPage(username, email){
        console.log('------username------', username)
        console.log('------email------', email)
        await PageActions.waitingForElement(github.USERNAME)
        await PageActions.setValue(github.USERNAME,username)
        await PageActions.setValue(github.EMAIL,email)
    }

    // User clicks on sign in link
    // User will enter user email and password
    // User will click on sign in button
    async signInPage(emailAddress,password) {
        console.log("------emailAddress----------", emailAddress)
        console.log("------password----------", password)
        await PageActions.clickOnElement(github.SINGINLINK)
        await PageActions.navigatePromise()
        await PageActions.waitingForElement(github.EMAILADDRESS)
        await PageActions.setValue(github.EMAILADDRESS, emailAddress)
        await PageActions.setValue(github.PASSWORD, password)
        await PageActions.clickOnElement(github.SINGINBTN)
        await PageActions.navigatePromise()
    }
}

module.exports = new GitHubLogin