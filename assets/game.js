var wins = 0;
var losses = 0;
var playerScore = 0;

$(document).ready(function() {
    gameStart();
//crystal 1
    $("#Object1").on("click", function() {
        playerScore = playerScore + crystal1;
        console.log("Player's Score = " + playerScore);
        $("#displayPlayerTotal").text(playerScore);
        if (playerScore === randomNumber) {
            wins++;
            $("#win").html("Wins: " + wins);
            $("#resultDivWin").html("EPIC MATH!!!"); //tinkering with win announcement.
            gameStart();
        }
        if (playerScore > randomNumber) {
            losses++;
            $("#loss").html("Losses: " + losses);
            $("#resultDivLoss").html("Mistakes were made."); //tinkering with loss announcement
            gameStart();
        }

    });
//crystal 2
    $("#Object2").on("click", function() {
        playerScore = playerScore + crystal2;
        console.log("Player's Score = " + playerScore);
        $("#displayPlayerTotal").text(playerScore);
        if (playerScore === randomNumber) {
            wins++;
            $("#win").html("Wins: " + wins);
            gameStart();
        }
        if (playerScore > randomNumber) {
            losses++;
            $("#loss").html("Losses: " + losses);
            gameStart();
        }

    });
//crystal 3
    $("#Object3").on("click", function() {
        playerScore = playerScore + crystal3;
        console.log("Player's Score = " + playerScore);
        $("#displayPlayerTotal").text(playerScore);
        if (playerScore === randomNumber) {
            wins++;
            $("#win").html("Wins: " + wins);
            gameStart();
        }
        if (playerScore > randomNumber) {
            losses++;
            $("#loss").html("Losses: " + losses);
            gameStart();
        }

    });
//crystal 4
    $("#Object4").on("click", function() {
        playerScore = playerScore + crystal4;
        console.log("Player's Sore = " + playerScore);
        $("#displayPlayerTotal").text(playerScore);
        if (playerScore === randomNumber) {
            wins++;
            $("#win").html("Wins: " + wins);
            gameStart();
        }
        if (playerScore > randomNumber) {
            losses++;
            $("#loss").html("Losses: " + losses);
            gameStart();
        }

    });



});

//function reset variables at game start
function gameStart() {
    randomInt();
    playerScore = 0;
    $("#displayPlayerTotal").text(playerScore);
    $("#resultDivWin").html("");//WIP
    $("#resultDivLoss").html("");//WIP

    //var crystal1 = Math.floor(Math.random() * 12 + 1);
    crystalRan1();
    // var crystal2 = Math.floor(Math.random() * 12 + 1);
    crystalRan2();
    //var crystal3 = Math.floor(Math.random() * 12 + 1);
    crystalRan3();
    //var crystal4 = Math.floor(Math.random() * 12 + 1);
    crystalRan4();
}

//function to choose random number to beat and log it to the screen
function randomInt() {
    randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    console.log(randomNumber);
    $("#randomPick").text(randomNumber);//logs random number to screen
}
//functions to define each crystal's random number
function crystalRan1() {
    crystal1 = Math.floor(Math.random() * 12 + 1);
    console.log(crystal1);
}

function crystalRan2() {
    crystal2 = Math.floor(Math.random() * 12 + 1);
    console.log(crystal2);
}

function crystalRan3() {
    crystal3 = Math.floor(Math.random() * 12 + 1);
    console.log(crystal3);
}

function crystalRan4() {
    crystal4 = Math.floor(Math.random() * 12 + 1);
    console.log(crystal4);
}