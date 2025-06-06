import trendingVideo from "../pages/trendingVideo";

describe('Search and Assert 3rd Place of Youtube Trending Video', function(){
    beforeEach(() => {
        cy.viewport(1920, 1080 )
    });
    it('E2E Search 3rd Place Youtube Trending Video', function(){
        trendingVideo.visit();
        trendingVideo.navigateToTrendingPage();
        trendingVideo.goToMoviesTrend();
        cy.wait(3000);
        trendingVideo.storeTrendingVideoInfo(2);
        trendingVideo.clickTheThirdVideo(2);
        cy.url().should('include', 'watch');

        cy.get('@videoTitle').then((title) => {
            trendingVideo.validateVideoTitleMatches(title);
        });

        cy.get('@channelName').then((channel) => {
            trendingVideo.validateChannelNameMatches(channel);
        });
    })
})