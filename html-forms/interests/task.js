const interestCheck = [...document.querySelectorAll('.interest__check')]
const interest = [...document.querySelectorAll('ul.interests.interests_active')]

// function changeInterest(){
//     interest.forEach((childElement) => {
//         if(childElement.parentElement.querySelector('input') === event.target & childElement.parentElement.querySelector('input').checked === true){
//             [...childElement.querySelectorAll('input')].forEach(elem => elem.checked = true)
//         } else if(childElement.parentElement.querySelector('input') === event.target & childElement.parentElement.querySelector('input').checked === false){
//             [...childElement.querySelectorAll('input')].forEach(elem => elem.checked = false)
//         }
//     })
// }

// interestCheck.forEach(el => addEventListener('click', changeInterest))



// ~~~~~~~2 неограниченный уровень вложенности

// почему не работает indeterminate. При проставленных всех children не меняется на checked ?????????????

function changeInterest(){
    interest.forEach((childElement) => {
        if(childElement.parentElement.querySelector('input') === event.target & childElement.parentElement.querySelector('input').checked === true){
            [...childElement.querySelectorAll('input')].forEach(elem => elem.checked = true)
        } else if(childElement.parentElement.querySelector('input') === event.target & childElement.parentElement.querySelector('input').checked === false){
            [...childElement.querySelectorAll('input')].forEach(elem => elem.checked = false)
        }
    })
    checkedChild()
}

interestCheck.forEach(el => addEventListener('click', changeInterest))

function checkedChild(){
    interest.forEach((childElement) => {
        let arr = [...childElement.querySelectorAll('input')]
        let length = 0
        for(let i = 0; i < arr.length; i++){
            if (arr[i].checked === true){
                length++
            }
            
            if(length === arr.length){
                childElement.parentElement.querySelector('input').checked = true
            } else if (length === 0) {
                childElement.parentElement.querySelector('input').checked = false
            } else {
                childElement.parentElement.querySelector('input').indeterminate = true
            }
        }
    })
}

