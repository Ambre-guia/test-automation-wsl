describe("Login Test", () => {
    
    it("should log in with valid credentials", () => {
        cy.visit("/commands/actions");
        cy.get(".action-email").type("test@example.com");
        cy.get(".action-form").submit().next().should("contain", "Your form has been submitted!");
    });
});