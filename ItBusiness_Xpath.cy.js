

describe('It business xpath practise',function(){

it('xpath Functions',function(){

cy.visit('https://www.itbusinessbook.com/')
cy.xpath("//input[@id='lemail']").type('murugan@gmail.com')
        cy.xpath("//input[@id='lpassword']").type('password')
        cy.xpath("//button[@id='ilogin']").click()

cy.xpath("//a[.='Do you have something to say']").click()

// cy.xpath().should('have.length',3) validation of something with this syntax
cy.xpath('/html/body/div[2]/main/div/div/div/div/div[2]/div/div[1]/div[2]/ul/li[1]/div/div/div/div/form/div[2]/div')
.xpath('./textarea').type('applying for google') //chained xpath and validate
})

}
)