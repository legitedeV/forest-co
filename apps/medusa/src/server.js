const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())

const dataPath = path.join(__dirname, '..', 'data', 'products.json')

function readProducts() {
  if (!fs.existsSync(dataPath)) {
    return []
  }
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/store/products', (_req, res) => {
  const products = readProducts()
  res.json({ products })
})

app.listen(9000, () => {
  console.log('Medusa API listening on :9000')
})
