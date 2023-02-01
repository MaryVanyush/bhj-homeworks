getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const hole = document.querySelectorAll('.hole');
for(let elem of hole) {
    elem.onclick = function() {
        if(dead.textContent > 9){
            dead.textContent++;
            alert("Победа!");
            location.reload();
            return;
        } else if (lost.textContent > 4) {
            lost.textContent++;
            alert("Поражение");
            location.reload();
            return;
        }
        if(elem.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
    }
}
