const opciones = document.querySelectorAll('.boton');
const spanNumeros = document.getElementById('num');

const inputNum = [1,2,3,4,5,6,7,8,9,0];

let numeros = [];
let contador = 0;


const teclado = (e)=>{
    const opcionTarget = e.target.innerText;
    let valor = parseInt(e.target.value);
    console.log(valor);

    if(inputNum[contador] === valor){
        //console.log("----VALIDANDO PRIMER IF" + numeros);
        if(numeros.includes(valor)){
            alert("El numero ya esta");
        }else{
            numeros.push(valor);
            spanNumeros.innerText += opcionTarget[2];
            contador++;
        }
    }else {
        let secuencia = inputNum.indexOf(valor);
        let mjs = ';'
        if(inputNum.includes(valor)){
            for(let j=contador; j<secuencia; j++){
                mjs += inputNum[j] + " ";
            }
            alert("sigue la secuencia"+mjs);
        }
    }


    /*
    if(numeros.includes(valor)){
        console.log("ya existe");
    }else{
        if(inputNum[contador] === valor){
            numeros.push(valor);
            letras.innerText += opcionTarget[2];    
        }else{
            console.log("Debe seguir la secuencia!!!");
        }
        
    }*/



    //numeros.push(valor);
    //console.log(e);
    /*if(numeros.length === 0){
        numeros.push(parseInt(e.target.value));
    }else {
        if(numeros.includes(parseInt(e.target.value))){
            console.log("ya existe");
            //numeros.pop();
        }else {
            letras.innerText += opcionTarget[2];
        }
    }*/
    

    


    
  /*  let contador = 0;
    if(numeros.length > 1){
        let primerElemento = numeros[numeros.length-1]*/
       /*for(let j=0; j<numeros.length; j++){
            if(numeros[j] === primerElemento ){
                contador++;
                if(contador > 1) {
                    numeros.pop();
                    letras.innerText.slice(0, -1);
                    console.log("numero repetido");
                }else {
                    letras.innerText += numeros[j];
                }
               
            }/*else {
                letras.innerText += opcionTarget[2];
            }*/
        //}
    }/*else {
        //letras.innerText += opcionTarget[2];
    }*/

    /*for(let j=0; j<numeros.length; j++){
        if(inputNum[j] === numeros[j]){
            
            //letras.innerText += opcionTarget[2];
            contador++;
            console.log(contador)
            if(contador === 1){
                letras.innerText += opcionTarget[2];
            }
        }else{
            if(contador>1){
                //alert("ya esta el numero");
                //numeros.pop();
            }    
        }
    }*/

    
    

//}


for(let i=0; i<opciones.length; i++){
    opciones[i].addEventListener('click', teclado);
}