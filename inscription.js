
// function passwordOk (){
//     document.get
// }



function checkPassword() {

    let pwd = document.getElementById('mdp').value

    let pwdLen = checkPwdLength(pwd)
    let pwdNum =checkPwdNumber(pwd)
    let pwdMin =checkPwdMinus(pwd)
    let pwdMax =checkPwdMaxus(pwd)

    if (pwdLen && pwdNum && pwdMin && pwdMax) {
        document.getElementById('valider').disabled = true
    }else{
        document.getElementById('valider').disabled = false
    }
}

