import generarFizzBuzz from "./fizzbuzz.js";

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


});


