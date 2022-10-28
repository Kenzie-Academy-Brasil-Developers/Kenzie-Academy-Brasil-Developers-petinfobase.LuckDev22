import { getLocalStorage } from "./localStorage.js";
import { getPost, createPost, getUser } from "./requests.js"
import { createNewPostForm, editPostForm, deletePostForm } from "./form.js"
import openModal from "./modal.js";

function verificarPermissao() {
    const user = getLocalStorage()

    if(user == ""){
        window.location.replace("../index.html")
    }
}

verificarPermissao()


async function renderUser(){
    const user =  await getUser()
    const userImg = document.getElementById("divUserImg")

    const imgUser = document.createElement("img")
    imgUser.src = user.avatar

    userImg.append(imgUser)
}

renderUser()


async function renderPost(){
    const post = await getPost()
    const sectionRenderPost = document.getElementById("sectionFeed")
    
    post.forEach(element => {
        const divMain         = document.createElement("div")
        const divPost         = document.createElement("div")
        const divImg          = document.createElement("div")
        const imgUser         = document.createElement("img")
        const h3NameUser      = document.createElement("h3")
        const pDivisor        = document.createElement("p")
        const pData           = document.createElement("p")
        const divButtons      = document.createElement("div")
        const buttonEditar    = document.createElement("button")
        const buttonExcluir   = document.createElement("button")
        const divFeed         = document.createElement("div")
        const h2title         = document.createElement("h2")
        const h3Description   = document.createElement("h3")
        const aHref           = document.createElement("a")

        divMain.id = "divmain"
        divPost.id = "postUser"
        divImg.id = "userImg"
        imgUser.src = element.user.avatar
        imgUser.alt = "imagem Usuario"
        h3NameUser.innerText = element.user.username
        pDivisor.innerText = "|"
        pData.id = "data"
        const dataF = new Date(element.createdAt)
        const dateFormater = Intl.DateTimeFormat("pt-BR", {
            month: "long", year: "numeric"
        })
        pData.innerText = dateFormater.format(dataF)

        buttonEditar.id = "editar"
        buttonEditar.innerText = "Editar"
        buttonEditar.addEventListener("click", ()=>{
            const formEdit = editPostForm(element)
            openModal(formEdit)
        })

        buttonExcluir.id = "excluir"
        buttonExcluir.innerText = "Excluir"
        buttonExcluir.addEventListener("click", ()=>{
            const formDel = deletePostForm(element.id)
            console.log(element.id)
            openModal(formDel)
        })
        divFeed.id = "postFeed"
        h2title.id = "titlePost"
        h2title.innerText = element.title
        h3Description.id = "postDescri"
        h3Description.innerText = element.content
        aHref.id = "acessarFeed"
        aHref.innerText = "Acessar publicação"

        aHref.addEventListener("click", ()=>{
            console.log(element)
            openModal(divMain)
        })

        divMain.append(divPost, divFeed)
        divPost.append(divImg, divButtons)
        divImg.append(imgUser, h3NameUser, pDivisor, pData)
        divButtons.append(buttonEditar, buttonExcluir)
        divFeed.append(h2title, h3Description, aHref)
        sectionRenderPost.append(divMain)

    });

}

renderPost()


function createNewPost(){
    const button = document.getElementById("buttonCriar")

    button.addEventListener("click", async () =>{
        const formCreate = createNewPostForm()
        openModal(formCreate)
    })
}

createNewPost()


export { renderPost }