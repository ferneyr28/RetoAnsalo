const opciones    = document.querySelectorAll('.boton');
const spanLetras  = document.getElementById('letras');
const spanNumeros = document.getElementById('num');

const inputNum = [1,2,3,4,5,6,7,8,9,0];
const caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

let numeros = [];
//let c = [];
let contadorLet = 0;
let contadorNum = 0;


function teclado(e){
    const opcionTarget = e.target.innerText;
    let valor = parseInt(e.target.value);
    if(contadorLet<10){
        validarTeclado(valor, opcionTarget, 'l');
    }
    

    if(contadorLet === 10) {
        console.log("Otra función");
        
        validarTeclado(parseInt(e.target.value), opcionTarget, 'n');
    }
    
    
}

function validarTeclado(valor, opcionTarget, tipo) {
    let contador;
    if(tipo === 'n'){
        contador = contadorNum;
    }
    
    if(tipo === 'l'){
        contador = contadorLet;
    }
    
    if(inputNum[contador] === valor){
        //console.log("----VALIDANDO PRIMER IF" + numeros);
        if(numeros.includes(valor)){
            alert("El numero ya esta");
        }else{
            if(tipo === 'l'){
                numeros.push(valor);
                spanLetras.value  += opcionTarget[0];
                contador++;
                contadorLet++;         
            }

            if(tipo === 'n'){
                numeros.push(valor);
                spanNumeros.value += opcionTarget[2];
                contador++;        
                contadorNum++; 
                console.log("PASE POR NUERMOS");
            }
            
        }
    }else {
        let secuencia = inputNum.indexOf(valor);
        let mjs = ''
        if(inputNum.includes(valor)){
            if(tipo === 'l'){
                for(let j=contador; j<secuencia; j++){
                    mjs += caracteres[j] + " ";
                }
                if(secuencia < inputNum.length-1){
                    swal("sigue la secuencia "+mjs, "", "error");
                    //alert("sigue la secuencia"+mjs);
                }
                if(secuencia === inputNum.length-1){
                    swal("sigue la secuencia"+mjs, "", "error");
                }
                
            }
            if(tipo === 'n' && secuencia < inputNum.length-1){
                for(let j=contadorNum; j<secuencia; j++){
                    mjs += inputNum[j] + " ";
                }
                if(secuencia < inputNum.length-1){
                    swal("sigue la secuencia "+mjs, "", "error");
                    //alert("sigue la secuencia"+mjs);
                }
            }
           
        }
    }

    //contador = 0;

    //console.log(valor);
    numeros = [];
    
}



for(let i=0; i<opciones.length; i++){
    opciones[i].addEventListener('click', teclado);
}