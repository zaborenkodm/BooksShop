var btnPrev = document.querySelector('.carousel-btn__left');
var btnNext = document.querySelector('.carousel-btn__right');
var carouselProduct = document.querySelectorAll('.carousel-item');
var i = 0;

btnPrev.onclick = function(){
    carouselProduct[i].style.display = 'none';
    i--;
    if(i < 0) {
        i =  carouselProduct.length - 1;
    }
    carouselProduct[i].style.display = 'flex';
};

btnNext.onclick = function(){
    carouselProduct[i].style.display = 'none';
    i++;
    if(i >= carouselProduct.length) {
        i =  0;
    }
    carouselProduct[i].style.display = 'flex';
};
