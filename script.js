const input = document.querySelector(".input");
const addBtn = document.querySelector(".addListBtn");
const taskContainer = document.querySelector(".taskList");
const errorMsg = document.querySelector(".errorMsg");

addBtn.addEventListener("click",() => {
    if(input.value == ""){
        errorMsg.classList.remove("hide")
    }else{
        const taskBox = document.createElement("li");
        const taskRemoveBtn = document.createElement("button");
        taskRemoveBtn.innerText = "X";
        taskRemoveBtn.classList.add("deleteTask")
        taskBox.innerText = input.value;
    
        taskContainer.appendChild(taskBox);
        taskBox.appendChild(taskRemoveBtn);
        input.value = ""
    }
    input.addEventListener("focus",() => {
        errorMsg.classList.add("hide")
    })
    const allTask = document.querySelectorAll(".taskList li");

    allTask.forEach((el) => {
    el.addEventListener("click",() => {
        el.classList.toggle("complete")
    })
    el.children[0].addEventListener("click",() => {
        el.remove()
    })
})
})

