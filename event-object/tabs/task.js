const tab = Array.from(document.getElementsByClassName('tab'));
const tabContents = Array.from(document.getElementsByClassName('tab__content'));

let index = 0;

function changeTab() {
    tab[index].classList.remove('tab_active');
    tabContents[index].classList.remove('tab__content_active');
    index = tab.indexOf(event.target);
    tab[index].classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
}

tab.forEach(element => { 
    element.addEventListener('click', changeTab);
})