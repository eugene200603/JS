let stars = document.querySelectorAll(".star");
let slen = stars.length;
let num;

for (let i = 0; i < slen; i++) {
    stars[i].addEventListener("mouseover", mouseover);
    stars[i].addEventListener("mouseout", mouseout);
    stars[i].addEventListener("click", click);
    stars[i].addEventListener("dblclick", dblclick);
}


function mouseover() {
    for (let i = 0; i < this.id.substr(4); i++) {
        stars[i].src = "Images/chngstar.gif";
    }
}

function mouseout() {
    for (let i = 0; i < this.id.substr(4); i++) {
        stars[i].src = "Images/star.gif";
    }
}

function click() {
    for (let i = 0; i < this.id.substr(4); i++) {
        stars[i].src = "Images/chngstar.gif";
        stars[i].removeEventListener("mouseout", mouseout);
        document.getElementById("score").innerHTML = `評分為<span style="        color:red;font-size:30px";>${i + 1}</span>顆星`;
    }
    for (let i = 0; i < slen; i++) {
        stars[i].removeEventListener("mouseover", mouseover);
        stars[i].removeEventListener("mouseout", mouseout);
        stars[i].removeEventListener("click", click);
    }
}



function dblclick() {
    for (let i = 0; i < slen; i++) {
        stars[i].src = "Images/star.gif";
        stars[i].addEventListener("mouseover", mouseover);
        stars[i].addEventListener("mouseout", mouseout);
        stars[i].addEventListener("click", click);
        document.getElementById("score").innerHTML = `請評分`;
    }
}