import Login2 from "../PageObjects/Login2.cy"
describe('POM',function(){

    it('it business book - login with pom', function(){

        cy.visit("https://www.itbusinessbook.com/")
       const ln=new Login2();
       ln.userName("Murugan@gmail.com")
       ln.password("password")
       ln.clickSignIn();
       ln.verifyLogin();
    })

    it.only('it business book - login with pom and fixtures ', function(){

        //login with pom and fixtures
        cy.visit("https://www.itbusinessbook.com/")
     
     cy.fixture('DatasLogin').then(function(data){
       
        const ln=new Login2();
        ln.userName(data.email)
        ln.password(data.password)
        ln.clickSignIn();
        ln.verifyLogin();
     })

       
    })
})