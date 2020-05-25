// Ho una lista di mail a disposizione
var mail = ['esempiomail@gmail.com', 'mailesempio@hotmail.it', 'esempio.mail.nuovo@gmail.com', 'mail.esempio-nuovo@gmail.com'];
var mailSingle;

// Chiedo all'utente la sua mail
var mailUtente = prompt('Qual è la tua mail?');
console.log(mailUtente);

// Ipotesi falsa
var mailPresenza = false;

// Controllo della lista
for ( var i = 0; i < mail.length; i++ ) {
  // Se la sua mail è nella lista
  if( mail[i] == mailUtente ) {
    // Ipotesi vera
    mailPresenza = true;
  }
}

// Cosa stampare a schermo per le due opzioni
// Ipotesi vera
if ( mailPresenza ) {
  document.getElementById('accesso').innerHTML = 'Accesso consentito: Benvenuto!';
}
// Ipotesi rimane falsa
else {
  document.getElementById('accesso').innerHTML = 'Accesso negato.';
}

// DADI
// // Numeri Random
// var numeroUtente = Math.floor(Math.random() * 6) + 1;
// var numeroComputer = Math.floor(Math.random() * 6) + 1;
//
// // Numeri visibili su screen
// document.getElementById('numero-utente').innerHTML = numeroUtente;
// document.getElementById('numero-computer').innerHTML = numeroComputer;

// Lista numeri utente
var listaUtente = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
var listaComputer = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
document.getElementById('lista-utente').innerHTML = 'I numeri dell utente sono: ' + listaUtente;
document.getElementById('lista-computer').innerHTML = 'I numeri del computer sono: ' + listaComputer;


// Somma e punteggio finale
numeroUtente = listaUtente[0] + listaUtente[1] + listaUtente[2];
numeroComputer = listaComputer[0] + listaComputer[1] + listaComputer[2];
document.getElementById('numero-utente').innerHTML = 'La somma finale dell utente è: ' + numeroUtente;
document.getElementById('numero-computer').innerHTML = 'La somma finale del computer è: ' + numeroComputer;

// Possibili output
if ( numeroUtente > numeroComputer ) {
document.getElementById('winner').innerHTML = 'Il vincitore è l	\'utente!';
} else if ( numeroUtente < numeroComputer ) {
document.getElementById('winner').innerHTML = 'Il vincitore è il computer!';
} else if ( numeroUtente == numeroComputer ) {
document.getElementById('winner').innerHTML = 'Avete pareggiato!';
}
