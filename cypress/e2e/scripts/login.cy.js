import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("login",() =>{
    before(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("Login Exitoso",() => {
        /*1. Login Exitoso*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > header > div.rwdnt1SmeRC_lhLVfIzg > div.LKFFk88SIRC9QKKUWR5u > button.Button-sc-qlcn5g-0.bRejwy > span").click();
        cy.get("#login-username").click().type("oscargranadosc02@gmail.com");
        cy.get("#login-password").click().type("Gran*OsPra89!");
        cy.wait(5000);
        cy.get("#root > div > div.sc-jfvxQR.sc-eJDSGI.jQJvTx.kYMNEV > div > div > div.Group-sc-u9bcx5-0.kWRxyd.sc-fEXmlR.lanGwB > div:nth-child(3) > div > label > span.Wrapper-sc-16y5c87-0.ioubZY").click();
        cy.wait(5000);
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();
        //cy.get("#main > div > div > div > div > div.SAvutxFsWpINsq8pSOqb > div.E34FrewmewkuBM1IDQsg > div.eI1lPxthARSXeWNvjngF > span").should("contain", "Buenas");
        cy.wait(7000);
    });

    // Código para cerrar el navegador
    after(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then(win => win.close());
    });
})