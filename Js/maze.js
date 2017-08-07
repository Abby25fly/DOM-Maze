var mostrar = document.getElementById("mostrarLaberinto");
var izquierda = document.getElementById("Izquierda");
var avanzar = document.getElementById("Avanzar");
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

function dibujarLaberinto(){
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
          celda.setAttribute("class","colorStart");
        }
        else if(mapa[i][j]=="W"){
          celda.setAttribute("class","colorEnd");
        }
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
    mostrar.appendChild(tabla);
}

dibujarLaberinto();
