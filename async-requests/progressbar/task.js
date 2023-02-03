const progress = document.getElementById('progress')
const btnSend = document.getElementById('send')


btnSend.addEventListener('submit', f)

function f(){
    const file = document.getElementById('file').files[0]
    event.preventDefault()
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    
    xhr.onprogress = function(event) {
        console.log(`Отправлено ${event.loaded} из ${event.total} байт`)
        progress.value = (event.loaded)/(event.total)
    }

    xhr.onloadend = function() {
        if (xhr.status == 200) {
            console.log("Успех")
        } else {
            console.log("Ошибка " + this.status)
        }
        }

    
    let formData = new FormData()
    formData.append('file', file)
    xhr.send(formData)
}
