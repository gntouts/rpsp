var userName = document.getElementById("username").value;
document.getElementById("output").textContent = userName;

function changeText(element) {
    document.getElementById('initname').innerHTML = element.value;
}

function pcChoice(){
    let choice = "";
    let x = Math.random();
    x *= 14;
    if (x <= 3){
        choice = "rock";
    }else if (x <= 7){
        choice = "scissors";
    }else if (x <=10){
        choice = "paper";
    }else {
        choice = "pencil";
    }
        return  choice;
}

console.log(pcChoice());
