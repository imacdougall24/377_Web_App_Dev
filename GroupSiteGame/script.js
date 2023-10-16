function rollDie(){
    var roll = Math.floor(Math.random() * 6 + 1);
    $(".pip").css("visibility", "hidden")

    if (roll == 1){
        $("#d1p4").css("visibility", "visible")
    }
    else if (roll == 2){
        $("#d1p1, #d1p7").css("visibility", "visible")
    }
    else if (roll == 3){
        $("#d1p3, #d1p4, #d1p5").css("visibility", "visible")
    }
    else if (roll == 4){
        $("#d1p1, #d1p3, #d1p5, #d1p7").css("visibility", "visible")
    }
    else if (roll == 5){
        $("#d1p1, #d1p3, #d1p4, #d1p5, #d1p7").css("visibility", "visible")
    }
    else if (roll == 6){
        $("#d1p1, #d1p2, #d1p3, #d1p5, #d1p6, #d1p7").css("visibility", "visible")
    }

}