Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevent app errors from failing Cypress tests
});

describe('System Tests for GGCHacks App', () => {

  // 1. GrizzyHacks Load Test
  it('should load the homepage successfully', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Grizzly Hacks').should('exist');
  });

  // 2. Footer Year Test
  it('should display the current year in the footer', () => {
    cy.visit('http://localhost:4200');
    const currentYear = new Date().getFullYear();
    cy.contains(currentYear).should('exist');
  });

  // 3. Navbar Test
  it('should display the navbar with Home link', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Home').should('exist');
  });

  // 4. Page Title Test
  it('should have the correct page title', () => {
    cy.visit('http://localhost:4200');
    cy.title().should('include', 'GGCHacks');
  });

});
