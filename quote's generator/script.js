const api="https://api.quotable.io/quotes/random?tags=technology,famous-quotes";
const quote=document.querySelector("#quote");
const author=document.querySelector("#author");
const newButton=document.querySelector(".newButton")
const tweetButton=document.querySelector(".tweetButton")

newButton.addEventListener("click",()=>{
    getQuote(api);
});

tweetButton.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerText +"  - By "+ author.innerText, "Tweet Window","width=600,height=300");
});

async function getQuote(url){
    const response=await fetch(url);
    var data=await response.json();
    quote.innerHTML=data[0].content;
    author.innerHTML=data[0].author;
}
getQuote(api);




























