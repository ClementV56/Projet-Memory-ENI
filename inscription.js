
function evaluatePasswordStrength(password) {
    let score = 0;
        // Vérifier la longueur du mot de passe
    if (password.length >= 8) score++;
  
    // Vérifier la présence de majuscules
    if (/[A-Z]/.test(password)) score++;
  
    // Vérifier la présence de minuscules
    if (/[a-z]/.test(password)) score++;
  
    // Vérifier la présence de chiffres
    if (/\d/.test(password)) score++;
  
    // Vérifier la présence de caractères spéciaux
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
  
    return score;
  }
  
  document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strength = evaluatePasswordStrength(password);
    const strengthText = ["Très faible", "Faible", "Moyenne", "Forte", "Très forte"];
  
    // Mettre à jour l'indicateur de force
    document.getElementById('password-strength').value = strength;
  
    // Afficher le texte correspondant
    document.getElementById('password-strength-text').textContent = "Sécurité : " + strengthText[strength];
  });
  

function barresPassword () {
  if (password.length) {
    
  }
}

//Création pseudo
//Intéraction avec l'image et le texte
let imageNom = document.getElementById("checkNom");
let textNom = document.getElementById("nbCaracteres");
let nom = document.getElementById("nom");
console.log(nom);

//Changer d'image à la saisie et couleur du texte
nom.addEventListener("input", function () {
  if (nom.value === ""){
    textNom.setAttribute("hidden", true);
    imageNom = document.setAttribute("hidden", true);
  } else if (nom.value.length < 3){
    imageNom.removeAttribute("hidden");
    imageNom.src = "ressources1/error.svg";
    imageNom.alt = "incorrect";
    textNom.removeAttribute("hidden");
    textNom.style.color = "red";
  }else if (nom.value.length > 3){
    imageNom.removeAttribute("hidden");
    imageNom.src = "ressources1/check.svg";
    imageNom.alt = "correct";
    textNom.removeAttribute("hidden");
    textNom.style.color = "green"
  }
})


// // Email valide
// let imageEmail = document.getElementById("checkEmail");
// let textEmail = document.getElementById("emailValid");
// let email = document.getElementById("email");
// console.log(email);

// //Changer d'image à la saisie et couleur du texte
// email.addEventListener("input", function () {
//   if (email.value === ""){
//     textEmail.setAttribute("hidden", true);
//     imageEmail = document.setAttribute("hidden", true);
//   } else if (email.pattern.length = 0){
//     imageEmail.removeAttribute("hidden");
//     imageEmail.src = "ressources1/error.svg";
//     imageEmail.alt = "incorrect";
//     textEmail.removeAttribute("hidden");
//     textEmail.style.color == "red";
//   }else if (email.pattern = ){
//     imageEmail.removeAttribute("hidden");
//     imageEmail.src = "ressources1/check.svg";
//     imageEmail.alt = "correct";
//     textEmail.removeAttribute("hidden");
//     textEmail.style.color = "green"
//   }
// })


let creationCompte = document.getElementById("creationBouton");
let annuler = document.getElementById("annulerBouton");

creationCompte.addEventListener("input", function() {
  if ('click' = "connection.html") {
    
  }
})