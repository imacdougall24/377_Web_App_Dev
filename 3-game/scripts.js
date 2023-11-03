
var dontRoll = [0];



function checkFinish() {
    for (var i = 2; i <= 12; i++)
    {
        if (!dontRoll.includes(i))
        {
            return false;
        }
    }
    return true;

}

/*
 * Checks the result of the current roll and declare a win, loss, or continuation.
 */
function checkRoll(roll) {
    var message = "";
    if (dontRoll.includes(roll)) { // Lose
        $("#message").text("You already rolled a " + roll + "! Better luck next time!");
        resetBoard();
    }
    else // Continue
    {
        $("#message").text(roll + "!");
        dontRoll.push(roll);
        dontRoll.sort();

        $("#tile" + roll).css("visibility", "visible");
    }
    if (checkFinish() == true) // Win
    {
        $("#message").text("You Win!!! Luck is in your favor!");
        resetBoard();
    }
}





function resetBoard(){
    
   for (var i = 2; i <= 12; i++)
   {
    $("#tile" + i).css("visibility", "hidden");
   }
    dontRoll = [0];

}




/*
 * Rolls both dice at the same time and checks the results.
 */
function rollDice() {
    $("#message").text("");

    var roll1 = rollDie("d1");
    var roll2 = rollDie("d2");
    var total = roll1 + roll2;

    console.log("Total: " + total);

    checkRoll(total);
}

/*
 * Rolls the given die which updates the pips and returns the number rolled.
 *
 * dieNum - the ID of the die to roll
 */
function rollDie(dieNum) {
    // Step 1: hide every pip
    $("#" + dieNum + " ~ .pip").css("visibility", "hidden");

    // Step 2: generate a random number between 1 and 6 (inclusive)
    var roll = Math.ceil(Math.random() * 6);
    console.log(dieNum + ": " + roll);

    // Step 3: show the appropriate pips based on the roll
    if (roll == 1) {
        $("#" + dieNum + "p4").css("visibility", "visible");
    } else if (roll == 2) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 3) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p4").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 4) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 5) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p4").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else  { // roll == 6
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p2").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p6").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    }

    return roll;
}