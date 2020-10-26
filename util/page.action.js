const BrowserSession = require("./browser.session")

class PageActions {

    async setValue(element, value) {
        (await BrowserSession.pageOperation()).type(element, value)
    }

    async clickOnElement(element) {
        (await BrowserSession.pageOperation()).click(element)
    }

    async waitingForElement(element) {
        (await BrowserSession.pageOperation()).waitForSelector(element)
    }

    async navigatePromise() {
        (await BrowserSession.pageNavigationPromise())
    }

    async bringPageToFront() {
        (await BrowserSession.pageOperation()).bringToFront()
    }

    async timeout() {
        (await BrowserSession.pageOperation()).waitForTimeout(50000)
    }
}

module.exports = new PageActions