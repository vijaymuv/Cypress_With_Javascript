import 'cypress-xpath'


describe('Navigation commands',function(){

    it('go page',function(){

        cy.visit('http://automationpractice.pl/index.php')
        cy.title().should('eq','My Store')
        cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/a').click()
        cy.title().should('eq','Dresses - My Store')
        cy.go('back')
        cy.title().should('eq','My Store')
        cy.go('forward')
        cy.title().should('eq','Dresses - My Store')
        cy.go(-1) // to navigate back
        cy.title().should('eq','My Store')
        cy.go(1)// to navigate forward
        cy.title().should('eq','Dresses - My Store')

    })
})