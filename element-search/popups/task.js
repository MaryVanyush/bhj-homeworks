const btnClose = document.getElementsByClassName('modal__close');
const btnShow = document.getElementsByClassName('show-success');
const btnSuccess = document.getElementsByClassName('btn_success');
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active')

btnClose[0].onclick = function() {
    modalMain.classList.remove('modal_active')
}

btnShow[0].onclick = function() {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active')
}

btnClose[2].onclick = function() {
    modalSuccess.classList.remove('modal_active')
}

btnSuccess[0].onclick = function() {
    modalSuccess.classList.remove('modal_active')
}



