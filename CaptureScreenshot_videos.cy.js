import 'cypress-mochawesome-reporter'

describe('Screen shots And videos',function(){

it('screenshots',function(){

cy.visit('http://automationpractice.pl/index.php')
cy.screenshot('Mystore')
cy.xpath("//a[.='Contact us']").screenshot('contactUs') //particular element screenshot

})

it('Automatically record video and capture screenshots',function(){
//to get automatic screen sht and videos we need to run it on any cli tools
    cy.visit('http://automationpractice.pl/index.php')
    cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/a').click()
    cy.title().should('eq','Dresses - My Store')


    })

})