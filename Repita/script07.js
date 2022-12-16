let contadora = 1;
var fatorial = 0;

do {
    if (contadora % 2 == 1) {
        var fatorial = contadora *(contadora - 1);
        contadora++
      
    }
    document.write("O fatorial dos números ímpares na faixa de 1 a 10 é: "+fatorial);

} while (contadora <= 10);
