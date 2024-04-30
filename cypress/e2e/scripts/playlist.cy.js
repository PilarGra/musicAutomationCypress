import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("playlist",() =>{
    before(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("Create playlist, add/delete song", () => {
        //*6. Create a playlist*/
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.WxM1eb7qnneSkMiT4dvw > div:nth-child(2) > div > section:nth-child(1) > div.fIgbQ9qpINdyy__tkaHi > span.Text__TextElement-sc-if376j-0.ksSRyh.encore-text-body-medium-bold").should("contain", "Create your first playlist");
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.WxM1eb7qnneSkMiT4dvw > div:nth-child(2) > div > section:nth-child(1) > div.wv308QWnPnkI8n0GdqYO").click();
        cy.wait(2000);
        // Click in Log in
        cy.get(".I2hCY2G1sJIBaTtEfJt_ > .y9bkifFKNExwjaoINLm9 > .Button-sc-qlcn5g-0.eLtwKe > .ButtonInner-sc-14ud5tc-0.gQWWCO.encore-inverted-light-set").click();
        cy.get("#login-username").click().type("oscargranadosc02@gmail.com");
        cy.get("#login-password").click().type("Gran*OsPra89!");
        cy.wait(5000);
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();
        //Wait until the page is loaded
        cy.url().should('not.eq', 'about:blank');
        cy.wait(10000);
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.cZ3IJprhLYLVtLoxVtDe > div > button > span > svg").click();
        cy.wait(10000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(2) > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a.deJGxfMNXUc8uApEGgoQ.fJTotRs7ANTq1nrBwlqA > div:nth-child(1) > div.CardButton-sc-g9vf2u-0.doNNoL").click();
        cy.wait(2000);
        cy.get('span.IconWrapper__Wrapper-sc-16usrgb-0.hYdsxw').then($element => {
            // Get DOM element from objet jQuery
            const el = $element[0];
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            el.dispatchEvent(clickEvent);
        });
        /*7. Add content to the playlist*/
        cy.contains("#context-menu > ul > li:nth-child(1) > button > span","Create a new playlist").click();
        cy.wait(6000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > section > div > div > input").click({force: true}).type("Ed Sheeran");
        cy.wait(5000);

        /*Song # 1*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div").click({force: true});
        cy.wait(7000);
        /*Song # 2*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.sAPXlA_oxu_8x1Cn0NTC > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div > div.PAqIqZXvse_3h6sDVxU0 > button").click({force: true});
        cy.wait(5000);
    });

    afterEach(() => {
        cy.log("***** TEST COMPLETED SUCCESSFULLY. *****");
        musicPageSpotifyFlow.closeNavigator();
    });
})


