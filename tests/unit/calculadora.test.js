const calculadora = require("../../models/calculadora.js");

test("2+2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  //console.log(resultado);
  expect(resultado).toBe(4);
});

test("5+100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  //console.log(resultado);
  expect(resultado).toBe(105);
});

test("string 'banana' +100 deveria retornar 'erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  //console.log(resultado);
  expect(resultado).toBe("erro");
});

/*test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});*/

//exemplos de testes
//opção 1
/*test("nome", callbackFunction);

function callbackFunction() {
  console.log("Esta função está sendo chamada?");
}*/

//opção 2
/*test("nome", function () {
  console.log("E assim funciona?");
});*/

/*
//opção 3
test("nome", () => {
  // () => cria uma função sem nome e sem input
  console.log("E agora?");
});
*/

/*
test("Testando outra condição do meu sistema", () => {
  console.log("Outro teste");
});
*/
