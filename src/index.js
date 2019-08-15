'use strict';
//Чекбокс
function togleCheckbox (){


const checkbox = document.getElementById('discount-checkbox');

checkbox.addEventListener('change', function() {
    if (this.checked === true) {
        this.nextElementSibling.classList.add('checked');
   //console.log("галка стоит");
    } else {
        this.nextElementSibling.classList.remove('checked');
    }
});
}
togleCheckbox ();
// end чекбокс

//Корзина
function togleCart() {
    
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
}
togleCart();

//end Корзина

//добавление/удаление товара

function addCart() {
    const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const countGoods = document.querySelector('.counter');


cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click',  () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        showDate();

        const removBtn =cardClone.querySelector('.btn');
        removBtn.textContent = 'Удалить из карзины';
        removBtn.addEventListener('click', () => {
        cardClone.remove();
        showDate();
        });
    });
});

function showDate () {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    const cardsPrice = cartWrapper.querySelectorAll('.card-price');
    const cardTotal = document.querySelector('.cart-total span');
    let sum = 0;
    countGoods.textContent = cardsCart.length;
    
    cardsPrice.forEach((cardPrice) => {
    let price = parseFloat(cardPrice.textContent);
    sum += price;
    });

    cardTotal.textContent = sum;

    if (cardsCart.length !== 0) {
        cartEmpty.remove();
    } else {
        cartWrapper.appendChild(cartEmpty);
    }
}
}
addCart();
//end добавление/удаление товара


// фильтр акции
function actionPage () {

    const cards = document.querySelectorAll('.goods .card'),
    discountCheckbox = document.getElementById('discount-checkbox'),

    goods = document.querySelector('.goods'),
    min = document.getElementById('min'),
    max = document.getElementById('max'),
    search = document.querySelector('.search-wrapper_input'),
    searchBtn = document.querySelector('.search-btn');

     // фильтр по акции
    discountCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
        if (discountCheckbox.checked) {
            if (!card.querySelector('.card-sale')) {
                card.parentNode.style.display = 'none';
            }
        } else {
            card.parentNode.style.display = '';
        }
        });
    });


 // фильтр по цене
    function filterPrice (){
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent);

            if ((min.value && price < min.value) || ( max.value && price > max.value)) {
                card.parentNode.remove();
            } else {
                goods.appendChild(card.parentNode);
            }

        });
    }
   
    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);

    // поиск
    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp (search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    })
}

actionPage ();

//   end фильтр акции 
