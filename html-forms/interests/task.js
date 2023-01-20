const interestCheck = [...document.querySelectorAll('.interest__check')]
const interest = [...document.querySelectorAll('ul.interests.interests_active')]

// ~~~~~~~ 1 Основная задача

// function changeInterest(){
//     interest.forEach((childElement) => {
//         let parentCheckBox = childElement.parentElement.querySelector('input')
//         if(parentCheckBox === event.target & parentCheckBox.checked === true){
//             [...childElement.querySelectorAll('input')].forEach(elem => elem.checked = true)
//         } else if(parentCheckBox === event.target & parentCheckBox.checked === false){
//             [...childElement.querySelectorAll('input')].forEach(elem => elem.checked = false)
//         }
//     })
// }

interestCheck.forEach(el => addEventListener('click', changeInterest))



// ~~~~~~~2 Повышенный уровень сложности (неограниченный уровень вложенности)

function changeInterest(){
    checkParent()
    let containetEvent = event.target.closest('ul')
    console.log(containetEvent)
    let elementsOfcontainetEvent = [...containetEvent.querySelectorAll('input')]
    let parentCheckBox = containetEvent.parentElement.closest('.interest').querySelector('.interest__check')
    console.log(parentCheckBox)
    let length = 0
    for(let i = 0; i < elementsOfcontainetEvent.length; i++){
        if (elementsOfcontainetEvent[i].checked === true){
            length++
        } 
    }
    if(length === 0){
        parentCheckBox.indeterminate = false
        parentCheckBox.checked= false
    } else if (length === elementsOfcontainetEvent.length){
            parentCheckBox.indeterminate = false
            parentCheckBox.checked= true
    } else{
            parentCheckBox.indeterminate = true
            parentCheckBox.checked= false
    }
}

function checkParent(){
    let eventParentContainer = event.target.closest('.interest')
    let parentCheckBox = eventParentContainer.querySelector('input')
    let childrenList = [...eventParentContainer.querySelectorAll('li')]
    childrenList.forEach((list) => {
        let checkBox = [...list.querySelectorAll('input')]
        if(parentCheckBox.checked === true){
            checkBox[0].checked = true
        } else if(parentCheckBox.checked === false){
            checkBox[0].checked = false
        }
    })
}


