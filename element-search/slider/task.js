const sliderItem = Array.from(document.getElementsByClassName('slider__item'));
const arrowPrev = document.getElementsByClassName('slider__arrow_prev');
const arrowNext = document.getElementsByClassName('slider__arrow_next');
const sliderDots = Array.from(document.getElementsByClassName('slider__dot'))
let activeSlide = 0;
sliderDots[activeSlide].classList.add('slider__dot_active');
arrowNext[0].onclick = function() {
    getSlideNext(sliderItem);
}

arrowPrev[0].onclick = function() {
    getSlidePrev(sliderItem);
}

// ~~~~~~~~~ БЕЗ ЦИКЛА ~~~~~~~~

function getSlideNext(arr) {
    if(activeSlide === (arr.length - 1)){
        activeSlide = 0; 
        arr[arr.length - 1].classList.remove('slider__item_active');
        sliderDots[arr.length - 1].classList.remove('slider__dot_active');
        arr[activeSlide].classList.add('slider__item_active');
        sliderDots[activeSlide].classList.add('slider__dot_active');
        return;
    }
    arr[activeSlide].classList.remove('slider__item_active');
    sliderDots[activeSlide].classList.remove('slider__dot_active');
    activeSlide++;
    arr[activeSlide].classList.add('slider__item_active');
    sliderDots[activeSlide].classList.add('slider__dot_active');
}

function getSlidePrev(arr){
    arr[activeSlide].classList.remove('slider__item_active');
    sliderDots[activeSlide].classList.remove('slider__dot_active');
        if(activeSlide === 0){
            activeSlide = arr.length;
        }
    activeSlide--;
    arr[activeSlide].classList.add('slider__item_active');
    sliderDots[activeSlide].classList.add('slider__dot_active');
}


// ~~~~~~~~~ управление с помощью точек ~~~~~~~~

sliderDots.forEach(element => {
        element.onclick = function() {
            sliderItem[activeSlide].classList.remove('slider__item_active');
            sliderDots[activeSlide].classList.remove('slider__dot_active');
            activeSlide = sliderDots.indexOf(element)
            sliderItem[activeSlide].classList.add('slider__item_active');
            element.classList.add('slider__dot_active');
        }
    })

    // ~~~~~~~~~ ЧЕРЕЗ ЦИКЛ ~~~~~~~~

// function getSlideNext(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element.classList.contains('slider__item_active')){
//             element.classList.remove('slider__item_active');
//             activeSlide = arr.indexOf(element);
//             activeSlide++;
//             if(activeSlide === arr.length){
//                 activeSlide = 0;
//             }
//             arr[activeSlide].classList.add('slider__item_active');
//             return;
//         }
//     }
// }