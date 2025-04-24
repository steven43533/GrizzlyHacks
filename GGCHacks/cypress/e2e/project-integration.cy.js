describe('Simple Integration Tests for GGCHacks App', () => {

  // 1. Navbar Test
  it('should display the navbar on the homepage', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Home').should('exist'); // Super simple, checks for "Home"
  });

  // 2. Footer Test
  it('should display the current year in the footer', () => {
    const currentYear = new Date().getFullYear();
    cy.visit('http://localhost:4200');
    cy.contains(currentYear).should('exist'); // Any mention of the year
  });

  // 3. App Title Test
  it('should load the app with the correct HTML title', () => {
    cy.visit('http://localhost:4200');
    cy.title().should('include', 'GGCHacks'); // Checks HTML <title>
  });

});
