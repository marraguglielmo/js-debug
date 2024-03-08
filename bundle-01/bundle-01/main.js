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
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]