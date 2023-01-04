const fontSize = document.querySelectorAll('.font-size')
const book = document.getElementById('book')

function changeFontSize(){
    event.preventDefault();
    fontSize.forEach((el) => el.classList.remove('font-size_active'))
    event.target.classList.add('font-size_active')
    if(event.target.classList.contains('font-size_small')){
        book.classList.add('book_fs-small')
    } else if(event.target.classList.contains('font-size_big')){
        book.classList.remove('book_fs-small', 'book_fs-big')
        book.classList.add('book_fs-big')
    } else{
        book.classList.remove('book_fs-small', 'book_fs-big')
    }
}

fontSize.forEach((el) => el.addEventListener('click', changeFontSize))

const colorText = document.querySelectorAll('a[data-text-color]')
const bgColor = document.querySelectorAll('a[data-bg-color]')

function changeColorText(){
    event.preventDefault()
    colorText.forEach((el) => el.classList.remove('color_active'))
    event.target.classList.add('color_active')  
    let index = [...colorText].indexOf(event.target)
    if(index === 1){
        book.classList.remove('book_color-whitesmoke', 'book_color-black')
        book.classList.add('book_color-gray')
    } else if(index === 2){
        book.classList.remove('book_color-gray', 'book_color-black')
        book.classList.add('book_color-whitesmoke')
    } else{
        book.classList.remove('book_color-whitesmoke', 'book_color-gray')
    }
}

colorText.forEach((el) => el.addEventListener('click', changeColorText))

    function changeBgColor(){
        event.preventDefault()
        bgColor.forEach((el) => el.classList.remove('color_active'))
        event.target.classList.add('color_active')
        let index = [...bgColor].indexOf(event.target)
    if(index === 0){
        book.classList.remove('book_bg-gray', 'book_bg-white')
        book.classList.add('book_bg-black')
    } else if(index === 1){
        book.classList.remove('book_bg-black', 'book_bg-white')
        book.classList.add('book_bg-gray')
    } else{
        book.classList.remove('book_bg-gray', 'book_bg-black')
    }
    }

    bgColor.forEach((el) => el.addEventListener('click', changeBgColor))