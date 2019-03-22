
var pcCounter = 0;
var playerCounter = 0;
var drawCounter = 0;
pcCounter++;
console.log(pcCounter);

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
        drawCounter = drawCounter + 1;
        document.getElementById("draw-score").innerHTML = "<strong>Ισοπαλίες: " + drawCounter +"</strong>";
    }else if (((x == "r")&&(y == "s"))||((x == "r")&&(y == "pnc"))||((x == "s")&&(y == "pnc"))||((x == "s")&&(y == "ppr"))||((x == "pnc")&&(y == "ppr"))||((x == "ppr")&&(y == "r"))){
        outcome = "w";
        playerCounter = playerCounter +1;
        console.log(playerCounter);
        document.getElementById("player-score").innerHTML = "<strong>Παίκτης: " + playerCounter +"</strong>";
    }else {
        outcome = "l";
        pcCounter = pcCounter + 1;
        document.getElementById('pc-score').innerHTML = "<strong>PC: " + pcCounter +"</strong>";
    }
    colorChange(outcome);
    return outcome;
}

function showRules(){
        var f=document.getElementById("rules");
        if(f.style.display == 'none')
        f.style.display = 'block';
        else
        f.style.display = 'none';
    
}

console.log(pcChoice());

