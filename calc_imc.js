function resultado() {
    var peso = Number(document.getElementById('peso').value);
    var altura = Number(document.getElementById('altura').value);
    var alturaM = altura/100
    
    var calculo = peso/(alturaM*alturaM);
    const resultado = Number(calculo.toFixed(2));

    var final = document.getElementById('resultado');
    final.innerHTML = resultado;


    if(resultado >= 40) {
        document.getElementById('resultado').style.backgroundColor = '#000'; 
        document.getElementById('resultado').style.boxShadow = '2px 2px 10px #000'
        document.getElementById('resultado').style.color = '#fff';

        document.getElementById('head').style.backgroundColor = '#000';

        document.getElementById('body').style.width = '110px';
        document.getElementById('body').style.backgroundColor = '#000';

        document.getElementById('left_arms').style.width = '40px';
        document.getElementById('left_arms').style.backgroundColor = '#000';

        document.getElementById('right_arms').style.width = '40px';
        document.getElementById('right_arms').style.backgroundColor = '#000';

        document.getElementById('left_legs').style.width = '35px';
        document.getElementById('left_legs').style.backgroundColor = '#000';

        document.getElementById('right_legs').style.width = '35px';
        document.getElementById('right_legs').style.backgroundColor = '#000';
    }

    if(resultado <= 39.9) {
        document.getElementById('resultado').style.backgroundColor = '#a52a2a'; 
        document.getElementById('resultado').style.boxShadow = '2px 2px 10px #a52a2a'
        document.getElementById('resultado').style.color = '#000';

        document.getElementById('head').style.backgroundColor = '#a52a2a';

        document.getElementById('body').style.width = '95px';
        document.getElementById('body').style.backgroundColor = '#a52a2a';

        document.getElementById('left_arms').style.width = '35px';
        document.getElementById('left_arms').style.backgroundColor = '#a52a2a';

        document.getElementById('right_arms').style.width = '35px';
        document.getElementById('right_arms').style.backgroundColor = '#a52a2a';

        document.getElementById('left_legs').style.width = '31px';
        document.getElementById('left_legs').style.backgroundColor = '#a52a2a';

        document.getElementById('right_legs').style.width = '31px';
        document.getElementById('right_legs').style.backgroundColor = '#a52a2a';
    }

    if(resultado <= 34.9) {
        document.getElementById('resultado').style.backgroundColor = '#ff7f50'; 
        document.getElementById('resultado').style.boxShadow = '2px 2px 10px #ff7f50'
        document.getElementById('resultado').style.color = '#000';

        document.getElementById('head').style.backgroundColor = '#ff7f50';

        document.getElementById('body').style.width = '80px';
        document.getElementById('body').style.backgroundColor = '#ff7f50';

        document.getElementById('left_arms').style.width = '30px';
        document.getElementById('left_arms').style.backgroundColor = '#ff7f50';

        document.getElementById('right_arms').style.width = '30px';
        document.getElementById('right_arms').style.backgroundColor = '#ff7f50';

        document.getElementById('left_legs').style.width = '27px';
        document.getElementById('left_legs').style.backgroundColor = '#ff7f50';

        document.getElementById('right_legs').style.width = '27px';
        document.getElementById('right_legs').style.backgroundColor = '#ff7f50';
    }

    if(resultado <= 29.9) {
        document.getElementById('resultado').style.backgroundColor = '#f8d45d'; 
        document.getElementById('resultado').style.boxShadow = '2px 2px 10px #f8d45d'
        document.getElementById('resultado').style.color = '#000';

        document.getElementById('head').style.backgroundColor = '#f8d45d';

        document.getElementById('body').style.width = '65px';
        document.getElementById('body').style.backgroundColor = '#f8d45d';

        document.getElementById('left_arms').style.width = '25px';
        document.getElementById('left_arms').style.backgroundColor = '#f8d45d';

        document.getElementById('right_arms').style.width = '25px';
        document.getElementById('right_arms').style.backgroundColor = '#f8d45d';

        document.getElementById('left_legs').style.width = '23px';
        document.getElementById('left_legs').style.backgroundColor = '#f8d45d';

        document.getElementById('right_legs').style.width = '23px';
        document.getElementById('right_legs').style.backgroundColor = '#f8d45d';
    }

    if(resultado <= 24.9) {
        document.getElementById('resultado').style.backgroundColor = '#90ee90';
        document.getElementById('resultado').style.boxShadow = '2px 2px 10px #90ee90'
        document.getElementById('resultado').style.color = '#000'; 

        document.getElementById('head').style.backgroundColor = '#90ee90';

        document.getElementById('body').style.width = '50px';
        document.getElementById('body').style.backgroundColor = '#90ee90';

        document.getElementById('left_arms').style.width = '20px';
        document.getElementById('left_arms').style.backgroundColor = '#90ee90';

        document.getElementById('right_arms').style.width = '20px';
        document.getElementById('right_arms').style.backgroundColor = '#90ee90';

        document.getElementById('left_legs').style.width = '19px';
        document.getElementById('left_legs').style.backgroundColor = '#90ee90';

        document.getElementById('right_legs').style.width = '19px';
        document.getElementById('right_legs').style.backgroundColor = '#90ee90';
    }

    if(resultado <= 18.5) {
        document.getElementById('resultado').style.backgroundColor = '#6495ed';
        document.getElementById('resultado').style.boxShadow = '2px 2px 10px #6495ed'
        document.getElementById('resultado').style.color = '#000';

        document.getElementById('head').style.backgroundColor = '#6495ed';

        document.getElementById('body').style.width = '35px';
        document.getElementById('body').style.backgroundColor = '#6495ed';

        document.getElementById('left_arms').style.width = '12px';
        document.getElementById('left_arms').style.backgroundColor = '#6495ed';

        document.getElementById('right_arms').style.width = '12px';
        document.getElementById('right_arms').style.backgroundColor = '#6495ed';

        document.getElementById('left_legs').style.width = '11px';
        document.getElementById('left_legs').style.backgroundColor = '#6495ed';

        document.getElementById('right_legs').style.width = '11px';
        document.getElementById('right_legs').style.backgroundColor = '#6495ed';
    }
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



// .box_boneco{
//     flex-direction: column;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .head{
//     background-color: blue;
//     width: 60px;
//     height: 60px;
//     border-radius: 50%;
// }
// .body{
//     display: flex;
//     background-color: rgb(0, 0, 255);
//     width: 60px;
//     height: 100px;
// }
// .body::after{
//     content: "";
//     transform: translateX(-40px) rotate(10deg);

//     width: 20px;
//     height: 80px;
//     background-color: rgb(0, 0, 255);
// }
// .body::before{
//     content: "";
//     transform: translateX(60px) rotate(-10deg);

//     width: 20px;
//     height: 80px;
//     background-color: rgb(0, 0, 255);
// }
// .legs{
//     width: 60px;
//     height: 80px;

//     border-left: solid blue 24px;
//     border-right: solid blue 24px;
// }


// var n1 = Number(window.prompt('digite um numero: '));
//     var n2 = Number(window.prompt('digite outro numero: '));
//     var s = n1 + n2;

//     window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}!`)

