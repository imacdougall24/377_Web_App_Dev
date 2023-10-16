/* PEMDAS */
// Add
function addPem() {
    var numone = document.forms[0].elements["numone"].value;
    var numtwo = document.forms[0].elements["numtwo"].value;

    var total = Number(numone) + Number(numtwo);
    document.getElementById("pemdasAnswer").innerHTML = "Answer: " + total;
}
// Subtract
function subPem() {
    var numone = document.forms[0].elements["numone"].value;
    var numtwo = document.forms[0].elements["numtwo"].value;

    var total = Number(numone) - Number(numtwo);
    document.getElementById("pemdasAnswer").innerHTML = "Answer: " + total;
}
// Multiply
function multPem() {
    var numone = document.forms[0].elements["numone"].value;
    var numtwo = document.forms[0].elements["numtwo"].value;

    var total = Number(numone) * Number(numtwo);
    document.getElementById("pemdasAnswer").innerHTML = "Answer: " + total;
}
// Divide
function diviPem() {
    var numone = document.forms[0].elements["numone"].value;
    var numtwo = document.forms[0].elements["numtwo"].value;

    var total = Number(numone) / Number(numtwo);
    document.getElementById("pemdasAnswer").innerHTML = "Answer: " + total;
}
