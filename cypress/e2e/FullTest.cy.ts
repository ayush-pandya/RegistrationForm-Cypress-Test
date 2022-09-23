describe("Employee REgistration Form", () =>{
    beforeEach(() =>{
        cy.visit("https://ayush-pandya.github.io/Registration-Form/")
    })
    describe("Name Test", () => {
        it("Wrong input", () => {
          cy.get(".submit").click();
          cy.get("#wrong-name").should("be.visible");
        })
        it("Correct Input", () =>{
            cy.get("#name").type("Ayush");
            cy.get(".submit").click();
            cy.get("#right-name").should('be.visible');
        })
    })
    describe("Email Test", () => {
        it("Empty Email", () => {
          cy.get(".submit").click();
          cy.get("#wrong-email").should("be.visible");
        })
        it("Wrong Email", () => {
            cy.get("#email").type("ayush.com");
          cy.get(".submit").click();
          cy.get("#wrong-email").should("be.visible");
        })
        it("Correct Email", () =>{
            cy.get("#email").type("ayush@gmail.com");
            cy.get(".submit").click();
            cy.get("#right-email").should('be.visible');
        })
    })
    describe("Password Field Test", () => {
        it("Empty Password", () => {
          cy.get(".submit").click();
          cy.get("#wrong-password").should("be.visible");
        })
        it("Correct Password", () => {
            cy.get("#password").type("Hello");
          cy.get(".submit").click();
          cy.get("#right-password").should("be.visible");
        })
    })
    describe("Confirm-Password Field Test", () => {
        it("Empty Confirm-Password", () => {
          cy.get(".submit").click();
          cy.get("#wrong-cpassword").should("be.visible");
        })
        it("Correct Password", () => {
            cy.get("#cpassword").type("Hello");
          cy.get(".submit").click();
          cy.get("#right-cpassword").should("be.visible");
        })
    })
    describe("Phone Number Test", () => {
        it("Empty Phone Number Field", () => {
          cy.get(".submit").click();
          cy.get("#wrong-phoneNumber").should("be.visible");
        })
        it("Wrong Phone Number", () => {
            cy.get('#phoneNumber').type("87312")
          cy.get(".submit").click();
          cy.get("#wrong-phoneNumber").should("be.visible");
        })
        it("Correct Phone Number", () => {
            cy.get("#phoneNumber").type("9231302571");
          cy.get(".submit").click();
          cy.get("#right-phoneNumber").should("be.visible");
        })
    })
    describe("Adhaar-Card Number Test", () => {
        it("Empty Adhaar-Number Field", () => {
          cy.get(".submit").click();
          cy.get("#wrong-adhaar").should("be.visible");
        })
        it("Wrong Adhaar Number", () => {
            cy.get('#adhaar-number').type("87312")
          cy.get(".submit").click();
          cy.get("#wrong-adhaar").should("be.visible");
        })
        it("Correct Adhaar Number", () => {
            cy.get('#adhaar-number').type("873123217896")
          cy.get(".submit").click();
          cy.get("#right-adhaar").should("be.visible");
        })
        it("Correct Phone Number", () => {
            cy.get("#phoneNumber").type("9231302571");
          cy.get(".submit").click();
          cy.get("#right-phoneNumber").should("be.visible");
        })
    })
    describe("Account Number Test", () => {
        it("Empty Account-Number Field", () => {
          cy.get(".submit").click();
          cy.get("#wrong-accountNumber").should("be.visible");
        })
        it("Wrong Account Number", () => {
            cy.get('#account-number').type("87312")
          cy.get(".submit").click();
          cy.get("#wrong-accountNumber").should("be.visible");
        })
        it("Correct Account Number", () => {
            cy.get('#account-number').type("20099939947")
          cy.get(".submit").click();
          cy.get("#right-accountNumber").should("be.visible");
        })
    })
    describe("PAN-Card Number Test", () => {
        it("Empty PAN-Card Number Field", () => {
          cy.get(".submit").click();
          cy.get("#wrong-panCard").should("be.visible");
        })
        it("Wrong PAN-Card Number", () => {
            cy.get('#pan-card-number').type("87312")
          cy.get(".submit").click();
          cy.get("#wrong-panCard").should("be.visible");
        })
        it("Correct PAN-Card Number", () => {
            cy.get('#pan-card-number').type("ABCDE3456G");
          cy.get(".submit").click();
          cy.get("#right-panCard").should("be.visible");
        })
    })
    describe("Address Test", () => {
        it("Empty Address Field", () => {
          cy.get(".submit").click();
          cy.get("#wrong-address").should("be.visible");
        })
        it("Correct Address Number", () => {
            cy.get('#address').type("87/3A/12")
          cy.get(".submit").click();
          cy.get("#right-address").should("be.visible");
        })
    })
    describe("Pincode Test", () => {
        it("Empty Pincode Field", () => {
          cy.get(".submit").click();
          cy.get("#wrong-pincode").should("be.visible");
        })
        it("Wrong Pincode", () => {
            cy.get('#pincode').type("8213312")
          cy.get(".submit").click();
          cy.get("#wrong-pincode").should("be.visible");
        })
        it("Correct Pincode", () => {
            cy.get('#pincode').type("490001")
          cy.get(".submit").click();
          cy.get("#right-pincode").should("be.visible");
        })
    })
    describe("About Field Test", () => {
        it("Empty About Field", () => {
          cy.get(".submit").click();
          cy.get("#wrong-about").should("be.visible");
        })
        it("Correct About Field", () => {
            cy.get('#about').type("Cool")
          cy.get(".submit").click();
          cy.get("#right-about").should("be.visible");
        })
    })
    it("Successful submission", ()=>{
        cy.get('#name') .type("Ayush")
        cy.get('#email').type("ayush517@gmail.com")
        cy.get('#password').type("8435144829173")
        cy.get('#cpassword').type("8435144829173")
        cy.get('#phoneNumber').type("8435134923")
        cy.get('[type="radio"]').check('female')
        // cy.get('#gender').type("male")
        cy.get('#adhaar-number').type("123456781234")
        cy.get('#account-number').type("20000029957")
        cy.get('#pan-card-number').type("ABCDE1234F")
        cy.get('#address').type("Ginger Hotel")
        cy.get('#pincode').type("560001")
        cy.get('#about').type("Cool")
        cy.get(".submit").click()
    })
    
})