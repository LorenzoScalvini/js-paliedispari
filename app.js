//Funzione che verifica se la parola e' palindorma
function isPalindrome(word) {
//Rimuove gli spazi e converte in minuscolo e filtra la parola
    const cleanedWord = word.replace(/\s+/g, '').toLowerCase();
//Controlla se la parola è uguale alla parola al contrario
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

//Chiedi all'utente di inserire una parola
const userInput = prompt("Inserisci una parola:");

//Verifica se la parola è palindroma
if (isPalindrome(userInput)) {
    alert(`La parola '${userInput}' E' palindroma!`);
} else {
    alert(`La parola '${userInput}' Non è palindroma.`);
}
