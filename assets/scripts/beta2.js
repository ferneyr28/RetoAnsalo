const opciones    = document.querySelectorAll('.boton');
const spanLetras  = document.getElementById('letras');
const spanNumeros = document.getElementById('num');

const inputNum = [1,2,3,4,5,6,7,8,9,0];
const caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

let numeros = [];
//let c = [];
let contador = 0;


function teclado(e){
    const opcionTarget = e.target.innerText;
    let valor = parseInt(e.target.value);
    //contador = 0;
    validarTeclado(valor, opcionTarget, 'l');
    //contador = 0;
   
    

    
    
    
    
}

function validarTeclado(valor, opcionTarget, tipo) {
    if(inputNum[contador] === valor){
        //console.log("----VALIDANDO PRIMER IF" + numeros);
        if(numeros.includes(valor)){
            alert("El numero ya esta");
        }else{
            if(tipo == 'l'){
                numeros.push(valor);
                spanLetras.innerText += opcionTarget[0];
                contador++;         
            }

            if(tipo == 'n'){
                numeros.push(valor);
                spanNumeros.innerText += opcionTarget[2];
                contador++;         
            }
            
        }
    }else {
        let secuencia = inputNum.indexOf(valor);
        let mjs = ''
        if(inputNum.includes(valor)){
            if(tipo === 'l' && secuencia < inputNum.length){
                for(let j=contador; j<secuencia; j++){
                    mjs += caracteres[j] + " ";
                }
                alert("sigue la secuencia"+mjs);
            }
            if(tipo === 'n'){
                for(let j=contador; j<secuencia; j++){
                    mjs += inputNum[j] + " ";
                }
                alert("sigue la secuencia"+mjs);
            }
           
        }
    }

    //contador = 0;
    
}



for(let i=0; i<opciones.length; i++){
    opciones[i].addEventListener('click', teclado);
}