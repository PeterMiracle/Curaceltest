/// <reference types ="cypress"/>
import LoginPage from '../pageObject/loginPage'
let userDetails
const lp = new LoginPage()
describe('Log in tests', function() {
          
    beforeEach(() => {
      

      cy.fixture('example').then((data) =>{
        userDetails =data
        })
    })
      
    it('Test for correct email and incorrect Password', function() {
        cy.visit("https://qa-test.dmzrwbdiwhv33.amplifyapp.com/login")
    
    lp.enterEmail(userDetails.correctEmail)
    lp.enterPassword(userDetails.incorrectPassword)
    lp.login()
    
    cy.get('.swal2-popup').should('contain','Invalid Login Credentials. Check & Try Again')
   
    }) 
    
    it('Test for Incorrect email and correct Password', function() {
        cy.visit("https://qa-test.dmzrwbdiwhv33.amplifyapp.com/login")
        
        lp.enterEmail(userDetails.incorrectEmail)
        lp.enterPassword(userDetails.correctPassword)
        lp.login()
        cy.on('window:alert',(str) =>{
            expect(str).to.eq('Invalid Login Credentials. Check & Try Again')
            })
   
    
    })
    
    it('Attempt Login without email and password', function() {
        cy.visit("https://qa-test.dmzrwbdiwhv33.amplifyapp.com/login")
        
        
        lp.login()

        
   
    
    
    })
    it('Validate Reset Password functionality', function() {
    
        cy.visit("https://qa-test.dmzrwbdiwhv33.amplifyapp.com/login")
        
        lp.resetPassword()
        cy.wait(2000)

        cy.get('#forgot-password').should('contain.text','Remember now? Try to ')

        
   
    
    
    })

    it('Test for correct credentials', function() {
    
        cy.visit("https://qa-test.dmzrwbdiwhv33.amplifyapp.com/login") 
        
        lp.enterEmail(userDetails.correctEmail)
        lp.enterPassword(userDetails.correctPassword)
        lp.login()
        cy.on('window:alert',(str) =>{
            expect(str).to.eq('The given data was invalid.')
            })
        
    })
  })