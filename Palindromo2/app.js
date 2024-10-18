function isPalindrome(word) { 
    //Rimuove gli spazi e converte in minuscolo e filtra la parola
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    //Calcola la lunghezza della parola pulita
        const length = cleanedWord.length;
    
    // Controlla i caratteri simmetrici scorrendo l'array fino a meta'
        for (let i = 0; i < length / 2; i++) {
            if (cleanedWord[i] !== cleanedWord[length - 1 - i]) {
    // La funzione ritorna false in caso non sia  palindroma 
                return false; 
            }
        }
    // La funzione ritorna true in caso sia  palindroma 
        return true; 
    }
    
    // Input dell'utente
    const userInput = prompt("Inserisci una parola:");
    
    // Verifico se la parola e' palindroma
    if (isPalindrome(userInput)) {
        alert(`- '${userInput}' E' palindroma!`);
    } else {
        alert(`- '${userInput}' Non è palindroma.`);
    }
    