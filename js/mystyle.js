// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere - Età del passeggero-
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// [insomma quello che avete fatto ieri… :riciclo::occhiolino: ]
//  MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante, allora completeremo il form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
// Nota: Il layout va lasciato assolutamente alla fine.
// Se non vi sentite particolarmente creativi, quella dello screeshot potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra

//recupero il bottone da cliccare dall'html
const submitBtn = document.querySelector(".submit");

//creo un addeventlistener click sul botttone con la funzione all interno
submitBtn.addEventListener("click", function () {
  //
  event.preventDefault();

  //chiedo il nome all utente
  let userName = document.getElementById("userName").value;
  console.log("Nome passeggero: " + userName);

  //dichiarazione della variabile final price
  let finalPrice;

  //Chiedo l'età al passeggero
  let userAge = document.getElementById("age");
  console.log("Età del passeggero: " + userAge);
  //value of userAge
  let userAgeValue = userAge.value;

  //Chiedo chilometri che deve percorrere
  let travelKm = document.getElementById("km").value;
  console.log("Chilometri che vanno percorsi: " + travelKm);

  //Calcolo il costo totale del viaggio totale km * 0,21€
  let travelPrice = travelKm * 0.21;
  travelPrice = parseFloat(travelPrice.toFixed(2));
  console.log("Prezzo totale senza sconti: " + travelPrice);

  //Togliamo il 20% da costo del biglietto ai ragazzi > 18
  if (userAgeValue === "minorenne") {
    //calcolo dello sconto
    let discount20 = (travelPrice * 20) / 100;
    discount20 = parseFloat(discount20.toFixed(2));

    //calcolo del prezzo finale scontato
    finalPrice = travelPrice - discount20;
    finalPrice = parseFloat(finalPrice.toFixed(2));

    console.log(
      "Quantità sconto: " + discount20,
      "Prezzo finale: " + finalPrice
    );

    //Togliamo il 40% dal costo del biglietto alle persone over 65
  } else if (userAgeValue === "over65") {
    //calcolo dello sconto
    let discount40 = (travelPrice * 40) / 100;
    discount40 = parseFloat(discount40.toFixed(2));

    //calcoliamo il prezzo finale scontato
    finalPrice = travelPrice - discount40;
    finalPrice = parseFloat(finalPrice.toFixed(2));

    console.log(
      "Quantità sconto: " + discount40,
      "Prezzo finale: " + finalPrice
    );
  } else {
    // altrimenti nessuno sconto tra i 18 e i 64 anni
    finalPrice = travelPrice;
    console.log("Prezzo finale: " + finalPrice);
  }

  //cap casuale
  let capNum = Math.floor(Math.random() * 90000) + 10000;
  console.log("Numero del CAP casuale: " + capNum);

  //numero carrrozza casuale
  let numCarrozza = Math.floor(Math.random() * 10) + 1;
  console.log("Numero della carrozza casuale: " + numCarrozza);

  //STAMPIAMO NELL HTML IL PREZZO FINALE
  document.querySelector(".finalPrice").innerHTML = "€ " + finalPrice;
  //STAMPIAMO NELL HTML IL IL NOME DEL PASSEGGERO
  document.querySelector(".name").innerHTML = userName;
  //numero carrrozza casuale
  document.querySelector(".carrozza").innerHTML = numCarrozza;
  //cap casuale
  document.querySelector(".cap").innerHTML = capNum;
});
