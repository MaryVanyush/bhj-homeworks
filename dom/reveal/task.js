window.addEventListener('scroll', isVisibleReveal)

// function isVisibleReveal() {
//     const reveal = document.querySelectorAll('.reveal')
//     reveal.forEach((elem) => {
//         const {top, bottom} = elem.getBoundingClientRect()
//         if(bottom < 0){
//             return
//         }
//         if(top > window.innerHeight){
//             return
//         }
//         elem.classList.add('reveal_active')
//     })
// }

function isVisibleReveal() {
    const reveal = document.querySelectorAll('.reveal')
    reveal.forEach((reveal) => {
        const { innerHeight } = window;
        const { top } = reveal.getBoundingClientRect();
        if (top < innerHeight && top > 0) {
        reveal.classList.add("reveal_active");
        } else {
        reveal.classList.remove("reveal_active");
        }
    })
}
