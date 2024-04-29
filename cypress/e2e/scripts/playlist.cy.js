import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("playlist",() =>{
    before(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("Add playlist/library and Delete song", () => {
        //*6. Create a library*/
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.WxM1eb7qnneSkMiT4dvw > div:nth-child(2) > div > section:nth-child(1) > div.fIgbQ9qpINdyy__tkaHi > span.Text__TextElement-sc-if376j-0.ksSRyh.encore-text-body-medium-bold").should("contain", "Create your first playlist");
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.WxM1eb7qnneSkMiT4dvw > div:nth-child(2) > div > section:nth-child(1) > div.wv308QWnPnkI8n0GdqYO").click();
        cy.wait(2000);
        // Click in Log in
        cy.get(".I2hCY2G1sJIBaTtEfJt_ > .y9bkifFKNExwjaoINLm9 > .Button-sc-qlcn5g-0.eLtwKe > .ButtonInner-sc-14ud5tc-0.gQWWCO.encore-inverted-light-set").click();
        cy.get("#login-username").click().type("oscargranadosc02@gmail.com");
        cy.get("#login-password").click().type("Gran*OsPra89!");
        cy.wait(2000);
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();
        //Wait until the page is loaded
        cy.url().should('not.eq', 'about:blank');
        cy.wait(10000);
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.cZ3IJprhLYLVtLoxVtDe > div > button > span > svg").click();
        cy.wait(4000);
        cy.contains("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(2) > div.q8AZzDc_1BumBHZg0tZb > div > div > h2", "Episodes for you").click({ force: true });
        cy.wait(5000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(2) > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a.deJGxfMNXUc8uApEGgoQ.fJTotRs7ANTq1nrBwlqA > div:nth-child(1) > div.CardButton-sc-g9vf2u-0.doNNoL").click();
        //cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(1) > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a.deJGxfMNXUc8uApEGgoQ.fJTotRs7ANTq1nrBwlqA > div:nth-child(1) > div.CardButton-sc-g9vf2u-0.doNNoL").click({ force: true });
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
        /*7. Create a playlist*/
        cy.contains("#context-menu > ul > li:nth-child(1) > button > span","Create a new playlist").click();
        cy.wait(3000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > section > div > div > input").click({force: true}).type("Ed Sheeran");
        cy.wait(5000);
        //cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div").click();
        /*Song # 1*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div").click({force: true});
        cy.wait(3000);
        /*Song # 2*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div.contentSpacing > div.sAPXlA_oxu_8x1Cn0NTC > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div > div.PAqIqZXvse_3h6sDVxU0 > button").click({force: true});
        cy.wait(2000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div:nth-child(2) > div:nth-child(2) > div > div > button > span > svg").click({force: true});

        /*8. Delete a song*/
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.WxM1eb7qnneSkMiT4dvw > div:nth-child(2) > div > div:nth-child(2) > ul > div > div:nth-child(2) > li:nth-child(2) > div > div.RowButton-sc-xxkq4e-0.hIehTT").click();
        cy.wait(2000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div:nth-child(2) > div:nth-child(2) > div > div > button > span > svg").click({force: true}); // ...
        /*delete dropdown*/
        cy.get("#context-menu > ul > li:nth-child(4) > button > span").click(); //delete
        cy.wait(4000);
        cy.get("[data-testid=\"more-button\"]").click({force: true});
        cy.wait(3000);
        cy.get('#popup-selector').should('be.visible');
        cy.get('#popup-selector').should('contain', 'Removed');
        //cy.get("#\\31 714425567596\\.6475 > div > div > div > span").should("contain","Removed")
    //#\31 714431110820\.722 > div > div > div > span

        /*cy.wait(8000);
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.WxM1eb7qnneSkMiT4dvw > div:nth-child(2) > div > div:nth-child(2) > ul > div > div:nth-child(2) > li.NxEINIJHGytq4gF1r2N1.or84FBarW2zQhXfB9VFb.odS2IW9wfNVHhkhc0l_X.O0AN8Ty_Cxd4iLwyKATB.XNjgtSbyhshr7YQcVvry.vSC5QuwmzUhqUNWdMTJ5 > div > div.RowButton-sc-xxkq4e-0.hIehTT").click();
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.GlueDropTarget.GlueDropTarget--tracks.GlueDropTarget--local-tracks.GlueDropTarget--episodes.GlueDropTarget--albums > section > div.rezqw3Q4OEPB1m4rmwfw > div:nth-child(2) > div:nth-child(2) > div > div > button").click();
        /*delete
        cy.get("#context-menu > ul > li:nth-child(4) > button > span").click();
        cuando aparezca un pop up que contenga
        cy.get("body > div:nth-child(35) > div > div > div").should("contain","Delete from Your Library?").click();
        cy.get("body > div:nth-child(35) > div > div > div > div > button.Button-sc-qlcn5g-0.kFwvoe > span").click();
        cy.get.("").


        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > button.Button-sc-1dqy6lx-0.gKQqzz > span").click();
        cy.get("#curation-sheet-list > div > div:nth-child(2) > div > div > div:nth-child(2) > li:nth-child(1) > button > div > div.Areas__HeaderArea-sc-8gfrea-3.TJKQw > div.Areas__InteractiveArea-sc-8gfrea-0.Areas__TrailingSlot-sc-8gfrea-7.bJSfgC.jpzxju > div > svg.Svg-sc-ytk21e-0.gacXSA > path").click();
        cy.get("#context-menu > form > div.X5mwWAw7ijxPvQOoabzQ > button.Button-sc-qlcn5g-0.eLtwKe > span").click();*/

    });
    afterEach(() => {
        cy.log("***** TEST COMPLETED SUCCESSFULLY. *****");
    });
})


