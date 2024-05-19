// ShoppingCart.mjs
export default class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    }

    addItem(item) {
        this.items.push(item);
        this.saveCart();
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
        this.saveCart();
    }

    saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.items));
    }

    getItems() {
        return this.items;
    }
}
