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
