describe('It business book login',function(){

  /*  it('Login with hardcoding',function(){

        cy.visit('https://www.itbusinessbook.com/')
        cy.fixture('DatasLogin').then(function (data){
            cy.xpath("//input[@id='lemail']").type(data.email)
            cy.xpath("//input[@id='lpassword']").type(data.password)
            cy.xpath("//button[@id='ilogin']").click()

        })
        
         })*/


     let userData
     before(function(){

        // to access it in multiple it blocks we have create this before hook 
      cy.fixture('DatasLogin').then(function(data){
      userData=data

      })
     })

     it('login into it business book with help of hooks',function(){

        cy.visit('https://www.itbusinessbook.com/')
            cy.xpath("//input[@id='lemail']").type(userData.email)
            cy.xpath("//input[@id='lpassword']").type(userData.password)
            cy.xpath("//button[@id='ilogin']").click()

      })
}) 