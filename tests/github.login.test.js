const BrowserSession = require('../util/browser.session')
const GitHubLogin = require('../pages/github.page')
const { username, email } = require('../config/github.main')
const { emailAddress, password } = require('../config/github.signin')
const { url } = require('../config/url')

describe('Smoke test:', () => {

    it("As an end-user, I will login to github",
        async () => {
            await BrowserSession.startTest(url, false)
            await GitHubLogin.mainPage(username, email)
            // await GitHubLogin.signInPage(emailAddress, password)
        }
    );

},
);
