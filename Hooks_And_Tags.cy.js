// before
//after
//beforeEach
//afterEach

describe('Hooks and tags',function(){
    before(function(){

cy.log('Launch Browser ')
    })

    after(function(){

        cy.log('Browser Closed')
            })

            beforeEach(function(){


                cy.log('login into website')
            })

            afterEach(function(){


                cy.log('logout from website')
            })

it('search',function () {
    cy.log('searching product')
})

it('order placing',function () {
    cy.log('user ordered the products')
})

})