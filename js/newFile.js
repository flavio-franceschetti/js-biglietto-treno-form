//Togliamo il 20% da costo del biglietto ai ragazzi >18
if (userAge < 18) {
  //calcolo del valore dello sconto
  const discount20 = (travelPrice * 20) / 100;
  //calcolo del prezzo finale scontato
  var finalPrice = travelPrice - discount20;
  console.log("Quantità sconto: " + discount20, "Prezzo finale: " + finalPrice);
  //Togliamo il 40% dal costo del biglietto alle persone over 65
} else if (userAge >= 65) {
  //calcoliamo il valore dello sconto
  const discount40 = (travelPrice * 40) / 100;
  //calcoliamo il prezzo finale
  var finalPrice = travelPrice - discount40;
  console.log("Quantità sconto: " + discount40, "Prezzo finale: " + finalPrice);

  let arrotondato = finalPrice.toFixed(2);
  console.log(arrotondato);
}
