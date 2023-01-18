const rotators = Array.from(document.querySelectorAll('.rotator__case'))

let delay = 1000;

// function f(){
//     for (let el of rotators){
//         if(el.classList.contains('rotator__case_active')) {
//             if(!el.nextElementSibling){
//                 el.classList.remove('rotator__case_active')
//                 rotators[0].classList.add('rotator__case_active')
//                 break
//             }
//         el.classList.remove('rotator__case_active')
//         el.nextElementSibling.classList.add('rotator__case_active')
//         break
//         }
//     }
// }
    
// setInterval(f, delay)



// через рекурсию
// Добавьте через data-атрибуты тегов опции:
// Цвет текста
// Скорость смены слайдов

(function rotatorActive(){
    for (let el of rotators){
        el.style.color = el.dataset.color}
    setTimeout(function(){
        for (let el of rotators){
            if(el.classList.contains('rotator__case_active')) {
                if(!el.nextElementSibling){
                    delay = Number(el.dataset.speed)
                    el.classList.remove('rotator__case_active')
                    rotators[0].classList.add('rotator__case_active')
                    break
                }
            delay = Number(el.dataset.speed)
            el.classList.remove('rotator__case_active')
            el.nextElementSibling.classList.add('rotator__case_active')
            break
            }
        }
        rotatorActive() 
    }, delay)
})()