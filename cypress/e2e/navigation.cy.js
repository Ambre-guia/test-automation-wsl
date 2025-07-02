describe("Navigation Test", () => {
    
    it("should log in with valid credentials", () => {
        cy.visit("/");
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email').type('be.visible');
    });
});