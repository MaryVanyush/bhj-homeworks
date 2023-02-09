const popup = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close')

function getState() {
    const state = localStorage.getItem('state')
        if(state === 'true'){
            popup.classList.remove('modal_active')
        } else {
            popup.classList.add('modal_active')
        }
}

getState()

modalClose.addEventListener('click', () =>{
    popup.classList.remove('modal_active')
    localStorage.state = 'true'
})