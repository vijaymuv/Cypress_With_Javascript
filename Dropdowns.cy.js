
describe('Handling dropdown',function(){

    it.skip('Select tag -Drop down ',function(){
         cy.visit('https://www.zoho.com/commerce/free-demo.html')
         cy.get('#zcf_address_country').select('Italy')
          .should('have.value','Italy')
})

it.skip('Bootstrap- Drop down ',function(){
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.get('#select2-billing_country-container').click()
    cy.get('input.select2-search__field').type('Hung').type('{enter}')
    cy.get('#select2-billing_country-container').should('have.text','Hungary')
})
it.skip('AutoSuggested static- Drop down ',function(){
    cy.visit('https://www.wikipedia.org/')
    cy.get('input#searchInput').type('Thiruvanamlai')
    cy.get('.suggestion-title').contains('Tiruvannamalai district').click()
   
})

it('Dynamic- Drop down ',function(){
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type('foods')
    cy.wait(3000)
    cy.get('div.wM6W7d').each(($el,index,$list)=>{

 if($el.text()=='foods for hair growth'){
     cy.wrap($el).click()
 }
 cy.get('#APjFqb').should('have.value','foods for hair growth')


    })
   
   
})



})