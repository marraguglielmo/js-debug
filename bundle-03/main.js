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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter( (auto) => auto.type.toLowerCase() === 'diesel');

const otherCars = cars.filter( (auto) => auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel');

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

// RISOLUZIONE /////////////
/*
1. questo codice è composto da un array di oggetti che rappresentano delle macchine. Viene messo un filtro per avere 3 array, ognuno contenente il tipo di macchina
2. errori di sintassi: 
    - a riga 59 manca una virgola che separa gli oggetti
    - nella prima arrow function il maggiore uguale è scritto al contrario
3. errori di logica:
    - essendoci alcune stringe con maiuscole e altre con minuscole, manca il metodo toLowerCase() nell arrow function
    - nella condizione nell ultimo filtro, invede di or va messo and, altrimenti prende tutte le macchine
*/