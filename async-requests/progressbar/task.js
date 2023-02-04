const progress = document.getElementById('progress')
const btnSend = document.getElementById('send')


btnSend.addEventListener('click', sendFile)

function sendFile(){
    const form = document.getElementById('form')
    form.onsubmit = (() => {
        const file = document.getElementById('file')
        let xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')

        xhr.upload.onload = function() {
            if (xhr.status == 200) {
                console.log("Успех")
            } else {
                console.log("Ошибка " + this.status)
            }
            }

            xhr.upload.onprogress = function(event) {
                // console.log(`Отправлено ${event.loaded} из ${event.total} байт`)
                // console.log(event.lengthComputable)
                // console.log(event.total)
                progress.value = (event.loaded)/(event.total)
            }
            
            xhr.onerror = function() {
                console.log('error')
            }
            
            let formData = new FormData()
            formData.append('file', file.files[0])
            xhr.send(formData)
            event.preventDefault()
    })
}