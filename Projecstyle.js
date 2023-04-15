function inicial() {
    let operandoa;
    let operandob;
    let operacion;

    //variables
    const resultado = document.getElementById("resultado");
    const mc = document.getElementById('mc');
    const mr = document.getElementById('mr');
    const ms = document.getElementById('ms');
    const mmas = document.getElementById('mmas');
    const mmenos = document.getElementById('mmenos');
    const flecha = document.getElementById('flecha');
    const ce = document.getElementById('ce');
    const c = document.getElementById('c');
    const masmenos = document.getElementById('masmenos');
    const raiz = document.getElementById('raiz');
    const siete = document.getElementById('siete');
    const ocho = document.getElementById('ocho');
    const nueve = document.getElementById('nueve');
    const division = document.getElementById('division');
    const signodiv = document.getElementById('signodiv');
    const cuatro = document.getElementById('cuatro');
    const cinco = document.getElementById('cinco');
    const seis = document.getElementById('seis');
    const asterisco = document.getElementById('multiplicar');
    const unox = document.getElementById('unox');
    const uno = document.getElementById('uno');
    const dos = document.getElementById('dos');
    const tres = document.getElementById('tres');
    const menos = document.getElementById('menos');
    const cero = document.getElementById('cero');
    const coma = document.getElementById('coma');
    const mas = document.getElementById('mas');
    const igual = document.getElementById('igual');


    //Eventos

    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
}
uno.onclick = function(e) {
    resultado.textContent = resultado.textContent + "1";
}

dos.onclick = function(e) {
    resultado.textContent = resultado.textContent + "2";
}

tres.onclick = function(e) {
    resultado.textContent = resultado.textContent + "3";
}

cuatro.onclick = function(e) {
    resultado.textContent = resultado.textContent + "4";
}

cinco.onclick = function(e) {
    resultado.textContent = resultado.textContent + "5";
}

seis.onclick = function(e) {
    resultado.textContent = resultado.textContent + "6";
}

siete.onclick = function(e) {
    resultado.textContent = resultado.textContent + "7";
}

ocho.onclick = function(e) {
    resultado.textContent = resultado.textContent + "8";
}

nueve.onclick = function(e) {
    resultado.textContent = resultado.textContent + "9";
}

reset.onclick = function(e) {
    resetear();
}

suma.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}

menos.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicar.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}

division.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}

igual.onclick = function(e) {
    operandob = resultado.textContent;
    resolver();
}

function limpiar() {
    reultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = ""; 
}
