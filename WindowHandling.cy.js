describe('handling window',function(){

it.skip('Approcah 1 ',function(){
//cypress cannot handle child or new page windows 
    cy.visit('https://the-internet.herokuapp.com/windows')

    // in this line by removing target attribute, we opened the window on same page instead of opening in new window
    cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click()
cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
cy.go('back')
})

it.only('approach 2',function(){

    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('a[href="/windows/new"]').then(function(e){
    
       let url =e.prop('href')
  cy.visit(url)

  //limitation domain should be same if not same we have to go through 1st approach
  cy.url().should('include','https://the-internet.herokuapp.com/windows/new')


    }



    )
    
    
    })

})