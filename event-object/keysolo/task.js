class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    let timerId = null;
    let seconds = document.getElementById("timer");
    seconds.textContent = this.wordElement.textContent.length;
    const timer = () => {
    if(seconds.textContent === '0'){
        this.fail();
        updateTimer();
        return;
    }
    seconds.textContent--;
    }
    timerId = setInterval(timer, 1000);

  let updateTimer = () => {
    clearInterval(timerId);
    seconds.textContent = this.wordElement.textContent.length;
    timerId = setInterval(timer, 1000);
  }

    let registerSimbol = (event) => {
      let currentSymbol = this.currentSymbol.textContent;
      let eventSymbol;
      if(!event){
        return;
      }
      eventSymbol = event.key.toLowerCase();
      if (currentSymbol === eventSymbol){
          this.success();
          updateTimer();
        } else {
          this.fail();
        }
      }
      document.addEventListener('keydown', registerSimbol);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }
    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }
  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

