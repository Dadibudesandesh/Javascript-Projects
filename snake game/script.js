let inputDirection = { x: 0, y: 0 };
const foodSound = new Audio('hunting.mp3'); // in bracates under give a sound url
const gameOverSound = new Audio('fall.wav');
const moveSound = new Audio('');
const musicSound = new Audio('bg.mp3');
let highScore=document.getElementById("highScore");
let speed = 5;
let lastPaintTime = 0;
let score = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
 food = { x: 6, y: 7 };

// game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    // console.log(ctime);
    lastPaintTime = ctime;
    gameEngine();
}

function iscollide(snake) {
    // if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
            gameOverSound.play();
        }
    }
    //if you bumb to te wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
}

function gameEngine() {
    // part 1 : updating the snake array and food
    if (iscollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        foodSound.pause();
        inputDirection = { x: 0, y: 0 };
        alert("game over , press any key to restart");
        snakeArr = [
            { x: 13, y: 15 }
        ];
        // musicSound.play();
        score = 0;
    }

    let hiScore=localStorage.getItem("highScore");
    if(hiScore === null){
       let highscorevalue=0;
        localStorage.setItem("HighScore",JSON.stringify(highscorevalue));
    }
    else{
        highScore.innerHTML= "HighScore : " + highscorevalue;
    }

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score+=1;
        if(score>highScore){
            highScore = score;
        }
        scoreBox.innerHTML="Score : "+score;
        let a = 2;
        let b = 16;
        snakeArr.unshift({ x: snakeArr[0].x + inputDirection.x, y: snakeArr[0].y + inputDirection.y });
        food = { x: Math.round(a + (b - a) * Math.random()),y: Math.round(a + (b - a) * Math.random()) };
    }

    //moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = {...snakeArr[i] };
    }
    snakeArr[0].x += inputDirection.x;
    snakeArr[0].y += inputDirection.y;



    // part 2 : display the snake and food

    // display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add("head");
        }
        else {
            snakeElement.classList.add("snake");
        }
        board.appendChild(snakeElement);
    });
    // display the food
        foodElement = document.createElement("div");
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add("food");
        board.appendChild(foodElement);
}


// main logic start here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    musicSound.play();
    inputDirection = { x: 0, y: 1 }; // start the game
    switch (e.key) {
        case "ArrowUp":
            inputDirection.x = 0;
            inputDirection.y = -1;
            console.log("Arrowup");
            break;
        case "ArrowDown":
            inputDirection.x = 0;
            inputDirection.y = 1;
            console.log("Arrowdown");
            break;
        case "ArrowLeft":
            inputDirection.x = -1;
            inputDirection.y = 0;
            console.log("Arrowleft");
            break;
        case "ArrowRight":
            inputDirection.x = 1;
            inputDirection.y = 0;
            console.log("Arrowright");
            break;
        default:
            break;
    }
});