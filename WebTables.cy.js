describe('WebTables',function(){

    beforeEach('url',function(){

       // cy.visit('https://www.w3schools.com/html/html_tables.asp')
       cy.visit('https://the-internet.herokuapp.com/tables')
    })
    
it('check row and column',function(){
 
  cy.get('#customers>tbody>tr').should('have.length','7')
  
  cy.get('#customers>tbody>tr>th').should('have.length','3')
  
})

it('retrieve  particular cell data',function(){
    cy.get('#customers>tbody>tr:nth-child(7)>td:last-child').contains('Italy')
    
})

it.only('retrieve all datas',function(){
  

cy.get('table.tablesorter>tbody>tr').each(function($Allrow,index,$rows){

   cy.wrap($Allrow).within(function(){
   
       cy.get('td').each(function($Allcol,index,$cols){

    cy.log($Allcol.text())
   })

   })

})


    
})


})