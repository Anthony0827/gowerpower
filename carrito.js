import { ShoppingCart } from './ShoppingCart.mjs';

// Inicializar el carrito
const cart = new ShoppingCart();

document.addEventListener('DOMContentLoaded', function() {

    // Actividad 7
    // Añadir artículo al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = {
                title: this.dataset.name,
                price: this.dataset.price,
                id: this.dataset.id,
                quantity: this.dataset.quantity
            };
            cart.addItem(item);
            alert('Artículo añadido al carrito');
        });
    });

    // Actividad 9
    // Funcionalidad del carrito desplegable
    const cartPreview = document.getElementById('cart-preview');
    const cartIcon = document.getElementById('cart-icon');
    
    if (cartIcon) {
        cartIcon.addEventListener('mouseover', function() {
            const items = cart.getCart();
            cartPreview.innerHTML = '';
            for (let i = 0; i < Math.min(3, items.length); i++) {
                const item = document.createElement('div');
                item.innerHTML = `<strong>${items[i].title}</strong> - $${items[i].price}`;
                cartPreview.appendChild(item);
            }
            cartPreview.style.display = 'block';
        });

        cartIcon.addEventListener('mouseout', function() {
            cartPreview.style.display = 'none';
        });
    }

    // Actividad 8
    // Funcion para cargar los elementos del carrito en la pagina del carrito
    function loadCart() {
        const cartTable = document.getElementById('cart-table');
        const cartTotal = document.getElementById('cart-total');
        if (!cartTable || !cartTotal) return;

        const items = cart.getCart();
        let total = 0;

        items.forEach((item, index) => {
            const row = cartTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.innerHTML = item.title;
            cell2.innerHTML = `$${item.price}`;
            cell3.innerHTML = `<button class="remove-from-cart" data-index="${index}">Eliminar</button>`;

            total += parseFloat(item.price);
        });

        cartTotal.innerHTML = total.toFixed(2);
    }

    // Cargar el carrito en la pagina del carrito
    loadCart();

    // Funcionalidad para eliminar un articulo del carrito en la pagina del carrito
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
    removeFromCartButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            cart.removeItem(index);
            alert('Artículo eliminado del carrito');
            location.reload(); 
        });
    });
});
