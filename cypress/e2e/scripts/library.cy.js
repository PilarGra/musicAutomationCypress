import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("library",() =>{
    before(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("Create library", () => {
        //*10. Create a library*/
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div:nth-child(1) > header > div > span > button > span > svg").click();
        cy.get("#context-menu > ul > li > button > span").click();
        cy.wait(2000);
        // Click on Log in
        cy.get("#tippy-1 > div > div.tippy-content > div > div > div.I2hCY2G1sJIBaTtEfJt_ > div.y9bkifFKNExwjaoINLm9 > button.Button-sc-qlcn5g-0.eLtwKe > span").click();
        cy.get("#login-username").click().type("oscargranadosc02@gmail.com");
        cy.get("#login-password").click().type("Gran*OsPra89!");
        cy.wait(3000);
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();
        cy.wait(8000);
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.cZ3IJprhLYLVtLoxVtDe > div > button").click();
        cy.wait(5000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(9) > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a.deJGxfMNXUc8uApEGgoQ.fJTotRs7ANTq1nrBwlqA > div:nth-child(2) > div.CardButton-sc-g9vf2u-0.doNNoL").scrollIntoView().click();
        cy.wait(3000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div:nth-child(2) > div:nth-child(2) > div > div > button:nth-child(2) > span > svg").click({force: true});
        cy.wait(5000);

        /*11. Save a song on a Library*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.oIeuP60w1eYpFaXESRSg.oYS_3GP9pvVjqbFlh9tq > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2) > div:nth-child(1) > div > div.PAqIqZXvse_3h6sDVxU0 > button.Button-sc-1dqy6lx-0.fpsDgO.otqy2yIt_BVXLjoundpp > span > svg").click({force: true});
        cy.wait(5000);

        /*12.Remove a library*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget > section > div.rezqw3Q4OEPB1m4rmwfw > div:nth-child(2) > div:nth-child(2) > div > div > button.Button-sc-1dqy6lx-0.gKQqzz > span > svg > path").click({force: true});
    });

    afterEach(() => {
        cy.log("***** TEST COMPLETED SUCCESSFULLY. *****");
        musicPageSpotifyFlow.closeNavigator();
    });
});
