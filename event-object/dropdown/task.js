const dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

// const dropdownItem = Array.from(document.getElementsByClassName('dropdown__item'));

function showDropdownItem() {
    dropdownValue[0].nextElementSibling.classList.toggle('dropdown__list_active');
}

dropdownValue[0].addEventListener('click', showDropdownItem);

dropdownItem.filter(element => { 
    element.addEventListener('click', changeLanguege);
})

function changeLanguege(){
    let index = dropdownItem.indexOf(this);
    dropdownValue[0].textContent = dropdownItem[index].textContent;
    showDropdownItem();
    event.preventDefault();
}


// dropdownItem.forEach(element => { 
//     element.onclick = function() {
//         // console.log(event.target)
//         // console.log(this)
//         dropdownValue[0].textContent = element.textContent;
//         dropdownValue[0].nextElementSibling.classList.toggle('dropdown__list_active');
//         return false;
//         }
//     });