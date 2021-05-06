
/* Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

//genero 5 numeri casuali e li metto in un array
var cinqueNumeriRandom = [];
for (var i = 0; i < 5; i++) {
    var numeroRandom = Math.floor(Math.random() * 100);
    cinqueNumeriRandom.push(numeroRandom);
}
//alert che espone i 5 numeri generati casualmente
alert('i cinque numeri da inserire sono: ' + cinqueNumeriRandom);

//creo un timer di 30 secondi di attesa
// al termine invoco la funzione che chiede all'utente di inserire i numeri
var secondiDiAttesa = 31;

var intervallo = setInterval(function(){
    if (secondiDiAttesa === 0) {
        clearInterval(intervallo);
        indovina();

    }else{
        secondiDiAttesa--
    }
    document.getElementById('secondi').innerHTML = secondiDiAttesa;
},1000)



function indovina() {
    //tramite prompt chiedo all'utente di inserire cinque numeri, uno alla volta, e li metto in un array
    var cinqueNumeriInput = [];

    for (var i = 0; i < 5; i++) {
        var numeroInput = Number(prompt('Inserisci un numero'));
        cinqueNumeriInput.push(numeroInput);
    }

    //creo un ciclo for che controlla se i numeri inseriti sono nell'array dei numeri generati casualmente, e li mette in un array, aumentano la variabile punteggio di 1
    var punteggio = 0;
    var numeriIndovinati = [];

    for (var i = 0; i < 5; i++) {
        if (cinqueNumeriRandom.includes(cinqueNumeriInput[i])) {
            punteggio++;
            numeriIndovinati.push(cinqueNumeriInput[i]);
        }
    }

    //stampo a schermo il punteggio e i numeri indovinati
    document.getElementById('testo').innerHTML = ('Hai indovinato ' + punteggio + ' numeri: ' + numeriIndovinati);
}

// da fare:
//l'utente non può inserire lo stesso numero