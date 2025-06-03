class ticketOrder{
    visit(){
        cy.visit("https://www.agoda.com/")
    }

    chooseFlightMenu(){
        cy.get('[style="bottom: 16px; right: 16px; z-index: 1000;"] > :nth-child(1) > .aec39-flex-1 > .aec39-box').click()
        cy.get('[data-selenium="header-transportation"]').contains('Transport').click();
        cy.get('[data-testid="floater-container"]').should('be.visible').contains('Flights').click()
        cy.get('li[data-selected="true"]').contains('Flights')
    }
    inputFlightOrigin(){
        //input flight origin
        cy.get('[data-component="flight-origin-text-search"]').type('Jakarta');
        cy.get('.AutocompleteList').contains('Jakarta').click();
    }
    inputFlightDestination(){
        //input flight destination
        cy.get('[data-component="flight-destination-text-search"]').type('Singapore');
        cy.get('.AutocompleteList').contains('Singapore').click();
    }
    chooseDepartDate(){
        // Calculate tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const day = tomorrow.getDate();
        const month = tomorrow.toLocaleString('default', { month: 'long' });
        const year = tomorrow.getFullYear();

        cy.get('[data-element-name="flight-departure"]').click();
        //cy.intercept('POST', '**/bento.agoda.com/v2_1**').as('bentoTrack');
        //cy.wait('@bentoTrack');
        // Refocus to reopen the calendar if it was closed
        cy.get('[data-element-name="flight-departure"]').click();
        cy.get('#dateSelector-departure').should('be.visible');
        cy.get('.DayPicker-Month').contains(new RegExp(`^${day}$`)).click();
     }
    chooseNumberofPassenger(){
        cy.get('[data-element-name="flight-occupancy"]').click();
        cy.get('[data-component="flight-search-occupancy"]').contains('1 Passenger, Economy');
        cy.get('[data-component="flight-search-button"]').click()
    }
    chooseFirstFlightMalaysiaAirlines(){
        const malaysiaFlights = [];
        cy.get('[data-component="flight-card-container"]').each(($card) => {
  const text = $card.text();

  if (text.includes('Malaysia Airlines')) {
    cy.wrap($card)
      .scrollIntoView()
      .find('.departure-time')
      .invoke('text')
      .then((timeText) => {
        // Add time and card to an array for sorting
        const time = new Date(`1970/01/01 ${timeText.trim()}`);
        malaysiaFlights.push({ time, card: $card });
      });
  }
}).then(() => {
  // Wait for all Malaysia Airlines cards to be processed
  cy.wrap(null).then(() => {
    const earliest = malaysiaFlights.sort((a, b) => a.time - b.time)[0];

    if (earliest) {
      cy.wrap(earliest.card).find('button:contains("Pilih")').click();
    } else {
      throw new Error('No Malaysia Airlines flights found');
    }
  });
});
    }
 
}


  


export default new ticketOrder;