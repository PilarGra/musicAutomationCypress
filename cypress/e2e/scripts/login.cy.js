import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("login",() =>{
    beforeEach(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("Login",() => {
        /*1. Login Successfully*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > header > div.rwdnt1SmeRC_lhLVfIzg > div.LKFFk88SIRC9QKKUWR5u > button.Button-sc-qlcn5g-0.bRejwy > span")
            .should('be.visible')
            .click();
        cy.get("#login-username").click().type("oscargranadosc02@gmail.com");
        cy.get("#login-password").click().type("Gran*OsPra89!");
        cy.wait(2000);
        cy.get("#root > div > div.sc-jfvxQR.sc-eJDSGI.jQJvTx.kYMNEV > div > div > div.Group-sc-u9bcx5-0.kWRxyd.sc-fEXmlR.lanGwB > div:nth-child(3) > div > label > span.Wrapper-sc-16y5c87-0.ioubZY").click();
        cy.wait(3000);
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();
        cy.wait(7000);
    });

    it("Invalid Login",() => {
        /*2. Invalid Login*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > header > div.rwdnt1SmeRC_lhLVfIzg > div.LKFFk88SIRC9QKKUWR5u > button.Button-sc-qlcn5g-0.bRejwy", { timeout: 10000 })
            .should('be.visible')
            .click();
        cy.get("#login-username").click().type("oscargranadosc02@.com");
        cy.get("#login-password").click().type("1234");
        cy.wait(2000);
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();
        cy.get("#root > div > div.sc-jfvxQR.sc-eJDSGI.jQJvTx.kYMNEV > div > div > div.sc-iveFHk.kstyxm").should("contain", "Incorrect username or password.").scrollIntoView();
    });

    afterEach(() => {
        cy.log("***** TEST COMPLETED SUCCESSFULLY. *****");
    });

    after(() => {
        cy.wait(5000);
    });
})