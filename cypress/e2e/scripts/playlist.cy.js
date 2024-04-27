import musicPageSpotifyFlow from "./musicPageSpotifyFlow.cy";

describe("playlist",() =>{
    before(() =>{
        musicPageSpotifyFlow.openNavigator();
    });

    it("Add and Delete", () => {
        // 1. Validar el texto "Crea tu primera playlist"
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.WxM1eb7qnneSkMiT4dvw > div:nth-child(2) > div > section:nth-child(1) > div.fIgbQ9qpINdyy__tkaHi > span.Text__TextElement-sc-if376j-0.ksSRyh.encore-text-body-medium-bold").should("contain", "Create your first playlist");

        // 2. Dar click al botón "Crear playlist"
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.WxM1eb7qnneSkMiT4dvw > div:nth-child(2) > div > section:nth-child(1) > div.wv308QWnPnkI8n0GdqYO").click();

        // 3. Esperar a que se muestren los elementos después de hacer clic
        cy.wait(2000);

        // 4. Hacer clic en el botón "Iniciar sesión"
        cy.get(".I2hCY2G1sJIBaTtEfJt_ > .y9bkifFKNExwjaoINLm9 > .Button-sc-qlcn5g-0.eLtwKe > .ButtonInner-sc-14ud5tc-0.gQWWCO.encore-inverted-light-set").click();

        // 5. Esperar a que la página se actualice y el campo de correo electrónico esté disponible
        cy.get("#login-username").click().type("oscargranadosc02@gmail.com");
        cy.get("#login-password").click().type("Gran*OsPra89!");
        cy.wait(2000);
        cy.get("#login-button > span.ButtonInner-sc-14ud5tc-0.liTfRZ.encore-bright-accent-set").click();

        // 7. Esperar a que se cargue la página y hacer clic en un elemento
        cy.url().should('not.eq', 'about:blank');
        cy.wait(8000);
        cy.get("#Desktop_LeftSidebar_Id > nav > div.lHJd4oSttKLxkxuoZ0Lr.wM72343CksOCaL3bZvKK > div.hgJel0bLlS_1Uf0EIfSA > div.cZ3IJprhLYLVtLoxVtDe > div > button > span > svg").click();
        cy.wait(3000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(1) > div.q8AZzDc_1BumBHZg0tZb > div > div > h2 > a").should("contain", "Episodes for you")
        cy.wait(5000);
        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div > div > section:nth-child(1) > div.iKwGKEfAfW7Rkx2_Ba4E.Z4InHgCs2uhk0MU93y_a.deJGxfMNXUc8uApEGgoQ.fJTotRs7ANTq1nrBwlqA > div:nth-child(1) > div.CardButton-sc-g9vf2u-0.doNNoL").click();
        cy.wait(2000);
        cy.get('span.IconWrapper__Wrapper-sc-16usrgb-0.hYdsxw').then($element => {
            // Obtener el elemento DOM real desde el objeto jQuery
            const el = $element[0];

            // Crear un evento de clic
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });

            // Disparar el evento de clic en el elemento
            el.dispatchEvent(clickEvent);
        });

        /*6. Delete a song
        cy.wait(8000);

        cy.get("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div.main-view-container > div.main-view-container__scroll-node > div:nth-child(2) > div.main-view-container__scroll-node-child > main > section > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > button.Button-sc-1dqy6lx-0.gKQqzz > span").click();
        cy.get("#curation-sheet-list > div > div:nth-child(2) > div > div > div:nth-child(2) > li:nth-child(1) > button > div > div.Areas__HeaderArea-sc-8gfrea-3.TJKQw > div.Areas__InteractiveArea-sc-8gfrea-0.Areas__TrailingSlot-sc-8gfrea-7.bJSfgC.jpzxju > div > svg.Svg-sc-ytk21e-0.gacXSA > path").click();
        cy.get("#context-menu > form > div.X5mwWAw7ijxPvQOoabzQ > button.Button-sc-qlcn5g-0.eLtwKe > span").click();*/

    });
})


