/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message;
}
checkAge();
// RISOLUZIONE /////////////
/*
1. questa funzione controlla se l'età è minore di 18, se è vero assegna a message una stringa di 'errore', altrimenti gli assegna un messaggio positivo
2. 
3. gli errore logici sono:
    -l'assegnazione const invece di let alla variabile message, perchè in seguito il suo contenuto cambia
    -manca il return alla fine della funzione che mi restituisce il message
*/


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
// RISOLUZIONE /////////////
/*
1. questa funzione stampa in console la lunghezza dell array colors
2.
3. gli errore logici sono:
    -assegno a una costante la lunghezza dell'array colors e nel template literal stampo la costante lunghezzaColors
*/


// ESERCIZIO 3
function addNumbers() {
    const userNumber =parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// RISOLUZIONE /////////////
/*
1. questa funzione chiede un numero all utente e stampa in total il numero sommato a 12
2. 
3. gli errore logici sono:
    -il prompt mi restituisce una stringa, quindi basta fare il parseInt del prompt ricevuto
*/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// RISOLUZIONE /////////////
/*
1. questa funzione chiede di inserire l'elami all utente, in seguito verifica se l array addresses include l'email inserita, se è vero stampa 'Accesso consentito', altrimenti stampa 'Accesso negato'
2. errori di sintassi: 
    - la variabile grantAccess è un valore booleano, quindi false non va messo tra virgolette
3. 
*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    
}
checkAccessImproved();
// RISOLUZIONE /////////////
/*
1. questa funzione chiede di inserire l' all utente, in seguito cicla l array delle email nel database e 
2. errori di sintassi: 
    - manca la parentesi graffa che chiude la funzione
    - i booleani sono messi tra parentesi
3. 
*/

























