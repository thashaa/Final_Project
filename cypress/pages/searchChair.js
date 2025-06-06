class searchChair{
    visit(){
        cy.visit("https://www.amazon.com/")
    }
    searchingChair(){
        cy.get('input[placeholder="Search Amazon"]').type('Chair');
        cy.get('input[value="Go"]').click();
    }
    filterRange(){
        cy.get('[data-action="a-dropdown-button"]').click();
        cy.get('.a-dropdown-item').should('be.visible');
        cy.get('#s-result-sort-select_2').click();

    }
    getNonSponsoredFirstRowLastItem() {
        return cy.xpath('//div[@data-component-type="s-search-result" and not(.//span[contains(text(), "Sponsored")])]')
                .wait(3000)
                .should('be.visible')
                .then($items => {
                    const firstRow = Array.from($items).slice(0, 5);
                    const lastItem = firstRow[firstRow.length - 1];

                    this.storedName = lastItem.querySelector('h2')?.textContent.trim();
                    this.storedPrice = lastItem.querySelector('.a-price .a-price-whole')?.textContent.trim();

                cy.log('Item Name: ' + this.storedName);
                cy.log('Item Price: ' + this.storedPrice);

                return cy.wrap(lastItem).as('selectedItem');
                });
    }
    clickSelectedItem() {
        cy.get('@selectedItem').find('a.a-link-normal').first().click();
    }

    validateProductName(){
        cy.get('#titleSection').invoke('text').then(detailName => {
        expect(detailName.trim()).to.include(this.storedName.substring(0, 10).trim());
      });
    }

    validateProductPrice() {
    cy.get('span.reinventPricePriceToPayMargin span').eq(3)
      .first()
      .invoke('text')
      .then(detailPrice => {
        expect(detailPrice.trim()).to.include(this.storedPrice.substring(0, 10).trim());
      });
  }
    


}
export default new searchChair; 