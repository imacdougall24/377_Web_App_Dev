var MINIMUM_BET = 5;
var STARTING_FUNDS = 50;

var point = 0;
var bet = 0;
var balance = STARTING_FUNDS;

/*
 * Checks the result of the current roll and declare a win, loss, or continuation.
 */
function checkRoll(roll) {
    var message = "";

    if (point == 0) { // New round
        if (roll == 7 || roll == 11) {
            endRound(true);
        } else if (roll == 2 || roll == 3 || roll == 12) {
            endRound(false);
        } else {
            $("#point").text(roll);
            point = roll;
        }
    } else { // Existing round
        if (roll == point) {
            endRound(true);
        } else if (roll == 7) {
            endRound(false);
        }
    }
}

/*
 * Ends the current round of play by either adding/removing the bet to/from the balance. Also
 * resets game controls to start another round.
 *
 * win - true if the round ended in a win, false otherwise
 */
function endRound(win) {
    // Step 1: Update balance
    if (win) {
        $("#message").text("You win!");
        balance += bet;
    } else {
        $("#message").text("You lose!");
        balance -= bet;
    }

    console.log("Balance: " + balance);

    // Step 2: Reset game controls for another round
    $("#point").text("X");
    $("#bet").val("");
    $("#bet").prop("disabled", false);
    $("#balance").text("$" + balance);

    bet = 0;
    point = 0;
}

/*
 * Rolls both dice at the same time and checks the results.
 */
function rollDice() {
    if (point > 0 || validateBet()) {
        $("#message").text("");

        var roll1 = rollDie("d1");
        var roll2 = rollDie("d2");
        var total = roll1 + roll2;

        console.log("Total: " + total);

        checkRoll(total);
    } else {
        if (balance < MINIMUM_BET) {
            $("#message").text("You don't have enough money to play");
        } else  {
            $("#message").text("Enter a bet between $" + MINIMUM_BET + " and $" + balance);
        }
    }
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

/*
 * This function does two things:
 *
 * 1. Verifies that a valid bet has been entered (a valid bet must be greater than $5 but less than
 *    or equal to the total balance)
 *
 * 2. Disables the betting controls to prevent the bet from being changed mid-round
 *
 * If the bet is validated then true is returned, false otherwise.
 */
function validateBet() {
    bet = parseInt($("#bet").val());

    console.log("Bet: " + bet);

    if (isNaN(bet) || bet < MINIMUM_BET || bet > balance) {
        return false;
    } else {
        $("#bet").prop("disabled", true);
        return true;
    }
}