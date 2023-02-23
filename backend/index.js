const express = require('express')
const cors = require("cors")
const products = require('./products')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome to our TechBomb API ...")
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/categories', (req, res) => {
    let categories = [...new Set(products.map((item) => item.category.slug))]
    res.send(categories)
})

app.get('/products/:id', (req, res) => {
    let product = products.find((item) => (item.id === req.params.id))
    res.send(product)
})

const port = process.env.PORT || 8000

app.listen(port)