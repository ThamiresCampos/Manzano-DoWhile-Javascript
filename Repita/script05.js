let contadora = 1;
var soma = 0;
var fatorial = 0;

do {
    
    var fatorial = contadora *(contadora - 1);
    var soma = fatorial + soma;
    contadora++
    

} while (contadora <= 15);
document.write("A soma do fatorial dos números é: "+soma);
