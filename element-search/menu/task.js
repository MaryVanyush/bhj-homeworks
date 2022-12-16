const menuLink = Array.from(document.getElementsByClassName('menu__link'));
// const menuSub = Array.from(document.getElementsByClassName('menu_sub'));

// задача №1   ~~~~~~~~~~~~~~~ обращение по индексам ~~~~~~~~~~~~~~~~~~~~

// menuLink.forEach(element => {
//     if(element.textContent === 'О компании'){
//         element.onclick = function() {
//             menuSub[0].classList.add('menu_active');
//             menuSub[1].classList.remove('menu_active');
//             return false;
//         }
//     } else if(element.textContent === 'Услуги'){
//         element.onclick = function() {
//             menuSub[1].classList.add('menu_active');
//             menuSub[0].classList.remove('menu_active');
//             return false;
//         }
//     }
// });


// menuLink.forEach(element => {
//         if(element.textContent === 'О компании'){
//             element.onclick = function() {
//                 menuLink.forEach(elem => {
//                     if(elem.textContent === 'Клиенты'){
//                     elem.closest('.menu_sub').classList.add('menu_active');
//                 }})
//                 return false;
//             }
//         } else if(element.textContent === 'Услуги'){
//             element.onclick = function() {
//                 menuLink.forEach(elem => {
//                     if(elem.textContent === 'Обучение'){
//                     elem.closest('.menu_sub').classList.add('menu_active');
//                 }})
//                 return false;
//             }
//         }
//     });



//задача №2 более 1 навигационного меню

menuLink.forEach(element => { 
    if(element.textContent === 'О компании' || element.textContent === 'Услуги'){
        element.onclick = function() {
            element.nextElementSibling.classList.toggle('menu_active');
            return false;
        }
    }
});

