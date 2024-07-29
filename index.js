// let greetBtn = document.getElementById("greetBtn");

// greetBtn.addEventListener("click",()=>{
// console.log("Hello")
// })

// ---------- Events ----------
let inputEl = document.createElement("input");
function printKey(event){
    console.log(event.key);
}
document.body.appendChild(inputEl);
inputEl.addEventListener("keydown", printKey);



