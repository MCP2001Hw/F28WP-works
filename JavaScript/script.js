let head = document.getElementById("head");
myArray = ["White", "Black"]
i = 0;

function changeColor(event) {
    if (i > 2){
        i = 0
    }
    head.style.color = myArray[i++];
}

let btns = document.getElementById("buttons");
btns.addEventListener("click", changeColor);