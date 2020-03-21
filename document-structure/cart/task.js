let products = document.querySelectorAll('.product');
let cart = document.querySelector('.cart__products');

for (let i = 0; i < products.length; i++) {

    products[i].querySelector('.product__quantity-control_dec').addEventListener('click', (event) => {
        let value = Number(products[i].querySelector('.product__quantity-value').textContent);
        if (value > 1) {
            products[i].querySelector('.product__quantity-value').innerText = Number(products[i].querySelector('.product__quantity-value').innerText) - 1;
        }
    });

    products[i].querySelector('.product__quantity-control_inc').addEventListener('click', (event) => {
        products[i].querySelector('.product__quantity-value').innerText = Number(products[i].querySelector('.product__quantity-value').innerText) + 1;
     });

     products[i].querySelector('.product__add').addEventListener('click', (event) => {
        let cart_product = Array.from(document.querySelectorAll('.cart__product'));
        for (let j = 0; j < cart_product.length; j++) {
            if (cart_product[j].dataset.id == products[i].dataset.id) {
                cart_product[j].querySelector('.cart__product-count').innerText = Number(cart_product[j].querySelector('.cart__product-count').innerText)  + Number(products[i].querySelector('.product__quantity-value').textContent);
                return;
            }
        }

        let image = products[i].querySelector('.product__image').src;
        let html = `<div class="cart__product" data-id="${products[i].dataset.id}">
        <img class="cart__product-image" src="${image}">
        <div class="cart__product-count">${Number(products[i].querySelector('.product__quantity-value').textContent)}</div>
    </div>`;
        cart.insertAdjacentHTML('beforeEnd', html);
     });
}