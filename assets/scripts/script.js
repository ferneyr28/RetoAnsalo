const opciones    = document.querySelectorAll('.boton');
const spanLetras  = document.getElementById('letras');
const spanNumeros = document.getElementById('num');

const inputNum = [1,2,3,4,5,6,7,8,9,0];
const caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

let numeros = [];
//let c = [];
let contadorLet = 0;
let contadorNum = 0;



//TEMA
let retro  = document.getElementById('retro');
let boton1 = document.getElementById('oscuro');
let inicial = document.getElementById('inicial');

const cambiarTema = (tema)=>{
    console.log('cambio de tema '+ tema)
    document.getElementById('cssArchivo').href ='./assets/css/'+tema
}
let seleccion;
retro.addEventListener('click', ()=>{
    cambiarTema(retro.value);
    seleccion = retro.value;
    localStorage.setItem("tema1", seleccion);
})

boton1.addEventListener('click', ()=>{
    cambiarTema(boton1.value);
    seleccion = boton1.value;
    localStorage.setItem("tema1", seleccion);
})

if(localStorage.getItem('tema1')){
    console.log("esto es local "+localStorage.getItem('tema1'));
    cambiarTema(localStorage.getItem('tema1'))
}

inicial.addEventListener('click', ()=>{
    localStorage.removeItem('tema1');
    window.location.href = "./index.html";
})




// FIN DE TEMA


function teclado(e){
    const opcionTarget = e.target.innerText;
    let valor = parseInt(e.target.value);
    console.log(valor);

    if(valor == 11){
        console.log("RESET");
        spanNumeros.value = '';
        spanLetras.value = '';
        numeros = [];
        contador=0, contadorLet=0, contadorNum = 0;
        //window.location.href = "/index.html";
    }
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