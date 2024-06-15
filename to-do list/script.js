const inputBox=document.getElementById("input-box");
const list=document.getElementById("list-container");
const addButton=document.getElementById("button");
const alertMessage= new Audio('error.mp3');


addButton.addEventListener("click",()=>{
    if(inputBox.value===""){
        alertMessage.play();
        alert("Write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerText = inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerText="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
});

list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showData(){
    list.innerHTML=localStorage.getItem("data");
}

showData();

console.log("\u00d7");