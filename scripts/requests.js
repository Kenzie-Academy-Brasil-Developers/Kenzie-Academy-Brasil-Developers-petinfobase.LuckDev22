import { verificarLogin, buttonDisable} from "./verificarLogin.js"
import { getLocalStorage } from "./localStorage.js"
import toast from "./toast.js"

const baseURL = "http://localhost:3333/"

async function login(body){
    try{
        const request = await fetch(baseURL + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        buttonDisable()
        if(request.ok){
            const response = await request.json()
            localStorage.setItem("user", JSON.stringify(response))
            setTimeout(() =>{
            window.location.replace("../pages/homePage.html")
        },4000)
        } else {
            verificarLogin("Email ou Senha incorreto!")

        }

    }catch (err){
        verificarLogin("Email ou Senha incorreto!")
    }
}

async function register(body) {
    try{
        const request = await fetch(baseURL + "users/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
            })

            if(request.ok == true){
                toast("Sua conta foi criada com sucesso!", "Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login:")
            }
            setTimeout(() =>{
                window.location.replace("/index.html")
            },4000)
    }catch (err) {
        toast("Errooooooo", "email ou usuario cadastrado")
    }
}

async function getUser(){
    const localStorage = getLocalStorage()

    try{
        const request = await fetch(baseURL + "users/profile",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }  
        })
        const response = await request.json()
        console.log(response)
        return response
        
    }catch(err){
        console.log(err)
    }
}

getUser()

async function getPost(){
const localStorage = getLocalStorage()

console.log(localStorage)

    try {
        const request = await fetch(baseURL + "posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        })   
        
        const response = await request.json()
        return response

    }catch (err){
        console.log(err)
    }
}

async function createPost(body){
    const localStorage = getLocalStorage()

    try{
        const request = await fetch(baseURL + "posts/create",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()

        return response
    }catch (err){
        console.log(err)
    }

}

async function editPost(body, id){
    const localStorage = getLocalStorage()

    try{
        const request = await fetch(baseURL + "posts/"+ id,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()

        return response
    }catch (err){
        console.log(err)
    }

}


async function deletePost(id){
    const localStorage = getLocalStorage()

    try{
        const request = await fetch(baseURL + "posts/"+ id,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        const response = await request.json()

        return response
    }catch (err){
        console.log(err)
    }

}

export { 
    login,
    register,
    getUser,
    getPost,
    createPost,
    editPost,
    deletePost
}