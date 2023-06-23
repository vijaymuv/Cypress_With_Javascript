import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'

describe('File upload Options',function(){

it('single file upload', function(){

    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile('FileUpload.txt')
    cy.get('#file-submit').click()
cy.xpath("//h3[.='File Uploaded!']").should('have.text','File Uploaded!')
})
it('Rename and File upload', function(){

    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile({filePath:'FileUpload.txt',fileName:'File1.txt'})
    cy.get('#file-submit').click()
cy.xpath("//h3[.='File Uploaded!']").should('have.text','File Uploaded!')
})

it('drag and drop - File ', function(){

    cy.visit('https://the-internet.herokuapp.com/upload')
   
    cy.get('#drag-drop-upload').attachFile('FileUpload2.txt',{subjectType:'drag-n-drop'})
    cy.wait(2000)
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('FileUpload2.txt')
    
})  

it('Multiple files upload ', function(){

    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
   
    cy.get('#filesToUpload').attachFile(['FileUpload2.txt','FileUpload.txt'])

    cy.get(':nth-child(6) > strong').should('have.text','Files You Selected:')
})  

it('Shadow dom - File upload ', function(){

    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("FileUpload2.txt")
cy.get('.smart-item-name',{includeShadowDom:true}).contains("FileUpload2.txt")

})  

})  