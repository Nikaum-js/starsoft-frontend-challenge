describe('Shopping Cart Flow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=add-to-cart]').first().click();
    cy.wait(1000);
  });

  it('should add a product to the cart', () => {
    cy.get('[data-cy=cart-count]').should('contain', '1');
  });

  it('should increment the quantity of a product in the cart', () => {
    cy.visit('/shopping-backpack');
    cy.get('[data-cy=increment-quantity]').click();
    cy.get('[data-cy=item-quantity]').should('contain', '2');
  });

  it('should decrement the quantity of a product in the cart', () => {
    cy.visit('/shopping-backpack');
    cy.get('[data-cy=increment-quantity]').click();
    cy.get('[data-cy=decrement-quantity]').click();
    cy.get('[data-cy=item-quantity]').should('contain', '1');
  });

  it('should remove a product from the cart', () => {
    cy.visit('/shopping-backpack');
    cy.get('[data-cy=remove-item]').click();
    cy.get('[data-cy=cart-item]').should('not.exist');
  });

  it('should show error message when trying to checkout with an empty cart', () => {
    cy.visit('/shopping-backpack');
    cy.get('[data-cy=remove-item]').click();
    cy.get('[data-cy=checkout]').click();
    cy.contains('Você não tem itens no carrinho').should('be.visible');
  });

  it('should show success message when checking out with items in the cart', () => {
    cy.visit('/shopping-backpack');
    cy.get('[data-cy=checkout]').click();
    cy.contains('Compra finalizada com sucesso').should('be.visible');
  });
});
