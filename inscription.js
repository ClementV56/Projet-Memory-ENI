// function checkNom() {
//   let nom = document.getElementById("nom").value;

//   let nomLen = checkNomLength(nom);

//   if (nomLen) {
//     document.getElementById("checkNom").disabled = false;
//     document.getElementById("errorNom").disabled = true;
//   } else {
//     document.getElementById("checkNom").disabled = true;
//     document.getElementById("errorNom").disabled = false;
//   }
// }

// function checkNomLength(nom) {
//   let isOk = nom.length >= 3;

//   if (isOk) {

//   } else {
//     colorTextRed("nbCaracteres");
//   }

//   return isOk;
// }

// function colorTextGreen(id) {
//   document.getElementById(id).style.color = "green";
// }

// function colorTextRed(id) {
//   document.getElementById(id).style.color = "red";
// }

// function checkName() {

//     let name = document.getElementById('name').value

//     let pwdLen =checkPwdLength(name)
//     let pwdNum =checkPwdNumber(name)
//     let pwdMin =checkPwdMinus(name)
//     let pwdMax =checkPwdMaxus(name)

//     if (nameLen && nameNum && nameMin && nameMax) {
//         document.getElementById('checkNom').disabled = false
//         document.getElementById('errorNom').disabled = true
//     }else{
//         document.getElementById('checkNom').disabled = true
//         document.getElementById('errorNom').disabled = false
//     }
// }

// function isValidPassword(password) {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regex.test(password);
// }

// console.log(isValidPassword("Example123!"));


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
  

  
// function name(params) {
    
// }


//faire apparaitre coches
//   display none
//   display block/content
