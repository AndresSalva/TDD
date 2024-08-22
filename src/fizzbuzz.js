function generarFizzBuzz(numero){
    if((numero % 3) === 0){
        return "Fizz";
    }
    return numero+"";
}
export default generarFizzBuzz;