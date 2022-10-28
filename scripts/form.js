import { createPost, editPost, deletePost } from "./requests.js"
import { renderPost } from "./homePage.js"
import openModal from "./modal.js"
import toast from "./toast.js"

function createNewPostForm(){
    const formulario = document.createElement("form")
    const h2Form = document.createElement("h2")
    const labelTitlePost = document.createElement("label")
    const inputTitlePost = document.createElement("input")
    const labelConteudoPost = document.createElement("label")
    const inputConteudoPost = document.createElement("input")
    const buttonAddNewPost = document.createElement("button")

    formulario.innerHTML = ""
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
        // event.preventDefault()
    
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

function editPostForm({title, content, id}){

    const formulario = document.createElement("form")
    const h2Form = document.createElement("h2")
    const labelTitlePost = document.createElement("label")
    const inputTitlePost = document.createElement("input")
    const labelConteudoPost = document.createElement("label")
    const inputConteudoPost = document.createElement("input")
    const buttonAddNewPost = document.createElement("button")

    formulario.innerHTML = ""
    h2Form.innerText = "Editar post"
    labelTitlePost.for = "title"
    labelTitlePost.innerText = "Título do post"
    inputTitlePost.placeholder = "Digite o título aqui ..."
    inputTitlePost.type = "text" 
    inputTitlePost.name = "title"
    inputTitlePost.id = "title"
    inputTitlePost.value = title
    inputTitlePost.required
    labelConteudoPost.for = "content"
    labelConteudoPost.innerText = "Conteúdo do post"
    inputConteudoPost.placeholder = "Deseolvolva o conteúdo do post aqui ..."
    inputConteudoPost.type = "text" 
    inputConteudoPost.name = "content"
    inputConteudoPost.id = "content"
    inputConteudoPost.value = content
    inputConteudoPost.required
    buttonAddNewPost.class = "buttonAdd"
    buttonAddNewPost.type = "submit"
    buttonAddNewPost.innerText = "Salvar Alterações"
    console.log(inputTitlePost)
    formulario.append(h2Form, labelTitlePost, inputTitlePost, labelConteudoPost, inputConteudoPost, buttonAddNewPost)

    formulario.addEventListener("submit", async (event)=>{
        
        const inputs = [...event.target]
        const post = {}
        console.log(post)
        inputs.forEach((elem)=>{    
            if(elem.tagName == "INPUT" && elem.value !=="") {
                post[elem.id] = elem.value
            }

        })
        await editPost(post, id)
        await renderPost()
    })

    return formulario

}

function deletePostForm(id){
    const formulario = document.createElement("form")
    const h2Form = document.createElement("h2")
    const h2Confirme = document.createElement("h2")
    const pActionDel = document.createElement("p") 
    const divButtons = document.createElement("div")
    const buttonCancel = document.createElement("button")
    const buttonConfirmeDel = document.createElement("button")

    h2Form.innerText = "Confirmação de exclusão"
    h2Confirme.innerText = "Tem certeza que deseja excluir este post?"
    pActionDel.innerText = "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir"
    buttonCancel.innerText = "Cancelar"
    buttonCancel.type = "submit"
    buttonConfirmeDel.class = "delConfirm"
    buttonConfirmeDel.type = "submit"
    buttonConfirmeDel.innerText = "Sim, excluir este post"

    divButtons.append(buttonCancel, buttonConfirmeDel)
    formulario.append(h2Form, h2Confirme, pActionDel, divButtons)
    
    formulario.addEventListener("submit", async (e)=>{
        
        toast("Post deletado com sucesso!", "O post selecionado para exlusão foi deletado, a partir de agora não aparecerá no seu feed", "")
        await deletePost(id)
        
    })

    return formulario
}

export { createNewPostForm, editPostForm, deletePostForm }
