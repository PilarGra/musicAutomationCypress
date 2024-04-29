class musicPageSpotifyFlow {
    static openNavigator() {
        console.log("Iniciando prueba de navegación en Spotify!")
        cy.visit("https://open.spotify.com/intl-es");
        cy.wait(7000);
    }

    static closeNavigator() {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then(win => win.close());
    }
}

export default musicPageSpotifyFlow;
