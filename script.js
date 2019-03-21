var userName = document.getElementById("username").value;
document.getElementById("output").textContent = userName;

function pcChoice(){
    let choice = "";
    switch(Math.floor((Math.random() * 14))){
        case 0:
        case 1:
        case 2:
        case 3:
            choice = "rock";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            choice = "scissors";
            break;
        case 8:
        case 9:
        case 10:
            choice = "paper";
            break;
        case 11:
        case 12:
        case 13:
            choice = "pencil";
            break;
    }
    return  choice;
}

console.log(pcChoice());
console.log(pcChoice());
console.log(pcChoice());
console.log(pcChoice());
console.log(pcChoice());
console.log(pcChoice());
console.log(pcChoice());
console.log(pcChoice());
console.log(pcChoice());
console.log(pcChoice());
