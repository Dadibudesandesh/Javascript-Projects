let baseurl = "";

let dropdowns = document.querySelectorAll("select");
let toSelect = document.getElementById("to");
let fromSelect = document.getElementById("from");
let fromFlag = document.getElementById("fromFlag");
let toFlag = document.getElementById("toFlag");
let fromText = document.getElementById("fromText");
let toText = document.getElementById("toText");
let btn = document.getElementById("btn");


for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if (select.id === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.id === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.addEventListener("change", (e) => {
            updateFlag(e.target);
        });
    }
}

const updateFlag = (e) => {
    let currCode = e.value;
    let countryCode = countryList[currCode];
    // console.log(countryCode)
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = e.previousElementSibling;
    img.src = newSrc;

};

btn.addEventListener("click", async () => {
    let amount = fromText.value;
    if (amount === "" || amount < 1) {
        fromText.value = 1;
        amount = 1;
    } else {
        const url = `${baseurl}/${fromSelect.value.toLowerCase()}/${toSelect.value.toLowerCase()}`;
        let response = await fetch(url);
        let data = await response.json();
        let rate = data[toSelect.value.toLowerCase()];
        console.log(toSelect.value);
        toText.value = rate * fromText.value;
        // console.log(rate);
    }
})