import express, { request, response } from "express";

const app = express()

//1° param => rota(recurso API)
//2° param => request, response

app.get("/", (request, response)=>{
    return response.json({ message: "Hello NLW4!!"})
})

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso"})
})

app.listen(3333, () =>  console.log("Server is running"))
