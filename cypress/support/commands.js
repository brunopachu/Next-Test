Cypress.Commands.add('ignoreXHR', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/*',
      },
      {
        log: false,
      }
    );
  
    cy.intercept(
      {
        method: 'POST',
        url: '**/*',
      },
      {
        log: false,
      }
    );
  });