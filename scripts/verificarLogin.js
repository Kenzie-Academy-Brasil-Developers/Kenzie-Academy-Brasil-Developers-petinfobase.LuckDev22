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

export default verificarLogin