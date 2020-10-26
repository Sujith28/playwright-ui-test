const { chromium } = require('playwright');


class BrowserSession {
    async startTest(domain, headlessStatus) {
        this.browser = await chromium.launch({ headless: headlessStatus, args: ['--start-maximized'] })
        let context = await this.browser.newContext({ viewport: null });
        this.page = await context.newPage();
        this.navigationPromise = this.page.waitForNavigation()
        await this.page.goto(domain, { waitUntil: 'networkidle' });
    }

    async endTest() {
        await this.browser.close();
    }

    async pageOperation() {
        return this.page
    }

    async pageNavigationPromise() {
        return await this.navigationPromise
    }

}
module.exports = new BrowserSession