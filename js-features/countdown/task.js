// #1

// let timerId = null;
// const timer = function(){
// const seconds = document.getElementById("timer");
// if(seconds.textContent === '0'){
//     clearInterval(timerId);
//     alert("Вы победили в конкурсе!");
//     return;
// }
// seconds.textContent--;
// }
// timerId = setInterval(timer, 1000);


// #2 таймер в формате 00:00:00

let timerId = null
let seconds = document.getElementById("timer")

const getFormat = function format(seconds) {
    let sec = +seconds.textContent
    let s = (sec % 60).toString()
    let m = Math.floor(sec / 60 % 60).toString();
    let h = Math.floor(sec / 60 / 60 % 60).toString()
    return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`
}

seconds.textContent = getFormat(seconds)

function returnFormat() {
    let arrayFromSeconds = (seconds.textContent).split(':')
    let s = +arrayFromSeconds[2]
    let m = +arrayFromSeconds[1]
    let h = +arrayFromSeconds[0]
    if(s > 0) {
        s--
        seconds.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`
        return
    } else if(m > 0){
        m--
        s = 59
        seconds.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`
        return
    } else if(h > 0){
        h--
        m = 59
        s = 59
        seconds.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`
    }
}

const timer = function(){
    if(seconds.textContent === '00:00:00'){
        clearInterval(timerId);
        alert("Вы победили в конкурсе!")
        return
    } else {
        returnFormat()
    }
}

timerId = setInterval(timer, 1000)



// // #3

// let timerId = null;
// const timer = function(){
// const seconds = document.getElementById("timer");
// if(seconds.textContent === '0'){
//     clearInterval(timerId);
//     let url = document.createElement('a');
//     url.href = "https://hitster.fm/hans-zimmer/cornfield-chase"
//     location = url.href;
//     const button = document.getElementById('push-me');
//     button.click();
//     return;
// }
// seconds.textContent--;
// }
// timerId = setInterval(timer, 1000);




