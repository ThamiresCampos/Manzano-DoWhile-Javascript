var area= 0;
var total= 0;
var parar = "s";

do {
    var comodo = prompt("Insira o nome do local escolhido: ");
    var largura = parseInt(prompt("Dígite o valor da largura do cômodo: "));
    var comprimento = parseInt(prompt("Dígite o valor do comprimento do cômodo: "));
    var area = largura * comprimento;
    var total = total + area
    var parar = prompt("Deseja continuar os cálculos? [s/n]: ");
    document.write("Os cômodos inseridos foram: " + comodo + ":" + largura + " x " + comprimento + "<br>")
}while (parar == "s") 

document.write("O valor total da área calculada da residência é de: "+total);