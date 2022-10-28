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



function buttonDisableRegister() {
    const inputUser = document.getElementById("username")
    const inputEmail = document.getElementById("email")
    const inputPassword = document.getElementById("password")

    const buttonCadastrar = document.getElementById("cadastrar")

inputPassword.addEventListener('input', (event) => {
        if(inputUser.value.length && inputPassword.value.length && inputEmail.value.length){
            event.preventDefault()
            buttonCadastrar.disabled = false
        }     
    })

    buttonCadastrar.addEventListener("click", () => {
        buttonCadastrar.innerText = ""
        const imgLoading = document.createElement("img")
        imgLoading.src = "../img/spinner.png"
        imgLoading.classList.add("imgLoading")
        buttonCadastrar.append(imgLoading)
    })
}



export {
    buttonDisable,
    verificarLogin,
    buttonDisableRegister
}

export default verificarLogin


