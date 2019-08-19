(function () {
    'use strict';
    let buttons, buttons__close;
    buttons = document.querySelectorAll('.box-services__button-more');
    buttons__close = document.querySelectorAll('.box-services__button-close');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showContainer2);
    };

    for (var i = 0; i < buttons__close.length; i++) {
        buttons__close[i].addEventListener('click', closeCountainer2);
    };

    function showContainer2() {
        let container = this.parentNode.parentNode.lastElementChild;
        container.classList.add('box-services__container2_display-js');
    };

    function closeCountainer2() {
        let container = this.parentNode;
        container.classList.remove('box-services__container2_display-js');
    }


    let control__left, control__right;
    control__left = document.querySelector('.slider-button-lr_left');
    control__right = document.querySelector('.slider-button-lr_right');
    control__right.parentNode.firstElementChild.setAttribute('checked','');
    

    control__right.addEventListener('click', goNextSlide);
    control__left.addEventListener('click', goPreviousSlide);

    function goNextSlide() {
        let currenSlide = control__left.parentNode.querySelectorAll('.slider__control');

        for (var i = 0; i < currenSlide.length; i++) {
            if (currenSlide[i].checked) {
                currenSlide = currenSlide[i];
            }
        };

        if (currenSlide.nextElementSibling.classList.contains('slider__control')) {
            currenSlide.checked = false;
            currenSlide.nextElementSibling.checked = true;

        }
    };

    function goPreviousSlide() {
        let currenSlide = control__left.parentNode.querySelectorAll('.slider__control');

        for (var i = 0; i < currenSlide.length; i++) {
            if (currenSlide[i].checked) {
                currenSlide = currenSlide[i];
            }
        };

        if(currenSlide.previousElementSibling) {
            currenSlide.checked = false;
            currenSlide.previousElementSibling.checked = true;
        };
    };
})();