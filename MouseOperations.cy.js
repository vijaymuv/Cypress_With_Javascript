import 'cypress-iframe'
import '@4tw/cypress-drag-drop'

describe('Mouse Operations',function(){
it('Mouse over',function(){
cy.visit('http://automationpractice.pl/index.php')
cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/a').trigger('mouseover')
cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/ul/li[1]/a').click()

})
it('right click',function(){
    cy.visit('http://automationpractice.pl/index.php')
    cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/a').trigger('contextmenu')
    // approach 2 

    cy.visit('http://automationpractice.pl/index.php')
    cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/a').rightclick()
    
})

it('double click',function(){
cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
cy.frameLoaded('#iframeResult')
cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')

//approach 2
cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
cy.frameLoaded('#iframeResult')
cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
    
    
})

it('drag and drop plugin ',function(){

    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    //box is dragged element and 2nd one is into which we are dragging
    cy.get('#box2').should('be.visible')
    cy.wait(3000)
    cy.get('#box2').drag('#box107',{force:true})

    
})

it.only('Mousehover',function(){
cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
cy.get(':nth-child(79) > [align="center"] > a > img').scrollIntoView({duration:2000})
cy.get(':nth-child(10) > [align="center"] > div').scrollIntoView({duration:2000})
    cy.get('.footerlinks').scrollIntoView()
})



})