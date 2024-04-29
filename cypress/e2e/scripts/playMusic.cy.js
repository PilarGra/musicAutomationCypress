import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("playMusic",() =>{
    before(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("PLay",() => {
        /*4. Play music*/
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(1) > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a.deJGxfMNXUc8uApEGgoQ.fJTotRs7ANTq1nrBwlqA > div:nth-child(1)").click();
        cy.wait(3000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div.EmeHQXR87mUskYK6xEde > div:nth-child(2) > div:nth-child(2) > div > div > div > button > span").click({ force: true });
        cy.wait(3000);
        cy.get("#main > div > div.dialog.ftlV6Ixmq4wkKMg7hJ1v > div > div.SVnAziPF2z_cgAGrp6He.IDHZCFcj1ynmYu6Sm5SR > div.miG_SXrw265mkozdEHrJ > p > a").click();
        cy.wait(2000);
        cy.get("#login-username").click().type("oscargranadosc02@gmail.com");
        cy.get("#login-password").click().type("Gran*OsPra89!");
        // Iniciar Sesión button
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();
        cy.wait(5000);
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.cZ3IJprhLYLVtLoxVtDe > div > button > span > svg > path").click();
        cy.wait(2000);

        // Click on play / pause
        cy.get('[data-testid="control-button-playpause"]').then($button => {
            const icon = $button.find('svg').attr('aria-hidden');
            if (icon === 'false') {
                // If icon shows that the music is paused, click on play
                cy.get('[data-testid="control-button-playpause"]').click({ force: true });
            } else {
                // If icon shows that the music is paused, wait 10 seconds and click on play
                cy.wait(10000);
                cy.get('[data-testid="control-button-playpause"]').click({ force: true });
            }
        });
    })
})