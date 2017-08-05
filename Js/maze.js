var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"*_**************_*"];

function dibujarLaberinto(){
  var mostrar = document.getElementById("mostrarLaberinto");
    for(var i = 0; i < mapa.length; i++){
      var fila = document.createElement("tr");
      for(var j = 0; j < mapa[i].length; j++){
        var columna= document.createElement("td");
        //columna.innerText=mapa[i][j]
        if(mapa[i][j]=="*"){
          columna.setAttribute("class","colorCelda");
        }
        fila.appendChild(columna);
        mostrar.appendChild(fila);
      }
    }
}

dibujarLaberinto();
