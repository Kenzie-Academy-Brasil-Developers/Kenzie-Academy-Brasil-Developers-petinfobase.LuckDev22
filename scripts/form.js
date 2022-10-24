import { createPost } from "./requests.js"
import { renderPost } from "./homePage.js"

function createNewPostForm(){
    const formulario = document.createElement("form")
    const h2Form = document.createElement("h2")
    const labelTitlePost = document.createElement("label")
    const inputTitlePost = document.createElement("input")
    const labelConteudoPost = document.createElement("label")
    const inputConteudoPost = document.createElement("input")
    const buttonAddNewPost = document.createElement("button")

    h2Form.innerText = "Criando novo post"
    labelTitlePost.for = "title"
    labelTitlePost.innerText = "Título do post"
    inputTitlePost.placeholder = "Digite o título aqui ..."
    inputTitlePost.type = "text" 
    inputTitlePost.name = "title"
    inputTitlePost.id = "title"
    inputTitlePost.required
    labelConteudoPost.for = "content"
    labelConteudoPost.innerText = "Conteúdo do post"
    inputConteudoPost.placeholder = "Deseolvolva o conteúdo do post aqui ..."
    inputConteudoPost.type = "text" 
    inputConteudoPost.name = "content"
    inputConteudoPost.id = "content"
    inputConteudoPost.required
    buttonAddNewPost.class = "buttonAdd"
    buttonAddNewPost.type = "submit"
    buttonAddNewPost.innerText = "Publicar"

    formulario.append(h2Form, labelTitlePost, inputTitlePost, labelConteudoPost, inputConteudoPost, buttonAddNewPost)

    formulario.addEventListener("submit", async (event)=>{
        event.preventDefault()
    
        const inputs = [...event.target]
        const newPost = {}

        inputs.forEach((elem)=>{    
            if(elem.tagName == "INPUT" && elem.value !=="") {
                newPost[elem.id] = elem.value
            }

        })
        await createPost(newPost)
        // await renderPost()
    })

    return formulario

}

export { createNewPostForm }
