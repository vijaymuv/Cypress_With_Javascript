describe('It business Book elements_Locators practise',() =>{

    it('css selectors', ()=>{

        cy.visit("https://www.itbusinessbook.com/")
        cy.get('[data-tab=tab-2]').click()
        cy.get('input.capitalword[name=firstname]').type('Murugan')
        cy.get('input.capitalword[name=lastname]').type('N')
        cy.get('#email').type('murugan@gmail.com')
        cy.get('#password').type('password')
        cy.get('#c2').click()
        cy.get('[name=iregister]').click()

        cy.get('[data-tab=tab-1]').click()
        cy.get('#lemail').type('murugan@gmail.com')
        cy.get('#lpassword').type('password')
        cy.get('#ilogin').click()
       cy.get('.user-info').click()
        cy.get('.tc').click()
        cy.get("[class='btn btn-primary bootbox-accept']").click()
       

    })
})