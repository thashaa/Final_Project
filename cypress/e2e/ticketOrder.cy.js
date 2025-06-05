import ticketOrder from "../pages/ticketOrder";


describe('Order Flight Ticket to Singapore', function(){
    this.beforeEach(() => {
        cy.viewport('macbook-13')
        cy.fixture("ticketOrderData").as("data");
    });

    it('E2E Flight Ticket Order', function (){
        ticketOrder.visit();
        ticketOrder.chooseFlightMenu();
        ticketOrder.inputFlightOrigin();
        ticketOrder.inputFlightDestination();
        ticketOrder.chooseDepartDate();
        ticketOrder.chooseNumberofPassenger();
        ticketOrder.chooseFirstFlightMalaysiaAirlines();
        ticketOrder.fillContactDetails(this.data.contactDetails);
        ticketOrder.fillPassengerDetails(this.data.passengerDetails);
        ticketOrder.addsOnProceed();
        ticketOrder.continueToPayment();

        ticketOrder.validateDepartureTime();
        ticketOrder.validateArrivalTime();
        ticketOrder.validateTotalPrice();
        ticketOrder.validateContactDetails(this.data.contactDetails);
        ticketOrder.validatePassengerDetails(this.data.passengerDetails);
    })
    
})