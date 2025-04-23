/* Verify User Login Flow */
describe('System Test: User Login Flow', () => {
    it('should log in a user and redirect to dashboard', () => {
      cy.visit('/login');
      cy.get('input[name=email]').type('testuser@example.com');
      cy.get('input[name=password]').type('password123');
      cy.get('button[type=submit]').click();
  
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, Test User').should('exist');
    });
  });

  /* Database Connectivity Check */
  describe('System Test: Load Events from Database', () => {
    it('should load events from Firebase and display them', () => {
      cy.visit('/events');
      cy.get('.event-card').should('have.length.greaterThan', 0);
      cy.contains('Hackathon').should('exist');
    });
  });
  