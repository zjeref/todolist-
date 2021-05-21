let dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();

const form = document.querySelector("form");
const inputTask = document.getElementById("inputTask");
const activeUL = document.getElementById("active-list");


//Adding in list
let inputVAL
form.addEventListener('submit', test)
function test(e) {
    e.preventDefault();
    inputVAL = inputTask.value;
    createLI();
    inputTask.value = ""
}

function createLI() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputVAL));
    activeUL.insertBefore(li, activeUL.childNodes[0]);
    let input = document.createElement("input");
    input.type = "radio";
    li.insertBefore(input, li.childNodes[0]);
}


// function changeList() {
//     const activeUL = document.getElementById("active-list");
//     const activeListS = activeUL.querySelectorAll("input");
    
//     for(activeList of activeListS) {
//         activeList.addEventListener('click', markCmplt)
//     }
// }
    
// function markCmplt() {
//     const cmpltLI = activeList.parentElement;
//     console.log(cmpltLI)
// }


const setting = document.getElementById('settings');

setting.addEventListener('click', logout)
function logout(){
    window.location = "http://127.0.0.1:5500/";
}