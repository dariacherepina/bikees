(function enableSubmit() { //скобка впереди функции и )() в конце делают функцию самозапускаемой
    let form = document.querySelector('#seach-form'); //записываем нашу форму в переменную

    if(form != null) { //проверяем если ли форма
        let button = form.querySelector('[type="submit"]'); //записываем в переменную кнопку
    
        form.addEventListener('click', function(){ //навешиваем слушателя события клик на форму
            button.style.pointerEvents = 'all'; //возвращяем кнопке кликабельность
        });
    
    }
})(); //скобка впереди функции и )() в конце делают функцию самозапускаемой

   
function responsive() {
    let container = document.querySelector('.container');
    let product = document.querySelector('.product');
    let card = document.querySelector('.card');
    let productTitle = document.querySelector('.product_title');
    let cardTitle = document.querySelector('.card_title');
    let productButton = document.querySelector('.product_button');
    let cardButton = document.querySelector('.card_button');
    let productText = document.querySelector('.product_text');
    let cardText = document.querySelector('.card_text');
    let descrs = document.querySelectorAll('.bike__descr');

    if(window.innerWidth == 1024 && window.innerHeight == 1366) {
        container.classList.add('column');
        product.classList.add('w-100p');
        card.classList.add('w-100p');
        productTitle.classList.add('tablet-title');
        cardTitle.classList.add('tablet-title');
        cardText.classList.add('tablet-text');
        productText.classList.add('tablet-text');
        productButton.classList.add('tablet-button');
        cardButton.classList.add('tablet-button');
        descrs.forEach(function(item){
            Object.assign(item.style, { 'position': 'absolute', 'top': '50%', 'transform': 'translateY(-50%)'} );
            
        });

    } else {
        container.classList.remove('column');
        product.classList.remove('w-100p');
        card.classList.remove('w-100p');
        productTitle.classList.remove('tablet-title');
        cardTitle.classList.remove('tablet-title');
        cardText.classList.remove('tablet-text');
        productText.classList.remove('tablet-text');
        productButton.classList.remove('tablet-button');
        cardButton.classList.remove('tablet-button');
        descrs.forEach(function(item){
            item.removeAttribute('style');
            
        });
    }
};

window.addEventListener('load', responsive, false);
window.addEventListener('resize', responsive, false);
