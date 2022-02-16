function resultado() {
    var peso = Number(document.getElementById('peso').value);
    var altura = Number(document.getElementById('altura').value);
    var alturaM = altura/100
    
    var calculo = peso/(alturaM*alturaM);
    const resultado = Number(calculo.toFixed(2))

    var final = document.getElementById('resultado')
    final.innerHTML = resultado;
}

// Evento que é executado ao clicar no botão de enviar

document.getElementById('calcular').onclick = function(e) {
    resultado();
}

window.addEventListener('keydown', function(e) {
    var codigoTecla = e.which || e.key || 0;
    var enter = codigoTecla == 13;
    if (enter) {
        resultado();
    }
});






// var n1 = Number(window.prompt('digite um numero: '));
//     var n2 = Number(window.prompt('digite outro numero: '));
//     var s = n1 + n2;

//     window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}!`)

