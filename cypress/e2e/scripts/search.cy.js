import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("search",() =>{
    before(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("Search",() => {
        /*3. Search by Artist*/
        cy.get("#Desktop_LeftSidebar_Id > nav > div:nth-child(1) > ul > li:nth-child(2) > a").click();
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > header > div.rovbQsmAS_mwvpKHaVhQ > div > div > form > input").type("Bethoven");
        cy.wait(3000);
        cy.get("#searchPage > div > div > section.vKsgiy0W3aHYmZUlwHoQ.QyANtc_r7ff_tqrf5Bvc.Shelf > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a.deJGxfMNXUc8uApEGgoQ.fJTotRs7ANTq1nrBwlqA > div > div > div > div.cofBW8sjoBtMAmzDgqKt > a > div").should("contain", "Bethoven");
        cy.wait(5000);

        /*4. Search by genre*/
        cy.get("#Desktop_LeftSidebar_Id > nav > div:nth-child(1) > ul > li:nth-child(2) > a").click();
        cy.get("#searchPage > div > div > div > section > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a > a:nth-child(7) > div").click();
        cy.wait(3000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > div.Liif5fNYkY903HPAQd1N > div > div.RP2rRchy4i8TIp1CTmb7 > span > h1").should("contain", "Pop");
        cy.wait(5000);
    });

    afterEach(() => {
        cy.log("***** TEST COMPLETED SUCCESSFULLY. *****");
    });

    //Close navigator
    after(()=>{
        musicPageSpotifyFlow.closeNavigator();
    })
})
