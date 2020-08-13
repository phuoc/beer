/**
 * Created by fokwi on 08.02.2017.
 */

function calc() {
    var a = document.getElementById("option1");
    var b = document.getElementById("option2");
    var c = document.getElementById("option3");
    var grains = document.getElementById("textinput").value;
    var reqGrains = 5;
    var antBeer = grains/reqGrains;
    var tSugar = Math.floor(antBeer);
    var tLeavening = Math.floor(antBeer*2);
    var tWater = Math.floor(antBeer*6);
    var tGrains = Math.floor(grains);
    var tBeer = Math.floor(antBeer);

    if(a.checked) {
        reqGrains = 5;
        updateTable(reqGrains);
    } else if(b.checked) {
        reqGrains = 2;
        updateTable(reqGrains);
    } else if(c.checked){
        reqGrains = 1;
        updateTable(reqGrains);
    }

}

function changeRecipe(i) {
    console.log("changeRecipe");
    document.getElementById("grains").innerHTML = i;
}

function updateTable(r) {
    console.log("antBeer: " + grains)
    document.getElementById("totalSugar").innerHTML = tSugar;
    document.getElementById("totalLeavening").innerHTML = tLeavening;
    document.getElementById("totalWater").innerHTML = tWater;
    document.getElementById("grains").innerHTML = Math.floor(r);
    document.getElementById("totalGrains").innerHTML = tGrains;
    document.getElementById("totalBeer").innerHTML = tBeer;
}
