'use strict';
//Чекбокс

const checkbox = document.getElementById('discount-checkbox');

checkbox.addEventListener('change', function() {
    if (this.checked === true) {
        this.nextElementSibling.classList.add('checked');
   //console.log("галка стоит");
    } else {
        this.nextElementSibling.classList.remove('checked');
    }
});

// end чекбокс

//Корзина

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});

//end Корзина

//добавление/удаление товара

const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click',  () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showDate();
    });
});

function showDate () {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}
//end добавление/удаление товара
