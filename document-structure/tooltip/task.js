const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'))
const tooltip = document.querySelectorAll('.tooltip')

document.addEventListener('scroll', ()=> {
    tooltip[0].classList.remove('.tooltip_active')
    tooltip[0].style.display ='none'
})

// Подсказки под текстом:

// function showTooltip(){
//         let positionElem = event.target.getBoundingClientRect()
//         if(!tooltip[0].classList.contains('.tooltip_active')){
//             tooltip[0].classList.add('.tooltip_active')
//             tooltip[0].textContent = event.target.attributes.title.nodeValue
//             tooltip[0].style.display ='block'
//             tooltip[0].style.left = `${positionElem.x}px`
//             tooltip[0].style.top = `${positionElem.y + 20}px`
//         } else if(tooltip[0].classList.contains('.tooltip_active')){
//             tooltip[0].classList.remove('.tooltip_active')
//             tooltip[0].style.display ='none'
//         } 
//         event.preventDefault()
//     }
    
//     hasTooltip.forEach(el => el.addEventListener('click', showTooltip))



//  дополнительный атрибут data-position для настройки места появления подсказки:

function showTooltip(){
    event.preventDefault()
    let positionElem = event.target.getBoundingClientRect()
    if(!tooltip[0].classList.contains('.tooltip_active')){
        tooltip[0].classList.add('.tooltip_active')
        tooltip[0].textContent = event.target.attributes.title.nodeValue
        tooltip[0].style.display ='block'
        let positionTooltipY = {
            top: - 30,
            bottom: + 20
        }
        let positionTooltipX = {
            left: (positionElem.x) - (tooltip[0].offsetWidth),
            right: (event.target.offsetWidth) + (event.target.offsetWidth),
        }
            for (const iterator in positionTooltipY) {
                if(iterator === event.target.attributes[3].value){
                    tooltip[0].style.top = `${positionElem.y + positionTooltipY[iterator]}px`
                    break
                } else {
                    tooltip[0].style.top = `${positionElem.y + 20}px`
                }
            }
            for (const iterator in positionTooltipX) {
                if(iterator === event.target.attributes[3].value){
                    tooltip[0].style.left = `${positionTooltipX[iterator]}px`
                    tooltip[0].style.top = `${positionElem.y}px`
                    break
                } else {
                    tooltip[0].style.left = `${positionElem.x}px`
                }
            }
    } else if(tooltip[0].classList.contains('.tooltip_active')){
        tooltip[0].classList.remove('.tooltip_active')
        tooltip[0].style.display ='none'
    }
}

hasTooltip.forEach(el => el.addEventListener('click', showTooltip))