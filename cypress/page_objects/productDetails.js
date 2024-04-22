export class ProductDetails {
  constructor(productName) {
    this._productName = productName;
  };

  get productName() {
    return this._productName;
  };

  get productNameElement() {
    return cy.get('[data-test="inventory-item-name"]');
  };

  get productDescription() {
    return cy.get('[data-test="inventory-item-desc"]');
  };

  get productPrice() {
    return cy.get('[data-test="inventory-item-price"]');
  };
};
