let contadora = 0;
var soma = 0;
var media = 0;
var totalNumero = 0;

do {
    let numero = parseInt(prompt("Insira um número: "));
        contadora++
        var soma = soma + numero;
        var totalNumero = totalNumero + 1;
        var media = soma / totalNumero;
        document.write("Os números digitados foi: " + contadora + "<br>");
        document.write("A média dos números digitados é de: " + media + "<br>");
        document.write("A somad dos valores insiridos é de: " + soma);

       
  
}while (numero >= 0);


