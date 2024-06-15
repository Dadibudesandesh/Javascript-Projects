

let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let resetBtn = document.querySelector(".reset");
let msgO = document.querySelector(".msgO");
let msgX = document.querySelector(".msgX");
let newGame = document.querySelector(".newBtn");
let main = document.querySelector(".main");
let msgContainer = document.querySelector(".msg-container");
const winnerSound = new Audio('winner.mp3');
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    // msg.classList.add("hide");
    newGame.classList.add("hide");
    // msgContainer.classList.add("hide");
    msgO.classList.add("hide");
    msgX.classList.add("hide");
    // main.classList.remove("hide");

}
boxes.forEach(box => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "O";
            box.style.color = "red";
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.color = "orange";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const winnerO = () => {
    msgO.classList.remove("hide");
    newGame.classList.remove("hide");
    // resetBtn.classList.add("hide");
    disableBoxes();
}
const winnerX = () => {
    msgX.classList.remove("hide");
    newGame.classList.remove("hide");
    // resetBtn.classList.add("hide");
    disableBoxes();
}

const checkwinner = () => {
    for (pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        let p1v = boxes[pattern[0]].innerText;
        let p2v = boxes[pattern[1]].innerText;
        let p3v = boxes[pattern[2]].innerText;

        // console.log(p1v,p2v,p3v);

        if (p1v != "" && p2v != "" && p3v != "") {
            if (p1v === p2v && p2v === p3v) {
                if (p1v == "O") {
                    // container.classList.add("hide");
                    resetBtn.classList.remove("hide");
                    winnerSound.play();
                    winnerO();
                }
                else {
                    // container.classList.add("hide");
                    resetBtn.classList.remove("hide");
                    winnerSound.play();
                    winnerX();
                }
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

