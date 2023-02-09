const signinBtn = document.getElementById('signin__btn')
const welcome = document.getElementById('welcome')
const signin = document.getElementById('signin')
signinBtn.addEventListener('click', logIn)
const userId = localStorage.getItem('userId')

function getDataFromLocalstorage() {
    try {
        if(localStorage.userId != ''){
            console.log(localStorage.userId)
            signin.classList.remove('signin_active')
            welcome.classList.add('welcome_active')
            return document.getElementById('user_id').textContent = userId
        }
    } catch {
    return null
    }
}

getDataFromLocalstorage()

function logIn(){
    const form = document.getElementById('signin__form')
    let login = form.querySelector('[name="login"]').value
    let password = form.querySelector('[name="password"]').value
    const modalTitle = document.querySelector('.modal__title')
    if(login === '' || password === ''){
        event.preventDefault()
        const modal = document.querySelector('.modal')
        modal.classList.add('modal_active')
        modalTitle.textContent = 'Необходимо заполнить поля логин/пароль'
        const modalCloseBtn = document.querySelector('.button')
        modalCloseBtn.addEventListener('click', () =>{
            modal.classList.remove('modal_active')
        })
        return
    }
    form.onsubmit = (() => {
        (async () => {
        let formData = new FormData()
        formData = JSON.stringify({ login, password})
        let response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: formData
        })
        let result = await response.json()
        if(result.success === false){
            const modal = document.querySelector('.modal')
            modal.classList.add('modal_active')
            modalTitle.textContent = 'Неверный логин/пароль'
            const modalCloseBtn = document.querySelector('.button')
            modalCloseBtn.addEventListener('click', () =>{
                modal.classList.remove('modal_active')
                console.log(login, password)
                form.querySelector('[name="login"]').value = ''
                form.querySelector('[name="password"]').value = ''
                event.preventDefault()
                return
            })
        } else {
            signin.classList.remove('signin_active')
            welcome.classList.add('welcome_active')
            document.getElementById('user_id').textContent = JSON.parse(result.user_id)
            localStorage.userId = result.user_id
        }
    })()
    event.preventDefault()
    })
}