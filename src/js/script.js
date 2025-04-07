// Declaração e variaveis 
var nome = "fiap";
console.log(nome)

let idade = "19";
console.log(idade)

const sobrenome = "fiapinho";
console.log(sobrenome)

// Declarando uma variavel indefinida
let nome1;
console.log(nome1)

// Declarando uma variavel nula
let nome2 = null;
console.log(nome2)

// Tipos de variaveis
let exeplo1 = 10;
console.log(typeof exeplo1)

let exemplo2 = "tecnologia";
console.log(typeof exemplo2)

let exemplo3 = true;
console.log(typeof exemplo3)

let exemplo4 = {};
console.log(typeof exemplo4)

let exemplo5 = [];
console.log(typeof exemplo5)

// Conversoes
let numFloat = 123.456;
console.log(parseInt(numFloat));

let numString = "123.456"
console.log(parseFloat(numString));

// Metodos

// Lenght = verifica o tamanho da string
let frase = "O mundo da tecnologia";
console.log(frase.length);

// IndexOF = retorna um trecho do texto

let texto = "A programação indomavel e sustentavel";
console.log(texto.indexOf(""))

// Slice = retorna um trecho de texto com inicio e final
let info = "processamento de ponta";
console.log(info.slice(16, 25))

// Operadores aritimeticos
const num1 = 10;
const num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Operadores logicos

const num3 = 10;
const num4 = 20;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 < num4 || num4 < num3);

// Operadores de comparacao
console.log(num3 == num4);
console.log(num3 === num4);

// Estrutura condicional

// if
let logado = "fiap";

if (logado == "fiap") {
    console.log("é verdadeiro")
}

// if / else
let usuario = "teste"
if (usuario == "test") {
    console.log("Usuario correto")
} else {
    console.log("Usuario errado")
}


// if enacadeado / aninhado 
let idadee = 15

if (idadee <= 15) {
    console.log("Menor de idade")
} else if (idadee > 15 && idadee < 18) {
    console.log("Não é maior mas pode entrar")
} else {
    console.log("Pode entrar é maior")
}

//switch
let time = "palmeiras";

switch (time) {
    case "palmeiras":
        console.log("Melhor time")
        break;
    case "sao paulo":
        console.log("Não é melhor time")
        break;
    case "bota fogo":
        console.log("Não é bom")
        break;
    default:
        console.log("nenhuma das opcoes")
}

//ternario
let valor = 110;

let resultado = valor == 100 ? "certo" : "errado"
console.log(resultado)

//ternario encadeado
let produto = "notebook"
const desconto = true

const preco = produto = "notebook" ? desconto ? 100 : 200 : produto === "mouse" ? 30 : 100;
console.log(preco)











