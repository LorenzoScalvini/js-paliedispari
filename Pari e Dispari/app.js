// Funzione per generare un numero casuale da 1 a 5 per il computer 
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari o dispari
function Pari(num) {
    return num % 2 === 0;
}

// Funzione principale del gioco
function gioca() {
    const sceltaUtente = prompt("Scegli pari o dispari (scrivi 'pari' o 'dispari'):");
    const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Verfico se il numero inserito e' valido
    if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
        alert("Numero non valido! Devi inserire un numero tra 1 e 5!");
        return;
    }

    const numeroComputer = generaNumeroRandom();
    const somma = numeroUtente + numeroComputer;

    alert(`Hai scelto: ${numeroUtente}\nNumero del computer: ${numeroComputer}\nSomma: ${somma}`);

// Dichiarazione della variabile per il risultato
    let risultato;

    if (Pari(somma)) {
        risultato = 'pari';
    } else {
        risultato = 'dispari';
    }

    if (risultato === sceltaUtente.toLowerCase()) {
        alert("Hai vinto!");
    } else {
        alert("Hai perso!");
    }
}

// Avvio del gioco tramite la funzione appropriata
gioca();
