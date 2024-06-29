let score = document.querySelector(".score");
let count = 0;
score.innerText = `Your Score: ${count}`;

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

let div1 = document.querySelector(".div1");
div1.addEventListener("click", function() {
    div1.style.display = "none";
    score.innerText = `Your Score: ${++count}`;
    checkWin();
});

let div2 = document.querySelector(".div2");
div2.addEventListener("click", function() {
    div2.style.display = "none";
    score.innerText = `Your Score: ${++count}`;
    checkWin();
});

let div3 = document.querySelector(".div3");
div3.addEventListener("click", function() {
    div3.style.display = "none";

    div1.style.display = "none";
    div2.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";

    h1.innerText = "Game Over!";
    h1.style.display = "block";
    h2.style.display = "none";
    
    score.style.textAlign = "center";
    score.style.margin = "2% 0 0 0";
});

let div4 = document.querySelector(".div4");
div4.addEventListener("click", function() {
    div4.style.display = "none";
    score.innerText = `Your Score: ${++count}`;
    checkWin();
});

let div5 = document.querySelector(".div5");
div5.addEventListener("click", function() {
    div5.style.display = "none";
    score.innerText = `Your Score: ${++count}`;
    checkWin();
});

function checkWin() {
    if (count == 4) {
        h1.innerText = "Amazing, You Won!";
        h1.style.display = "block";
        score.style.textAlign = "center";
        score.style.margin = "2% 0 0 0";
        h2.style.display = "none";

        div3.style.display = "none";
    }
}
//
setTimeout(function(){div1.classList.add("animation1");} , 1000);
setTimeout(function(){div2.classList.add("animation2");} , 4000);
setTimeout(function(){div3.classList.add("animation3");} , 8000);
setTimeout(function(){div4.classList.add("animation4");} , 12000);
setTimeout(function(){div5.classList.add("animation5");} , 15000);