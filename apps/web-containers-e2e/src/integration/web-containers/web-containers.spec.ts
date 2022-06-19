describe('web-containers: WebContainers component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=webcontainers--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to WebContainers!');
    });
});
