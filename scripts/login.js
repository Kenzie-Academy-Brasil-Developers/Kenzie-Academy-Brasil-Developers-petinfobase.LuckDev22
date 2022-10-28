import { login } from "./requests.js"
import { buttonDisable } from "./verificarLogin.js"

function eventLogin() {
    const form = document.querySelector("form")
    const elements = [...form.elements]

    form.addEventListener("submit", async (e) => {
        e.preventDefault()

        const body = {}

        elements.forEach((elem) => {
            if (elem.tagName == "INPUT" && elem.value !== "") {
                body[elem.id] = elem.value
            }
        })
        await login(body)
    })
}

eventLogin()

buttonDisable()

