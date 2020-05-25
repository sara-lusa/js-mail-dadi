// Ho una lista di mail a disposizione
var mail = ['esempiomail@gmail.com', 'mailesempio@hotmail.it', 'esempio.mail.nuovo@gmail.com', 'mail.esempio-nuovo@gmail.com'];
var mailSingle;

// Chiedo all'utente la sua mail
var mailUtente = prompt('Qual è la tua mail?');
console.log(mailUtente);

// Ipotesi
var mailPresenza = false;

// Controllo della lista
for ( var i = 0; i < mail.length; i++ ) {
  // Se la sua mail è nella lista
  if( mail[i] == mailUtente ) {
    // Vero
    mailPresenza = true;
  }
}

// Cosa stampare a schermo
if ( mailPresenza ) {
  document.getElementById('accesso').innerHTML = 'Accesso consentito: Benvenuto!';
} else {
  document.getElementById('accesso').innerHTML = 'Accesso negato.';
}
