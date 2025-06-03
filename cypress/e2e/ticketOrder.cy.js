import ticketOrder from "../pages/ticketOrder";


describe('Order Flight Ticket to Singapore', function(){
    

    it('Navigate to Flights Page', function (){
        cy.viewport('macbook-13')
        ticketOrder.visit();
        ticketOrder.chooseFlightMenu();
        ticketOrder.inputFlightOrigin();
        ticketOrder.inputFlightDestination();
        ticketOrder.chooseDepartDate();
        ticketOrder.chooseNumberofPassenger();
        ticketOrder.chooseFirstFlightMalaysiaAirlines();
    })
})