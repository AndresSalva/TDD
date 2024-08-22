function generarFizzBuzz(numero){
    if((numero % 3) === 0){
        return "Fizz";
    }
    else if((numero % 5) === 0){
        return "Buzz";
    }
    return numero+"";
}
function secuencia(numero) {
    let resultado = '';

    for (let i = 1; i <= numero; i++) {
        if (i === 1){
            resultado += generarFizzBuzz(i);  
        }
        else{
            resultado += ", " + generarFizzBuzz(i);
        }
    }
    return resultado;
}
export {generarFizzBuzz,secuencia};