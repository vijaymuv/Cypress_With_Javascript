//added  simple commands

describe('Alerts learning',function(){

it('javascript alerts',function(){

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
cy.get('button[onclick="jsAlert()"]').click()
cy.on('window:alert',(t)=>{
//cypress automatically closes the alert window , but we can validate it
    expect(t).to.contains('I am a JS Alert')

})
}
)

it.only('confirm alerts',function(){
//cypress automatically closes the confirm alert window , but we can validate it and cancle the confirm alert
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsConfirm()"]').click()
    cy.on('window:confirm',(t)=>{

        expect(t).to.contains('I am a JS Confirm')
    
    })
    cy.on('window:confirm',()=>false) //cypress closes the window with cancel button it is done manually
    cy.get('#result').should('have.text','You clicked: Cancel')
    }
    )
    it.only('prompt alerts',function(){
        //cypress automatically closes the confirm alert window , but we can validate it and cancle the confirm alert
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get('button[onclick="jsPrompt()"]').click()
              } )
})
