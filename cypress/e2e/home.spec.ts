describe('Home Page E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads featured grid and navigates to detail', () => {
    cy.get('section.grid').first().find('a').should('have.length', 4);
    cy.get('section.grid').first().find('a').first().click();
    cy.url().should('match', /\/accommodations\/[0-9a-fA-F-]+/);
  });

  it('searches and displays results', () => {
    cy.get('input[placeholder="숙소 검색"]').type('Seoul');
    cy.wait(500);
    cy.get('section.grid').should('exist');
  });

  it('sorts accommodations', () => {
    cy.get('select').select('price_asc');
    cy.get('section.grid').first().find('a').first().find('span').contains('원');
  });
}); 