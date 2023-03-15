/// <reference types ="cypress"/>
class loginPage {

    visit()
    {
        cy.visit("https://qa-test.dmzrwbdiwhv33.amplifyapp.com/login")
    }
    

    enterEmail(value)
    {
        const field = cy.get("input[type='email']")
      
        field.type(value)
        return this
    }

    enterPassword(value)
    {
        const field = cy.get("input[type='password']")
    
        field.type(value)
        return this
    }
    
    login()
    {
        const button = cy.get('button')
        button.click()
    }

    resetPassword()
    {
        const button = cy.get('#forgot-password > a')
        button.click()
    }



}
export default loginPage