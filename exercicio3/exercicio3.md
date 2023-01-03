# Exercício 3
Mesmo fluxo que o exercício 2.

## Search Product by name
- method HTTP (GET)
- path ("/product/search")
- query params
    - q
- response
    - status 200
    - array do resultado da busca

## Create Purchase
- method HTTP (POST)
- path ("/purchases")
- body
    - userId
    - productId
    - quantity
    - totalPrice
- response
    - status 201
    - "Compra realizada com sucesso"
