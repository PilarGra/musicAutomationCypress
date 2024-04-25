class musicPageSpotifyFlow {
    static openNavigator() {
        console.log("Iniciando prueba de proceso de navegación en Spotify!")
        cy.visit("https://open.spotify.com/intl-es");
        cy.wait(7000);
    }
}
    before(() => {
      musicPageSpotifyFlow.openNavigator();
      cy.get("#onetrust-group-container")
        cy.get("#onetrust-close-btn-container > button").click();
});

export default musicPageSpotifyFlow;