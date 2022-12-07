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


// #2 как выводить в верном формате?

// let timerId = null;
// let seconds = document.getElementById("timer");

// const getFormat = function format(seconds) {
//     let sec = +seconds.textContent;
//     let s = (sec % 60).toString();
//     let m = Math.floor(sec / 60 % 60).toString();
//     let h = Math.floor(sec / 60 / 60 % 60).toString();
//     return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
// }
// seconds.textContent = getFormat(seconds);


// const timer = function(){
// if(seconds.textContent === '00:00:00'){
//     clearInterval(timerId);
//     alert("Вы победили в конкурсе!");
//     return;
// }
// // seconds--;
// console.log(parseInt(seconds.textContent));
// seconds.textContent = getFormat(seconds);
// }
// timerId = setInterval(timer, 1000);


// #3  как загрузить, а не открыть?

let timerId = null;
const timer = function(){
const seconds = document.getElementById("timer");
if(seconds.textContent === '0'){
    clearInterval(timerId);
    // let url = document.createElement('a');
    // url.href = "http://www.mozilla.org";
    // location = url.href;
    const button = document.getElementById('push-me');
    button.click();
    return;
}
seconds.textContent--;
}
timerId = setInterval(timer, 1000);




