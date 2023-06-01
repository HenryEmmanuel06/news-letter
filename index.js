let subscribeBtn = document.querySelector("#btn-sus");
let errorEl = document.getElementById("error-empty")
let userEmail = document.getElementById("email");
let form = document.querySelector("form")
let modal = document.querySelector(".modal")
let container = document.querySelector(".container")
let dissBtn = document.getElementById("diss-btn")
form.addEventListener("submit", (e) => {
    let messages = []
   if(userEmail.value === "" || userEmail.value == null){
    messages.push("Valid email required")   
   } 
   e.preventDefault()
    if (messages.length > 0){
        e.preventDefault()
        errorEl.textContent = messages.join(", ")
        userEmail.style.borderColor = "hsl(4, 100%, 67%)"
        let style = document.createElement("style");
style.innerHTML = "::placeholder { color: hsl(4, 100%, 67%); }";
document.head.appendChild(style);
userEmail.style.backgroundColor = "hsl(4, 48%, 87%)"


    }
    if (messages.length <= 0){
        modal.style.display = "inline-block"
        container.style.display = "none"
        let currentEmail = document.getElementById("confirm-email");
        currentEmail.textContent = userEmail.value
    }
})

dissBtn.addEventListener("click", function(){
    modal.style.display = "none"
    container.style.display = "inline-block"
    userEmail.value = ""
    let style = document.createElement("style");
style.innerHTML = "::placeholder { color: #636c72; }";
document.head.appendChild(style);
userEmail.style.backgroundColor = ""
userEmail.style.borderColor = ""
errorEl.textContent = ""

})