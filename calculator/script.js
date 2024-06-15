let inputText = document.querySelector(".input-text");
let values = document.querySelectorAll("a");
let string = "";
let inputData;
let dot;
values.forEach(value => {
    value.addEventListener("click", (e) => {
        inputData = e.target.innerText;
        if (inputData=="C" || inputData=="=" || inputData=="←") {
             if(inputData === "C") {
                inputText.value = "";
                string = "";
            } else if (inputData === "=") {
                
                string = eval(string);
                inputText.value = string;
            }
            else if (inputData === "←") {
                string = inputText.value;
                inputText.value = string.slice(0, -1);
                string = inputText.value;
            }
        }
        else {
            string = string + inputData
            inputText.value = string;
        }
    });
});



