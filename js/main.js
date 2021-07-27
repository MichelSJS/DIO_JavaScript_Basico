
function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Parabéns, você criou um botão funcionável</b>";
    //alert("Parabéns, você clicou no botão!");
}

function redirecionar(){
    window.open("https://www.cursoemvideo.com"); //Abre em uma nova janela
    //window.location.href = "https://www.cursoemvideo.com"; - Abre na mesma janela
}

function alterar(elemento){
    //document.getElementById("mouseon").innerHTML = "Parabéns, você criou uma função de troca de texto ao passar o mouse em cima";
    elemento.innerHTML = "Parabéns, você criou uma função de troca de texto ao passar o mouse em cima";
}

function voltar(elemento){
    //document.getElementById("mouseon").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("A página foi carregada!");
}

function change(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));


/*
var data = new Date();
alert("Verifique o console para visualizar informações sobre datas");
console.log(data.getUTCDate());
console.log(data.getMonth()+1);
console.log(data.getDay());
*/

/*
var count;
for(count = 0; count < 5; count++) {
    console.log(count);
}
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++
}
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade")
}
*/

/*
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(fruta);
alert(fruta[1].nome);
*/

/*
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
*/

/*
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" / "))
*/

/*
var nome = "Michel Santos"
var n1 = 7;
var n2 = 15;
var frase = "Islândia é o melhor time do mundo"
alert(nome + " tem " + idade + " anos")
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase());
console.log(frase.replace("Islândia", "Noruega"));
*/