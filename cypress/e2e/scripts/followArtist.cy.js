import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("playlist",() =>{
    before(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("Follow an Artist",() => {
        /*9. Follow an Artist*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(1) > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a.deJGxfMNXUc8uApEGgoQ.fJTotRs7ANTq1nrBwlqA > div:nth-child(3) > div.CardButton-sc-g9vf2u-0.doNNoL").click();
        cy.wait(3000);
        cy.get('button.Button-sc-y0gtbx-0.aejTT').click({ force: true });

        //Click "Log in"
        cy.get("#tippy-1 > div > div.tippy-content > div > div > div.I2hCY2G1sJIBaTtEfJt_ > div.y9bkifFKNExwjaoINLm9 > button.Button-sc-qlcn5g-0.eLtwKe").click();
        cy.wait(3000);
        cy.get("#login-username").click().type("oscargranadosc02@gmail.com");
        cy.get("#login-password").click().type("Gran*OsPra89!");
        cy.wait(2000);
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();
        cy.wait(2000);
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.cZ3IJprhLYLVtLoxVtDe > div > button").click();
        cy.wait(7000);
        //Click on follow
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div.EmeHQXR87mUskYK6xEde > div:nth-child(2) > div:nth-child(2) > div > div > button.Button-sc-y0gtbx-0.aejTT").click({force:true});

        //10. Stop following
        cy.contains("Following").should("be.visible");
    });

    afterEach(() => {
        cy.log("***** TEST COMPLETED SUCCESSFULLY. *****");
    });
});