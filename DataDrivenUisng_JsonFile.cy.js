import 'cypress-xpath'

describe('Validate login functions with valid and invalid credentials',function(){


it('Data Driven testing Using Json File',function(){

cy.fixture('DataFile').then(function(datas){
    cy.visit('https://www.itbusinessbook.com/')
           datas.forEach(userData => {
            cy.xpath("//input[@id='lemail']").clear().type(userData.email)
            cy.xpath("//input[@id='lpassword']").clear().type(userData.password)
            cy.xpath("//button[@id='ilogin']").click()
            cy.wait(2000)
           if(userData.email=='murugan@gmail.com' && userData.password=='password'){

            cy.get('.user-info').click()
            cy.get('.tc').click()
            cy.get("[class='btn btn-primary bootbox-accept']").click()
    
           }else{
           cy.log('invalid credentials')

           }
    
});

        

})

})

})