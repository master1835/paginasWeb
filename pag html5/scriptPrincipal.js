// JavaScript Document
$(document).on("ready", configurarApp);


function configurarApp()
{
	var canvas = document.getElementById("miCanvas");
	var ctx = canvas.getContext("2d");
	canvas.width = screen.availWidth;
	dibujaFooter(canvas, ctx);
}
function dibujaFooter(canvas, contexto){
	contexto.fillStyle = "rgba(0,0,0,0.8)"
	contexto.moveTo(0,0);
	contexto.quadraticCurveTo(0, -40, canvas.width, canvas.height);
	contexto.fill();
	
	//quadraticCurveTo(cpx, cpy, x, y);
}