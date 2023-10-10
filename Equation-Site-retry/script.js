var pemdasState = 0;

function pemdasAdd(){
    pemdasState == 1;
}
function pemdasSub(){
    pemdasState == 2;
}
function pemdasMul(){
    pemdasState == 3;
}
function pemdasDiv(){
    pemdasState == 4;
}

function pemdasCalc() {
    var pemdasnum1 = document.getElementById("pemdasnum1").innerHTML;
    var pemdasnum2 = document.getElementById("pemdasnum2").innerHTML;
    var total;

    if (pemdasState == 1) {
        total == pemdasnum1 + pemdasnum2;
    }
    if (pemdasState == 2) {
        total == pemdasnum1 - pemdasnum2;
    }
    if (pemdasState == 3) {
        total == pemdasnum1 * pemdasnum2;
    }
    if (pemdasState == 4) {
        total == pemdasnum1 / pemdasnum2;

    }
    else {
    }
    document.getElementById("answer").innerHTML = "Answer:  " + total;
}
