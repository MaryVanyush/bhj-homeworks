const rotators = Array.from(document.querySelectorAll('.rotator__case'))

let delay = 1000;

function f(){
    for (let el of rotators){
        el.style.color = el.dataset.color
        if(el.classList.contains('rotator__case_active')) {
            if(!el.nextElementSibling){
                delay = el.dataset.speed
                el.style.color = el.dataset.color
                el.classList.remove('rotator__case_active')
                rotators[0].classList.add('rotator__case_active')
                break
            }
        delay = el.dataset.speed
        el.classList.remove('rotator__case_active')
        el.nextElementSibling.classList.add('rotator__case_active')
        break
        }
    }
}
    
setInterval(f, delay)
