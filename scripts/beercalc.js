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
        updateTable(reqGrains, tSugar, tLeavening, tWater, tGrains, tBeer);
        console.log("a");
    } else if(b.checked) {
        reqGrains = 2;
        updateTable(reqGrains, tSugar, tLeavening, tWater, tGrains, tBeer);
        console.log("b");
    } else if(c.checked){
        reqGrains = 1;
        updateTable(reqGrains, tSugar, tLeavening, tWater, tGrains, tBeer);
        console.log("c");
    }

}

function changeRecipe(i) {
    console.log("changeRecipe");
    document.getElementById("grains").innerHTML = i;
}

function updateTable(r, s, l, w, g, b) {
    console.log("antBeer: " + grains)
    document.getElementById("totalSugar").innerHTML = s;
    document.getElementById("totalLeavening").innerHTML = l;
    document.getElementById("totalWater").innerHTML = w;
    document.getElementById("grains").innerHTML = Math.floor(r);
    document.getElementById("totalGrains").innerHTML = g;
    document.getElementById("totalBeer").innerHTML = b;
}
