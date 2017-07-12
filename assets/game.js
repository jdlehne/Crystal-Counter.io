var wins = 0;
var losses = 0;
var playerScore = 0;
var gameOver = false;

$(document).ready(function() {
    gameStart();

    $("#Object1").on("click", function() {
        playerScore = playerScore + crystal1;
        console.log("Player's Score = " + playerScore);
        $("#displayPlayerTotal").text(playerScore);
        if (playerScore === randomNumber) {
            wins++;
            $("#win").html("Wins: " + wins);
            $("#resultDivWin").html("EPIC MATH!!!"); //tinkering with resul announcement.
            gameStart();
        }
        if (playerScore > randomNumber) {
            losses++;
            $("#loss").html("Losses: " + losses);
            $("#resultDivLoss").html("Mistakes were made."); //see above
            gameStart();
        }

    });

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

function gameStart() {
    randomInt();
    playerScore = 0;
    $("#displayPlayerTotal").text(playerScore);
    $("#resultDivWin").html("");
    $("#resultDivLoss").html("");

    //var crystal1 = Math.floor(Math.random() * 12 + 1);
    crystalRan1();
    // var crystal2 = Math.floor(Math.random() * 12 + 1);
    crystalRan2();
    //var crystal3 = Math.floor(Math.random() * 12 + 1);
    crystalRan3();
    //var crystal4 = Math.floor(Math.random() * 12 + 1);
    crystalRan4();
}

function randomInt() {
    randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    console.log(randomNumber);
    $("#randomPick").text(randomNumber);
}

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