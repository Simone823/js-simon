// Genero un numero random 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(1, 100));

// Array numeri random
const numeriRandom = [];
console.log(numeriRandom);

// Finche la lunghezza dell'array numeriRandom non è 5, pusho la funzione per generare un numero random
while (numeriRandom.length < 5){
    
    // Se il numero random non è incluso nell'array numeriRandom, pusho il numero random
    if (!numeriRandom.includes(getRandomInt(1, 100))) {
        numeriRandom.push(getRandomInt(1, 100));  
    }
}
console.log(numeriRandom);