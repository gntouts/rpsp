var userName = document.getElementById("username").value;
document.getElementById("output").textContent = userName;

function changeText(element) {
    document.getElementById('initname').innerHTML = element.value;
}

function colorChange(result) {
    switch(result){
        case "w":
        color = "green";
        document.getElementById('res').innerHTML = "<strong>Νίκη</strong>"
        break;
        case "l":
        color = "red";
        document.getElementById('res').innerHTML = "<strong>Ήττα</strong>"
        break;
        case "d":
        color = "white";
        document.getElementById('res').innerHTML = "<strong>Ισοπαλία</strong>"
        break;
    }
    document.getElementById('outcome').style.backgroundColor = color;
  }

  function myFunction(x) {
    document.getElementById('outcome').style.backgroundColor = x; 
  }

function pcChoice(){
    let choice = "";
    let x = Math.random();
    x *= 14;
    if (x <= 3){
        choice = "r";
    }else if (x <= 7){
        choice = "s";
    }else if (x <=10){
        choice = "ppr";
    }else {
        choice = "pnc";
    }
        return  choice;
}

function playerChoice(input){
    return input;
}

function changeIcons(player, pc){
    switch(player){
        case "r":
        document.getElementById("user-move").src="./media/img/rock800.png";
        break;
        case "s":
        document.getElementById("user-move").src="./media/img/scissors800.png";
        break;
        case "ppr":
        document.getElementById("user-move").src="./media/img/paper800.png";
        break;
        case "pnc":
        document.getElementById("user-move").src="./media/img/pencil800.png";
        break;
    }
    switch(pc){
        case "r":
        document.getElementById("pc-move").src="./media/img/rock800.png";
        break;
        case "s":
        document.getElementById("pc-move").src="./media/img/scissors800.png";
        break;
        case "ppr":
        document.getElementById("pc-move").src="./media/img/paper800.png";
        break;
        case "pnc":
        document.getElementById("pc-move").src="./media/img/pencil800.png";
        break;
    }
}

function whoWins(playerChoice){
    x = playerChoice;
    y = pcChoice();
    changeIcons(x,y);
    if (x == y){
        outcome = "d";
    }else if (((x == "r")&&(y == "s"))||((x == "r")&&(y == "pnc"))||((x == "s")&&(y == "pnc"))||((x == "s")&&(y == "ppr"))||((x == "pnc")&&(y == "ppr"))||((x == "ppr")&&(y == "r"))){
        outcome = "w";
    }else {
        outcome = "l";
    }
    colorChange(outcome);
    return outcome;
}

console.log(pcChoice());

