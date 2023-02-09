const editor = document.getElementById('editor')
const data = localStorage.getItem('data')
const resetText = Array.from(document.getElementsByClassName('reset'))


function getData() {
    try {
    return editor.value = data
    } catch {
    return null
    }
}

getData()

editor.addEventListener('input', () =>{
    localStorage.data = editor.value
})

resetText[0].addEventListener('click', () => {
    editor.value = ''
    localStorage.data = ''
})