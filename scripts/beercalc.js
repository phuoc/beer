/**
 * Created by fokwi on 08.02.2017.
 */



function calc(grains) {
    var a = document.getElementById("option1");
    var b = document.getElementById("option2");
    var c = document.getElementById("option3");

    var gGrade = 5;


    if(a.checked) {
        gGrade = 5;
    } else if(b.checked) {
        gGrade = 2;
    } else if(c.checked){
        gGrade = 1;
    }

    var antBeer = grains/gGrade;
    document.getElementById("totalSugar").innerHTML = Math.floor(antBeer);
    document.getElementById("totalLeavening").innerHTML = Math.floor(antBeer*2);
    document.getElementById("totalWater").innerHTML = Math.floor(antBeer*6);
    document.getElementById("totalBeer").innerHTML = Math.floor(antBeer);

}