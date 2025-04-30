function changeText() {
    document.getElementById("main-heading").textContent = "You've Changed the Heading!";
}

function changeStyle() {
    document.body.style.backgroundColor = "#f4f4f4";
    document.getElementById("info-text").style.color = "green";
}

function addElement() {
    const newPara = document.createElement("p");
    newPara.textContent = "This paragraph was added dynamically!";
    newPara.id = "dynamic-para";
    document.getElementById("dynamic-content").appendChild(newPara);
}

function removeElement() {
    const para = document.getElementById("dynamic-para");
    if (para) {
        para.remove();
    }
}
