
describe('Itera qa automation - Webelement validation',function(){

  it('Radio button validation',function(){

    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    // visibility of radio button
    cy.get('#male').should('be.visible')
    cy.get('#female').should('be.visible')
    // selecting of radio button
    cy.get('#male').check().should('be.checked')
    cy.get('#female').should('not.be.checked')

    cy.get('#female').check().should('be.checked')
    cy.get('#male').should('not.be.checked')
    
  })

  it('Checkbox validation',function(){

    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    // visibility of monday check box
    cy.get('#monday').should('be.visible')
    
    cy.get('#monday').check().should('be.checked')

    //uncheck the checkbox

    cy.get('#monday').uncheck().should('not.be.checked')
  
    // selecting all the checkbox
    cy.get("input.form-check-input[type=checkbox]").check().should('be.checked')
    cy.get("input.form-check-input[type=checkbox]").uncheck().should('not.be.checked')

     //select first check box
     cy.get("input.form-check-input[type=checkbox]").first().check()
     //last check box
     cy.get("input.form-check-input[type=checkbox]").last().check()

     

  })
})