const chatWidget = document.querySelector('.chat-widget')
const chatWidgetInput = document.getElementById('chat-widget__input')
const messages = document.querySelector( '.chat-widget__messages' )

chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'))
chatWidgetInput.addEventListener('blur', () => {
  let timeoutId = setTimeout(() => {
    if(chatWidgetInput == document.activeElement){
      clearTimeout(timeoutId)
      return 
    } 
      const messageBot = [...document.querySelectorAll('.message')]
      messages.innerHTML +=  ` <div class="message">
        <div class="message__time">${messageBot[0].querySelector('.message__time').textContent = new Date().toTimeString().replace(/:[0-9]{2,2} .*/, '')}</div>
        <div class="message__text">${messageBot[0].querySelector('.message__text').textContent = "У Вас остались вопросы?"}</div>
        </div>`
        messages.lastChild.scrollIntoView({block: "center", behavior: "smooth"})    // автоскролл вниз
  }, 3000)
})

function getMessage() {
    const message = [
        'Чем я могу помочь?',
        'Подождите',
        'Какой у вас вопрос?',
        'Пожалуйста ожидайте',
        'Хорошего вам дня!',
        'Рады помочь!',
        'К сожалению, все операторы сейчас заняты.',
        'Мы ответили на ваш вопрос?',
    ],
      index = Math.floor(Math.random() * message.length);
    return message[index];
}


function sendMessage(e){
  if(e.code === 'Enter'){
    const messageClient = [...document.querySelectorAll('.message_client')]
  messageClient.find((children) => {
    if(chatWidgetInput.value.length > 0) {
      let newText = children.querySelector('.message__text').textContent
      let newData = children.querySelector('.message__time').textContent
      newData = new Date().toTimeString().replace(/:[0-9]{2,2} .*/, '')
      newText = chatWidgetInput.value
      messages.innerHTML += ` <div class="message message_client">
        <div class="message__time">${newData}</div>
        <div class="message__text">${newText}</div>
        </div>`
      chatWidgetInput.value = ""
      const messageBot = [...document.querySelectorAll('.message')]
      messages.innerHTML +=  ` <div class="message">
        <div class="message__time">${messageBot[0].querySelector('.message__time').textContent = new Date().toTimeString().replace(/:[0-9]{2,2} .*/, '')}</div>
        <div class="message__text">${messageBot[0].querySelector('.message__text').textContent = getMessage()}</div>
        </div>`
    }
  })
  messages.lastChild.scrollIntoView({block: "center", behavior: "smooth"})   // автоскролл вниз
  }
}


chatWidgetInput.addEventListener('keydown', sendMessage)