

describe('Assertions',() =>{

    it('Implicit Assertions', ()=>{       
     cy.visit('https://www.itbusinessbook.com/')

     //should and methods
     /*cy.url().should('include','itbusinessbook')  //partial assertion
      cy.url().should('eq','https://www.itbusinessbook.com/') //full assertion
      cy.url().should('contain','it')*/

      /*cy.url().should('include','itbusinessbook').should('eq','https://www.itbusinessbook.com/').should('contain','it')

       cy.url().should('include','itbusinessbook').should('eq','https://www.itbusinessbook.com/').should('contain','it') */

       cy.url().should('include','itbusinessbook').should('eq','https://www.itbusinessbook.com/').should('not.contain','is')
       

       //validate url title
       cy.title().should('include','Log In').and('eq','Log In or Sign Up | ITBusinessBook').and('contain','IT')

       //to check whether if logo exists or not 2 methods included in this syntax
       cy.get('.cm-logo > img').should('be.visible').and('exist')
    
       cy.xpath('//a').should('have.length','10') // no of links assertion

       cy.get('#lemail').type('murugan@gmail.com').should('have.value','murugan@gmail.com')  // value assertion 

    })

    it('Explicit Assertions', ()=>{       
        cy.visit('https://www.itbusinessbook.com/')
        cy.get('#lemail').type('murugan@gmail.com')
        cy.get('#lpassword').type('password')
        cy.get('#ilogin').click()

        //BDD style
        let expName="Murugan";
        cy.xpath("//a[.='Murugan']").then((x)=>{

       let actname= x.text()

       expect(actname).to.equal(expName)
     //  expect(actname).to.not.equal(expName)
        //TDD style

          assert.equal(actname,expName)
//assert.notequal(actname,expName)
        })

    }   
    )
})