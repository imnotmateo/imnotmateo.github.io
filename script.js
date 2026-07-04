const fechaObjetivo = new Date("September 24, 2026 00:00:00").getTime();

function actualizarContador(){

const ahora = new Date().getTime();

const diferencia = fechaObjetivo - ahora;

if(diferencia<=0){

document.getElementById("dias").innerHTML=0;
document.getElementById("horas").innerHTML=0;
document.getElementById("minutos").innerHTML=0;
document.getElementById("segundos").innerHTML=0;

return;

}

const dias=Math.floor(diferencia/(1000*60*60*24));

const horas=Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

const minutos=Math.floor((diferencia%(1000*60*60))/(1000*60));

const segundos=Math.floor((diferencia%(1000*60))/1000);

document.getElementById("dias").innerHTML=dias;
document.getElementById("horas").innerHTML=horas;
document.getElementById("minutos").innerHTML=minutos;
document.getElementById("segundos").innerHTML=segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();

document.getElementById("btnCarta").onclick=function(){

const carta=document.getElementById("carta");

if(carta.classList.contains("oculto")){

carta.classList.remove("oculto");

}else{

carta.classList.add("oculto");

}

}

function crearCorazon(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*25+15)+"px";

heart.style.animationDuration=(Math.random()*5+4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(crearCorazon,250);