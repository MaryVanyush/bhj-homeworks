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

const clickerCounter = document.getElementById("clicker__counter");
const clickerCookie = document.getElementById("cookie");
clickerSpeed = document.getElementById('clicker__speed');
const start = new Date().getTime();
clickerCookie.onclick = function() {
    clickerCounter.textContent++;
    setTimeout(() => {
        clickerCookie.width = 200;
    }, 2);
    clickerCookie.width = 210;
    const end = new Date().getTime();
    clickerSpeed.textContent = (1/((end - start)/clickerCounter.textContent)*1000).toFixed(2);
};


