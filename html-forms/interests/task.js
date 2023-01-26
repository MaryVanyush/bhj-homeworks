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

interestCheck.forEach(el => addEventListener('change', changeInterest))



// ~~~~~~~2 Повышенный уровень сложности (неограниченный уровень вложенности)


function changeInterest(){
    let eventParentContainer = event.target.closest('.interest')
    let containetEvent = event.target.closest('ul')
    let elementsOfcontainetEvent = [...containetEvent.querySelectorAll('input')]
    let childrenList = [...eventParentContainer.querySelectorAll('li')]
    let сheckBoxEvent = eventParentContainer.querySelector('input')
    if(childrenList.length != 0){
        checkChildren(childrenList, сheckBoxEvent)
    }
    let parentCheckBox = containetEvent.parentElement.closest('.interest') ? containetEvent.parentElement.closest('.interest').querySelector('.interest__check'):null
    if(parentCheckBox){
        checkParent(elementsOfcontainetEvent, parentCheckBox)
    }  
}

function checkChildren(childrenList, сheckBoxEvent){
    childrenList.forEach((list) => {
        let checkBox = [...list.querySelectorAll('input')]
        if(сheckBoxEvent.checked === true){
            checkBox[0].checked = true
        } else if(сheckBoxEvent.checked === false){
            checkBox[0].checked = false
        }
    })
}

function checkParent(elementsOfcontainetEvent, parentCheckBox){
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
    let parentParentCheckBox = parentCheckBox.closest('.interests_active') ? parentCheckBox.closest('.interests_active').parentElement.querySelector('input') : null
    let parentParentChildren = parentCheckBox.closest('.interests_active') ? parentCheckBox.closest('.interests_active').querySelectorAll('input') : null
    if(parentParentCheckBox){
        checkParent(parentParentChildren, parentParentCheckBox)
    } else if(parentParentCheckBox === undefined){
        return
    }
}