const BrowserSession = require("./browser.session")

class PageActions {

    async setValue(element, value) {
        await (await BrowserSession.pageOperation()).fill(element, value)
    }

    async clickOnElement(element) {
        await (await BrowserSession.pageOperation()).click(element)
    }

    async waitingForElement(element) {
        await (await BrowserSession.pageOperation()).waitForSelector(element)
    }

    async navigatePromise() {
        await (await BrowserSession.pageNavigationPromise())
    }

    async bringPageToFront() {
        await (await BrowserSession.pageOperation()).bringToFront()
    }

    async timeout() {
        await (await BrowserSession.pageOperation()).waitForTimeout(50000)
    }
}

module.exports = new PageActions