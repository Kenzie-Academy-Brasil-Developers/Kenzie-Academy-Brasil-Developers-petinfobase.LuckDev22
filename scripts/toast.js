function toast(title, message, login)  { 
    const body = document.querySelector("body")

    const container = document.createElement("div")
    container.classList.add("toast-container")

    const imgIcone = document.createElement("img")
    imgIcone.alt = `Mensagem de ${title}`

    const aLogin = document.createElement("a")
    aLogin.href = "../index.html"
    aLogin.innerText = `${login}`
    aLogin.classList = "acessarPagina"

    if (title == "Sua conta foi criada com sucesso!") {
        container.classList.add("successToast")
        imgIcone.src = "../img/check.png"
    } else {
        container.classList.add("errorToast")
        imgIcone.src = "../img/erroricon.png"
    }

    const textContainer = document.createElement("div")

    const h3 = document.createElement("h3")
    h3.innerText = title

    const span = document.createElement("span")
    span.innerText = message

    textContainer.append(imgIcone,h3)
    span.append(aLogin)
    container.append(textContainer, span)
    body.appendChild(container)

}


export default toast