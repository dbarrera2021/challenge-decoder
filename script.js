function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textoCifrado= texto.replace(/e/igm,"enter");
    var textoCifrado= textoCifrado.replace(/o/igm,"ober");
    var textoCifrado= textoCifrado.replace(/i/igm,"imes");
    var textoCifrado= textoCifrado.replace(/a/igm,"al");
    var textoCifrado= textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgMunheco").style.display="none";
    document.getElementById("txt1Munheco").style.display="none";
    document.getElementById("txt2Munheco").innerHTML=textoCifrado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";

}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textoCifrado= texto.replace(/enter/igm,"e");
    var textoCifrado= textoCifrado.replace(/ober/igm,"o");
    var textoCifrado= textoCifrado.replace(/imes/igm,"i");
    var textoCifrado= textoCifrado.replace(/al/igm,"a");
    var textoCifrado= textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgMunheco").style.display="none";
    document.getElementById("txt1Munheco").style.display="none";
    document.getElementById("txt2Munheco").innerHTML=textoCifrado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";

}
function copiar(){
    var contenido=document.querySelector("#txt2Munheco");
    contenido.select();
    document.execCommand("copy")
    alert("Se Copio")
}