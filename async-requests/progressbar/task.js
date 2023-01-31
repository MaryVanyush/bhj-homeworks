const progress = document.getElementById('progress')
const btnSend = document.getElementById('send')
const form = document.getElementById('form')

btnSend.addEventListener('click', f)

function f(){
    event.preventDefault()
    let xhr = new XMLHttpRequest()
    xhr.addEventListener('load', (e) => {

            progress.value = e.timeStamp
            // progress.value = (xhr.readyState)*2.5/10
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll')
    const formData = new FormData(form)
    xhr.send(formData)
    
}
