let contadora = 1;
var soma = 1;
var grao = 2;
var quadrado = 1;

do {
    contadora++
    var grao = grao * 2;
    var soma = soma + grao;
  

} while (contadora <= 64);
document.write("Pode se obter num tabuleiro de xadrez " + soma + " grãos ");