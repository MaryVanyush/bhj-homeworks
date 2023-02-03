// #1 игра кликер

// const clickerCounter = document.getElementById("clicker__counter");
// const clickerCookie = document.getElementById("cookie");
// clickerSpeed = document.getElementById('clicker__speed');
// clickerCookie.onclick = function() {
//     clickerCounter.textContent++;
//     setTimeout(() => {
//         clickerCookie.width = 200;
//     }, 2);
//     clickerCookie.width = 210;
// };



// #2 игра кликер + скорость клика в секунду

const clickerCounter = document.getElementById("clicker__counter")
const clickerCookie = document.getElementById("cookie")
clickerSpeed = document.getElementById('clicker__speed')
let start = new Date().getTime()
clickerCookie.onclick = function(e) {
    clickerCounter.textContent++
    setTimeout(() => {
        clickerCookie.width = 200
    }, 2)
    clickerCookie.width = 210
    const end = new Date().getTime()
    clickerSpeed.textContent = (1/((end - start))*1000).toFixed(2)
    start = end
}

// let speedStart = clickerCounter.textContent
// let speedEnd = 0
// setInterval(() => {
// let speedEnd = clickerCounter.textContent - speedStart
// clickerSpeed.textContent = speedEnd
// speedStart = clickerCounter.textContent
// }, 1000)


