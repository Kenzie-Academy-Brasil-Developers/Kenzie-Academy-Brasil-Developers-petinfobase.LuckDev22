import { login } from "./requests.js"

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





// const user =  {
// 	email: "rafael@kenzie.com.br",
// 	password: "123456"
// }

// console.log(await login(user))