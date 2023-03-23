import { User,Product, CATEGORIAS, Purchase } from "./types";

export const users: User[] = [
    {
        id: "001",
        email: "aluno1@email.com",
        password:"123"
    }, 
    {
        id: "002",
        email: "aluno2@email.com",
        password:"123"
    }, 
    {
        id: "003",
        email: "aluno3@email.com",
        password:"123"
    }
]

export const products: Product[]=[
    {
        id : "1",
        name: "bolsa",
        price: 6,
        category: CATEGORIAS.ACCESSORIES
    },
    {
        id : "2",
        name: "blusa",
        price: 10,
        category: CATEGORIAS.CLOTHES_AND_SHOES
    },
    {
        id : "3",
        name: "celular",
        price: 50,
        category: CATEGORIAS.ELECTRONICS
    },        
]

export const purchases: Purchase[] = [
    
]