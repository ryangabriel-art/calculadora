function inserir(numero1){
 var numero = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = numero + numero1;
}

function limpar(){
    document.getElementById('resultado').innerHTML = " ";
}

function apagar(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
var resultado = document.getElementById('resultado').innerHTML;
if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
} else {
    document.getElementById('resultado').innerHTML = "Vazio"
}
}