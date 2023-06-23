
import 'cypress-iframe'

describe('handling frames',function(){
    

it('iframes',function(){
cy.visit('https://the-internet.herokuapp.com/iframe')
const iframe=cy.get('#mce_0_ifr')
.its('0.contentDocument.body')
.should('be.visible').then(cy.wrap)

iframe.clear().type("hello {ctrl+a}")
cy.get('ex[title=Bold]').click()

}
)

it('approach 2 by using custom command',function(){

    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.getIFrame("#mce_0_ifr").clear().type("hello {ctrl+a}")
    cy.get('[title=Bold]').click()

})

it.only('by using cypress plugin',function(){

    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('#mce_0_ifr')
    cy.iframe('#mce_0_ifr')
    .clear().type("i frame handled {ctrl+a}")
    cy.get('[title=Bold]').click()


})


})