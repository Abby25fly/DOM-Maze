var izquierda = document.getElementById("Izquierda");
var arriba = document.getElementById("Arriba");
var abajo = document.getElementById("Abajo");
var derecha = document.getElementById("Derecha");

var mapa=[
"******************",
"*________**______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_**_*****_**_*",
"*o*__*________**W*",
"******************"];
var positionI;
var positionJ;

function dibujarLaberinto(){
  var mostrar = document.getElementById("mostrarLaberinto");
  var tabla=document.createElement("table");
    for(var i = 0; i < mapa.length; i++){
      var fila = document.createElement("tr");
      for(var j = 0; j < mapa[i].length; j++){
        var celda = document.createElement("td");
        if(mapa[i][j]=="*"){
          celda.setAttribute("class","colorPared");
        }
        else if (mapa[i][j] == "_"){
          celda.setAttribute("class","colorLaberinto");
        }
        else if(mapa[i][j]=="o"){
          positionJ=j;
          positionI=i;
          celda.setAttribute("class","colorStart");
        }
        else if(mapa[i][j]=="W"){
          celda.setAttribute("class","colorEnd");
        }
        celda.setAttribute("id", i + "," + j)
	      var indices = document.createElement("div");
        celda.appendChild(indices);
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
    mostrar.appendChild(tabla);
}

dibujarLaberinto();

// Flechas
Arriba.onclick = function () {
    var img = document.createElement("IMG");
    img.src = "Css/up.png";
	    if (mapa[(positionI - 1)][positionJ] != "*") {
	        var stepInit = positionI + "," + positionJ;
	        var nextStep = (positionI - 1) + "," + positionJ;
	        document.getElementById(stepInit).innerHTML = "";
	        document.getElementById(nextStep).appendChild(img);
	        positionI--;
	    }
      console.log(stepInit);
	}

Derecha.onclick = function () {
    var imgRight = document.createElement("IMG");
    imgRight.src = "Css/right.png";
    if (mapa[positionI][positionJ + 1] != "*") {
        var stepInit = positionI + "," + positionJ;
        var nextStep = positionI + "," + (positionJ + 1);
        document.getElementById(nextStep).appendChild(imgRight);
        document.getElementById(stepInit).innerHTML = "";
        positionJ++;
    }
}

Izquierda.onclick = function () {
    var imgLeft = document.createElement("IMG");
    imgLeft.src = "Css/left.png";
	    if (mapa[positionI][positionJ - 1] != "*") {
	        var stepInit = positionI + "," + positionJ;
	        var nextStep = positionI + "," + (positionJ - 1);
	        document.getElementById(nextStep).appendChild(imgLeft);
	        document.getElementById(stepInit).innerHTML = "";
	        positionJ--;
	    }
	}

  Abajo.onclick = function () {
    var imgDown = document.createElement("IMG");
    imgDown.src = "Css/down.png";
	    if (mapa[(positionI + 1)][positionJ] != "*") {
	        var stepInit = positionI + "," + positionJ;
	        var nextStep = (positionI + 1) + "," + positionJ;
	        document.getElementById(stepInit).innerHTML = "";
	        document.getElementById(nextStep).appendChild(imgDown);
	        positionI++;
	    }
	}
