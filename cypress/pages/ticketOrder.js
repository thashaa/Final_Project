class ticketOrder{
    visit(){
        cy.visit("https://www.agoda.com/")
    }

    chooseFlightMenu(){
        //cy.get('button[aria-label="Close"]').click()
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
        cy.get('[data-component="flight-search-button"]').click();
    }

    chooseFirstFlightMalaysiaAirlines(){
       cy.get('[data-testid="filter-container"]').should('be.visible');
       cy.get('span.gzbBlj').click();
       cy.get('label[data-element-value="Malaysia Airlines"]').click();
       cy.wait(2000);
       cy.get('[data-element-name="flight-sort"]').click();
       cy.get('[data-testid="floater-container"]').should('be.visible');
       cy.get('button[aria-selected="false"]').eq(2).click();
       cy.wait(2000);
       cy.get('[data-testid="flightCard-flight-detail"]').first().click();
       cy.get('[data-testid="web-refresh-flights-card"]').should('be.visible');
           cy.get('[data-testid="web-refresh-flights-card"]').should('be.visible');

        // 🔽 Simpan detail flight (departure, arrival)
        this.storeFlightTimeDetails();

        // Klik tombol Book
        cy.get('button[data-component="flight-card-bookButton"]').click();

    } 
    storeFlightTimeDetails() {
      cy.get('[data-testid="departure-time"]').invoke('text').as('selectedDepartureTime');
      cy.get('[data-testid="arrival-time"]').invoke('text').as('selectedArrivalTime');
    }

    storePassengerPagePrice() {
      cy.get('[data-component="mob-flight-price-total-desc"').invoke('text').as('passengerPagePrice');
    }
  //==========Contact Details==================

    inputFirstNameContactData(firstName){
      cy.get('input[name="contact.contactFirstName"]').clear().type(firstName);
    }

    inputLastNameContactData(lastName){
      cy.get('input[name="contact.contactLastName"]').clear().type(lastName);
    }

    inputEmailContactData(email){
      cy.get('input[name="contact.contactEmail"]').clear().type(email);
    }
  
    inputPhoneNumber(phoneNumber){
      cy.get('input[name="contact.contactPhoneNumber"]').clear().type(phoneNumber);
    }

    fillContactDetails(contactData){
      this.inputFirstNameContactData(contactData.firstName);
      this.inputLastNameContactData(contactData.lastName);
      this.inputEmailContactData(contactData.email);
      this.inputPhoneNumber(contactData.phoneNumber);
      

    }
 //==========Passenger Details==================
    chooseGender(){
      cy.get('input[aria-label="Female"]').check({ force: true });
    }
    inputFirstNamePassenger(firstandMiddleName){
      cy.get('input[datatestid="flight.forms.i0.units.i0.passengerFirstName"]').clear().type(firstandMiddleName);
    }
    inputlastNamePassenger(lastNamePassenger){
      cy.get('input[datatestid="flight.forms.i0.units.i0.passengerLastName"]').clear().type(lastNamePassenger);
    }
    inputDoBPassenger(dayofBirth){
      cy.get('input[datatestid="flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId"]').clear().type(dayofBirth);
    }
    chooseMoBPassenger(){
      cy.get('[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]').click();
      cy.get('[data-testid="floater-container"]').should('be.visible');
      cy.contains('span', 'May').click();
    }
    inputYoBPassenger(yearofBirth){
      cy.get('[datatestid="flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId"]').clear().type(yearofBirth);
    }
    chooseNationality(nationality){
      cy.get('[data-testid="flight.forms.i0.units.i0.passengerNationality"]').click();
      cy.get('[data-testid="floater-container"]').should('be.visible');
      cy.get('[placeholder="Search"]').clear().type(nationality);
      cy.contains('span', 'Indonesia').should('be.visible').click();

    }
    inputPassportNumber(passportNumber){
      cy.get('[data-element-name="passenger-passport-number-input"]').type(passportNumber);
    }
    chooseCountryofIssue(nationality){
      cy.get('[data-testid="flight.forms.i0.units.i0.passportCountryOfIssue"]').click();
      cy.get('[data-testid="floater-container"]').should('be.visible');
      cy.get('[placeholder="Search"]').clear().type(nationality);
      cy.contains('span', 'Indonesia').should('be.visible').click();

    }
    inputPassportExpireDay(passportExpireDay){
      cy.get('[datatestid="flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId"]').clear().type(passportExpireDay);
    }
    choosePassportExpireMonth(){
      cy.get('[data-testid="flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId"]').click();
      cy.get('[data-testid="floater-container"]').should('be.visible');
      cy.contains('span', 'September').click();
    }
    inputPassportExpireYear(passportExpireYear){
      cy.get('[data-testid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]').clear().type(passportExpireYear);
    }

    fillPassengerDetails(passengerData){
      this.chooseGender();
      this.inputFirstNamePassenger(passengerData.firstandMiddleName);
      this.inputlastNamePassenger(passengerData.lastNamePassenger);
      this.inputDoBPassenger(passengerData.dayofBirth);
      this.chooseMoBPassenger();
      this.inputYoBPassenger(passengerData.yearofBirth);
      this.chooseNationality(passengerData.nationality);
      this.inputPassportNumber(passengerData.passportNumber);
      this.chooseCountryofIssue(passengerData.nationality);
      this.inputPassportExpireDay(passengerData.passportExpireDay);
      this.choosePassportExpireMonth();
      this.inputPassportExpireYear(passengerData.passportExpireYear);

    }


    addsOnProceed(){
      cy.get('button[data-component="flight-continue-to-addOns-button"]').click({ force: true });

      cy.wait(3000);
      cy.get('#booking-form-bottom-section').should('be.visible')
      cy.get('button[data-testid="ceg-upsell-select-button-option-BASIC"]').click();
      cy.get('[data-testid="radio-button-text-option-no"]').click();
      this.storePassengerPagePrice();
    }
    continueToPayment(){
      cy.get('[data-testid="continue-to-payment-button"]').click();
      cy.get('.aec39-shadow-bottom-m').should('be.visible')
      cy.wait(3000);
      cy.contains('span', 'No, thanks').click({ force: true })
    }
    validateDepartureTime() {
      cy.get('[data-testid="flight-booking-details-overview"]').contains('Span', 'Details').click();
      cy.get('@selectedDepartureTime').then((expectedDepTime) => {
      cy.get('span[data-component="mob-flight-segment-departure"]')
        .first()
        .invoke('text')
        .should('contain', expectedDepTime.trim());
     });
    }

    validateArrivalTime() {
      cy.get('@selectedArrivalTime').then((expectedArrTime) => {
      cy.get('span[data-component="mob-flight-segment-arrival"]')
        .last()
        .invoke('text')
        .should('contain', expectedArrTime.trim());
     });
    }

  validateTotalPrice() {
    cy.get('@passengerPagePrice').then((expectedPrice) => {
    cy.get('span[data-component="mob-price-desc-text"]')
      .invoke('text')
      .should('contain', expectedPrice.trim());
    });
  }
  validateContactDetails(contactData) {
    cy.get('[data-component="name-container-name"]').first()
      .should('have.text', `${contactData.firstName} ${contactData.lastName}`);

    cy.get('[data-component="name-container-detail"]')
      .eq(0)
      .should('contain.text', contactData.email);

    cy.get('[data-component="name-container-detail"]')
      .eq(1)
      .should('contain.text', contactData.phoneNumber);
  }
  validatePassengerDetails(passengerData) {
    cy.get('[data-component="passenger-summary-list"]')
    .find('[data-component="name-container-name"]')
    .should('have.text', `${passengerData.firstandMiddleName} ${passengerData.lastNamePassenger}`);

    cy.get('[data-component="passenger-summary-list"]')
      .should('contain.text', passengerData.passportNumber);
  }



}


  


export default new ticketOrder;