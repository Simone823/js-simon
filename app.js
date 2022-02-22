// Visualizzare in pagina 5 numeri casuali. ( con un alert )
// Dopo la chiusura dell’alert parte un timer di 30 secondi.
// Alla fine dei 30 secondi l’utente dovrà inserire, uno alla volta, i numeri che ha visto precedentemente ( se li ricorda ), tramite il prompt() (servirà un ciclo…?).
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NB. l ’ordine dei numeri inseriti non importa, basta che siano presenti nell’elenco di numeri iniziale.


// Genero un numero random 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// console.log(getRandomInt(1, 100));

// Array numeri random
const numeriRandom = [];
// console.log(numeriRandom);

// Finche la lunghezza dell'array numeriRandom non è 5, pusho la funzione per generare un numero random
while (numeriRandom.length < 5){
    
    // Se il numero random non è incluso nell'array numeriRandom, pusho il numero random
    if (!numeriRandom.includes(getRandomInt(1, 100))) {
        numeriRandom.push(getRandomInt(1, 100));  
    }
}
console.log(numeriRandom);


// Messaggio alert numeriRandom
alert(numeriRandom);

// Array contenente i numeri digitati dall'utente
const numeriUtente = [];
console.log(numeriUtente);

// Array contenente i numeri corretti inseriti dall'utente
const numeriUtenteCorretti = [];
// console.log(numeriUtenteCorretti);

// Dopo 30 secondi chiedo all'utente di inserire i numeri visualizzati dal primo alert
setTimeout ( function() {

    // Finche la lunghezza dell'array numeriUtente non è 5, chiederò all'utente di inserire un numero
    while (numeriUtente.length < 5){
        let numUtente = parseInt(prompt("Inserisci un numero visualizzato 30 secondi fa!"));
        numeriUtente.push(numUtente);
    }

    
    numeriUtente.forEach((element, index) => {

        // Se l'array numeriRandom include il numero dentro l'array numeriUtente
        if (numeriRandom.includes(numeriUtente[index])){

            // pusho numeriUtente[index] nell'array numeriUtenteCorretti
            numeriUtenteCorretti.push(numeriUtente[index]);
        }
    });
    console.log(numeriUtenteCorretti);

}, 30000)