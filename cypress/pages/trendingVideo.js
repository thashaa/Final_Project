class trendingVideo{
    visit(){
        cy.visit("https://www.youtube.com/")
    }
    navigateToTrendingPage(){
        cy.get('a[title="Trending"]').click();
        cy.wait(3000);
        cy.contains('span', 'Trending').should('be.visible');
    }
    goToMoviesTrend(){
        cy.get('#tabsContent').contains('Film').click();
        cy.get('yt-tab-shape[role="tab"][tab-title="Film"]').should('have.attr', 'aria-selected', 'true');
    }
    getTheThirdVideo(index){
        return cy.get('ytd-video-renderer').eq(index);
    }
    storeTrendingVideoInfo(index) {
    this.getTheThirdVideo(index).within(() => {
        cy.get('#video-title').invoke('text').as('videoTitle');
        cy.get('ytd-channel-name').invoke('text').as('channelName');
        });
    }
    clickTheThirdVideo(index) {
        this.getTheThirdVideo(index).click();
    }

    validateVideoTitleMatches(expectedTitle) {
        cy.get('h1.title').should('contain.text', expectedTitle.trim());
    }

    validateChannelNameMatches(expectedChannel) {
        cy.get('ytd-channel-name').should('contain.text', expectedChannel.trim());
    }
}


export default new trendingVideo; 