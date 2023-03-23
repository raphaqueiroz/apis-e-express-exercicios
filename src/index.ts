import express, {Request, Response} from "express"
import cors from "cors"
import { products, purchases, users } from "./dataBase"
import { Product, Purchase, User } from "./types"


const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})


app.get('/users', (req: Request, res: Response) => {
    res.send(users)
})

app.get('users/search', (req: Request, res: Response) => {
    const q = req.query.q as string
    const filteredUsers = users.filter((user) => {
        return user.id === q
    })

    res.send(filteredUsers)

})

app.get ('/products', (req:Request, res: Response) => {

    res.status(200).send(products)
})

app.get('/products/search', (req: Request, res: Response) => {
    const q = req.query.q as string
    const filteredProduct: Product[] = products.filter((product) => {

        if(q){
        return product.name.toLowerCase().includes(q.toLowerCase())
        }

        return products
    })

    res.status(200).send(filteredProduct)
})

app.get('/purchases', (req: Request, res: Response) => {

    res.status(200).send(purchases)
})

app.post('/users', (req: Request, res: Response) => {
    const body = req.body
    const {id, email, password} = body

    const newUser: User = {
        id, 
        email, 
        password
    }

    users.push(newUser)

    res.status(201).send("Usuário cadastrado")
})

app.post('/products', (req:Request, res: Response) => {
    const {id, name, price, category} = req.body

    const newProduct: Product = {
        id, 
        name, 
        price, 
        category
    }

    products.push(newProduct)

    res.status(201).send("Produto cadastrado com sucesso!")
})

app.post('/purchases', (req: Request, res: Response) => {
    const {userId, productId, quantity, totalPrice} = req.body

    const newPurchase: Purchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }

    purchases.push(newPurchase)

    res.status(201).send("Compra realizada com sucesso")
})

