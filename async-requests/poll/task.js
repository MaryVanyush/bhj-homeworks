class Poll {
    constructor() {
        this.poll = document.querySelector('.poll')
        this.pollTitle = document.getElementById('poll__title')
        this.pollAnswers = document.getElementById('poll__answers')
    }

    fillPollTitle(value){
        this.pollTitle.textContent = value
    }

    crestePollAnswers(value){
        let btn = document.createElement('button')
        btn.className = 'poll__answer'
        btn.textContent = value
        this.pollAnswers.appendChild(btn)
    }
}


const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()

function getResponse(){
    const modal = document.querySelector('.modal')
    modal.classList.toggle('modal_active')
}

xhr.addEventListener('load', () => {
    if(xhr.status != 200){
        return
    }else {
        const dataObject = (JSON.parse(xhr.responseText)).data
        const poll = new Poll()
        poll.fillPollTitle(dataObject.title)
        dataObject.answers.forEach(element => {
            poll.crestePollAnswers(element)
        })
        const answerBtn = [...document.querySelectorAll('.poll__answer')]
        answerBtn.forEach(el => el.addEventListener('click', getResponse))
        const modalCloseBtn = document.querySelector('.btn')
        modalCloseBtn.addEventListener('click', getResponse)
    }
})

xhr.addEventListener('error', () => {
    alert('Запрос не удался')
})