console.log("inicio de programa");

var preguntas=3;
var preguntasFaltantes="Quedan "+ preguntas+ "preguntas";
alert("Este es el juego del cuenta cuentos. Sigue las instrucciones.");

var sustantivo = prompt("Ingresa un sustantivo: "+ preguntasFaltantes);

preguntas=preguntas-1;
preguntasFaltantes="Quedan "+ preguntas+ " preguntas";

var adjetivo = prompt("Ingresa adjetivo: "+ preguntasFaltantes);

preguntas-=1;
preguntasFaltantes="Quedan "+ preguntas+ " preguntas";

var verbo = prompt("Ingresa un verbo: "+ preguntasFaltantes);


document.write("<h1>El cuenta cuentos dice: </h1>");

/*Los pequeños niños huyen del perro*/
document.write("<p>Los "+ adjetivo + "  " + sustantivo + "  "+ verbo +" del perro.</p>");
document.write("<p>Los "+ sustantivo + " " + adjetivo + " " + verbo +" del perro</p>");
document.write("<p> " + verbo + " del perro los " +adjetivo+ " " +sustantivo + "</p>");

console.log("Fin de programa");