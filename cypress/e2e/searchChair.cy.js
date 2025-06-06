import searchChair from "../pages/searchChair";

describe('Find Chair on Amazon.com', function(){
    beforeEach(() => {
        cy.viewport(1920, 1080 )
    });

    it('E2E Search Chair', function(){
        searchChair.visit();
        searchChair.searchingChair();
        searchChair.filterRange();
        searchChair.getNonSponsoredFirstRowLastItem().then(() => {
            searchChair.clickSelectedItem();
            searchChair.validateProductName();
            searchChair.validateProductPrice();
        });
    });
})
