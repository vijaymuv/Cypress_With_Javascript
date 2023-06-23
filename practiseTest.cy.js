describe('TestPractice', () => {
    it('Verify it business book title', () => {
      
      //steps
      cy.visit("https://www.itbusinessbook.com/") 
      cy.title().should('eq','Log In or Sign Up | ITBusinessBook')
    })
   
  
    it('Open google', function ()  {
      
      //steps n
      cy.visit("www.google.com")
      cy.title().should('eq','Google')
    })
  
  }
  )