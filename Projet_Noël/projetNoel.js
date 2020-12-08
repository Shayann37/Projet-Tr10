"use strict"

let commande = [];
let compteurDeCommande = 1

function acheterVoiture(voiture) {
    commande.push(["Commande numéro " + compteurDeCommande + voiture.nom.value, voiture.prenom.value, voiture.age.value, voiture.adresse.value.voiture.voiture1.value]);
    console.log(voiture);

    alert("La commande de votre " + voiture.voiture1.value + " à bien été enregistrée !");
    return false;
}

