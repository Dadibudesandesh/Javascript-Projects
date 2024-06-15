let addbtn = document.getElementById("btn");
addbtn.addEventListener("click", addchapter);
let perentList = document.getElementById("perentList");
let inputField = document.querySelector("#form-control");
let alertSound=new Audio("alert.mp3");



function addchapter(e) {
  let currbtn = e.currentTarget;
    let currInput = currbtn.previousElementSibling;
    let currChapter = currInput.value;
  if (currChapter == "") {                  // when user can click on add button  without filling data in input feild  then this message can be display
    alertSound.play();
    alert("Enter any chapter detailes");
  }
  else {
    if (perentList.children[0].className == "Emtmsg") {   // when all added data can remove or deleted then display massege
      perentList.children[0].remove();
    }
    let newLi = document.createElement("li");
    newLi.classList = "list-group";
    newLi.innerHTML = `<h3 class="h3">${currChapter}</h3> <button id="btn3" class="button2" onclick="editchapter(this)">Edit</button><button id="btn2" class="button3" onclick="deletchapter(this)">Delete</button>`;
    perentList.appendChild(newLi);
  }

  inputField.value=""; // for reset input feild when data can be added.
}

function deletchapter(currElement) {
  currElement.parentElement.remove();
  let perentList = document.getElementById("perentList");
  if (perentList.children.length <= 0) {
    let msg = document.createElement("h3");
    msg.textContent = "Add Chapters ......";
    msg.style.textAlign = "center";
    msg.style.marginTop = "10%";
    perentList.appendChild(msg);
    msg.classList.add("Emtmsg");
  }
}

function editchapter(currElement) {
  if (currElement.textContent == "Done") {
    currElement.textContent = "Edit";
    currChapterName = currElement.previousElementSibling.value;
    let currheading = document.createElement("h3");
    currheading.className = "h3";
    currheading.textContent = currChapterName;
    currElement.parentElement.replaceChild(
      currheading,
      currElement.previousElementSibling
    );
  } else {
    currElement.textContent = "Done";
    let currChapterName = currElement.previousElementSibling.textContent;
    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.placeholder = "Chapter Name";
    currInput.style.overflow = "hidden";
    currInput.style.marginRight = "auto";
    currInput.value = currChapterName;
    currElement.parentElement.replaceChild(
      currInput,
      currElement.previousElementSibling
    );
  }
}