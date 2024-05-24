// Declaracao Variavel
// var
// Variável que pode ser usada a qualquer momento no codigo

console.log("----------- Var ---------");
var teste = "Jose";
teste = 3;
console.log(teste);

var altura = 5;
var comprimento = 7;
var area = altura * comprimento;

console.log(area);
console.log("-----------------------");


// Let
// A variavel so pode ser utilizada após a sua declaração
// {tudo que esta dentro das chaves, são um boco de código}
console.log("----------- Let ---------");
let forma = 'retangulo';
let altura = 5;
let comprimento = 7;
let area;

if(forma === "retangulo" || forma === "retângulo"){
    area = altura * comprimento;
}else{
    area =  (altura * comprimento) / 2;
}
console.log(area)
console.log("-----------------------");

// Const
// Qua uma vez declarada com um valor, seu valor não sofre mudança 
// enquanto o código estiver executando

console.log("----------- Const ---------");
const formaQuadrado = 'quadrado';
let alturaQuadrado = 5;
let comprimentoQuadrado = 7;
let areaQuadrado = 0;

if(formaQuadrado === "quadrado" || formaQuadrado === "quadrado"){
    areaQuadrado = altura * comprimento;
}else{
    areaQuadrado =  (altura * comprimento) / 2;
}
console.log(area)
console.log("-----------------------");


