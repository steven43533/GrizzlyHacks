Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevent app errors from failing Cypress tests
});

describe('Acceptance Tests for GGCHacks App', () => {

  // Homepage Loading Check
  it('should load the homepage successfully', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Grizzly Hacks').should('exist'); // Static element
  });

  // Current Year Check
  it('should display the current year in the footer', () => {
    cy.visit('http://localhost:4200');
    const currentYear = new Date().getFullYear();
    cy.contains(currentYear).should('exist');
  });

  // Navigation Test - Events Page
  it('should navigate to the Events page from the navbar', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Events!').click(); // Click the button labeled Events!
    cy.url().should('include', '/blogHome'); // Updated to correct route
  });
  

  // Navigation Test - Create Account Page
  it('should navigate to the Create Account page from the navbar', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Create Account').click();
    cy.url().should('include', '/createAccount');
  });
  
  // Navigation Test - Login Page
  it('should navigate to the Login page from the navbar', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Log In').click();
    cy.url().should('include', '/login');
  });
});
