//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "30px";
    h.style.height = (h.scrollHeight)+"px";
}

function sendData(num, diam ,hauteur) {
  $('#quote').html("number of element :" + num +"<br>diameter :" + diam + "<br>Height :" + hauteur);
  $('#resultat').html("RESULTATS");

};

function calcul(){
  var result= document.getElementById("form").elements["deb"].value/10;
var diam=result/10

 return sendData(result, diam ,diam);
}


function show_hide_div(texte){
 calcul();

var texte = document.getElementById('texte');
if(texte.style.display=="block")
texte.style.display="none";
else
texte.style.display="block";
}

function showDiv(texte){
 calcul();

var more = document.getElementById('more');
if(more.style.display=="block")
more.style.display="none";
else
more.style.display="block";
}
