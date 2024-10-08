import {generarFizzBuzz, secuencia } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("generar el mismo numero si no sigue ninguna regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("generar el mismo numeroM para cualquier numero si no sigue ninguna regla", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  it("generar el Fiz para el 3", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });
  it("generar el Fiz para multiplos de 3", () => {
    expect(generarFizzBuzz(6)).toEqual("Fizz");
  });
  it("generar el Buzz para el 5", () => {
    expect(generarFizzBuzz(5)).toEqual("Buzz");
  });
  it("generar el Buzz para multiplos del 5", () => {
    expect(generarFizzBuzz(10)).toEqual("Buzz");
  });
  it("Imprimir secuencia", () => {
    expect(secuencia(10)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz");
  });
  it("Imprimir secuencia y si es multiplo de 3 y 5 muestra FizzBuzz", () => {
    expect(secuencia(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
  });
  
});


