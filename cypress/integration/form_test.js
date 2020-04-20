describe("Testing form", function(){
    //before each means before you run each test, go visit localhost 3000
    beforeEach(function(){
        cy.visit('http://localhost:3000/');
    })
    it('Adds text to input and submit form', function(){
        //cy.get is similar to document.querySelector, get is grabbing by dom element
        cy.get('input[name="name"]')
            .type("Chanyeol")
            .should('have.value', 'Chanyeol')
        cy.get('input[name="email"]')
            .type('happyvirus@exoplanet.com')
            .should('have.value', 'happyvirus@exoplanet.com')
        cy.get('[data-cy=textarea]')//see line 124 in form.js
            .type('because')
            .should('have.value', 'because')
        cy.get("#positions")
            .select('Tabling')
            .should('have.value', 'Tabling')
        cy.get('[type="checkbox"]').check()//type of input is checkbox, check is what we are telling it to do
            .should('be.checked')
        cy.get("button")
            .click()
    })

})