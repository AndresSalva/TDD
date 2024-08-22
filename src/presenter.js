import {generarFizzBuzz,secuencia} from "./fizzbuzz";

const numero = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numuser = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + secuencia(numuser) + "</p>";
});
