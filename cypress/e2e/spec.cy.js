describe('cypress test', () => {
    it('should visit example.com', () => {
        cy.visit('https://example.com');
        cy.get('h1').should('contain', 'Example Domain');
    });

    
}   );

