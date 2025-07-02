cy.fixture('user').then((user) => {
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.password);
});