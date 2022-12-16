let contadora = 1;
var soma = 0;

do {
    if (contadora % 2 == 0) {
        var soma = soma + contadora;
    }
    contadora++

} while (contadora <= 500);
document.write("A somatória dos valores pares existentes na faixa de 1 a 500 é igual a: "+soma)