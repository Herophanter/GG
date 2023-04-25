const input = document.querySelector("#txt");
const addBtn = document.querySelector("button");
const field = document.querySelector(".field");
// addBtn.addEventListener("click")

let date = new Date();

addBtn.onclick = () => {
   
    enterList();
    input.value = "";
}
window.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        enterList();
        input.value ="";
    }
})

const enterList = () => {
    if(input.value.length == 0){
        alert("List oruulna uu ");
    }else{
        field.innerHTML += `
            <p>${input.value + " " + date.getHours() + ":" + date.getMinutes()}</p>
        `
    }
}