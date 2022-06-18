describe('web-components: WebComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=webcomponents--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to WebComponents!');
    });
});
