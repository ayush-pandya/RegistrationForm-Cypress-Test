describe("Employee REgistration Form", () =>{
    beforeEach(() =>{
        cy.visit("https://ayush-pandya.github.io/Devrev-Employee-Registration-Form/")
    })

    it("Successful submission", ()=>{
        cy.get('#name') .type("Ayush Pandya")
        cy.get('#email').type("ayush517@gmail.com")
        cy.get('#password').type("8435144829173")
        cy.get('#cpassword').type("8435144829173")
        cy.get('#phoneNumber').type("8435134923")
        cy.get('#gender').type("male")
        cy.get('#adhaar-number').type("123456781234")
        cy.get('#pan-card-number').type("ABCDE1234F")
        cy.get('#pincode').type("560001")

        cy.get(".submit").click()
    })
    
})