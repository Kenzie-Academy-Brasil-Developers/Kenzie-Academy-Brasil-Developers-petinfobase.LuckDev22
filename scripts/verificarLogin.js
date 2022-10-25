function verificarLogin(title) {
    
    const divFormLogin = document.getElementById("verificarLogin")
    const divInfoLogin = document.createElement("div")
    const h3infoUserLogin = document.createElement("h3")
    h3infoUserLogin.id = "verificar"
    
    divFormLogin.innerHTML = ""
    h3infoUserLogin.innerText = title
    divInfoLogin.append(h3infoUserLogin) 
    divFormLogin.append(divInfoLogin)
    
}

function buttonDisable() {
    const inputUser = document.getElementById("email")
    const inputPassword = document.getElementById("password")
    const buttonAcessar = document.getElementById("acessar")

console.log(inputUser)
inputPassword.addEventListener('input', (event) => {
        if(inputUser.value.length && inputPassword.value.length){
            event.preventDefault()
            buttonAcessar.disabled = false
        }     
    })

    buttonAcessar.addEventListener("click", () => {
        buttonAcessar.innerText = ""
        const imgLoading = document.createElement("img")
        imgLoading.src = "../img/spinner.png"
        imgLoading.classList.add("imgLoading")
        buttonAcessar.append(imgLoading)
    })
}



export {
    buttonDisable,
    verificarLogin
}

export default verificarLogin


