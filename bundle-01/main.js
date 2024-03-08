/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/



// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// RISOLUZIONE /////////////
/*
1. questo ciclo for serve a stampare 5 volte il contatore i
2. l'errore di sintassi è il maggiore al posto del minore
*/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
addIfEven(4);
// RISOLUZIONE /////////////
/*
1. questa funzione accetta un argomento, in base al numero passato, se questo è pari gli viene sommato 5, altrimenti restituisce il numero inserito
2. l'errore di sintassi è = invece di ===
3. l'errore logico è che non è stata richiamata  la funzione
*/

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive();
// RISOLUZIONE /////////////
/*
1. questa funzione stampa per 5 volte il contatore i
2. l'errore di sintassi sono le virgole invece dei punti e virgola
3. l'errore logico è che non è stata richiamata  la funzione
*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]
// RISOLUZIONE /////////////
/*
1. questa funzione cicla l'array numbers, verifica se il numero è pari, se è vero pusha il numero nell array evenNumbers, altrimenti restituisce l array evenNumbers
2. l'errore di sintassi sono: 
    -il punto e virgola nel ciclo for
    - = invede di === nella condizione
    - il punto e virgoila fuori dalla condizione
3. gli errori logici sono:
    - numbers.length invece di numbers.length -1
    -nella condizione numbers[i] invece di numbers, altrimenti prende tutto l array
    -lo stesso nel push, perchè devo pushare il numero a indice i
    -il return deve stare fuori dal ciclo for, altrimenti il ciclo si blocca alla prima iterazione
*/