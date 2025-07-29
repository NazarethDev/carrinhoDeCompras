# Carrinho de compras! 
Criação de um carrinho de compras como parte da participação no bootcamp Mobile Developer da Dio. 

Este projeto cria as funções de um carrinho de compras de uma comércio eletrônico. 

## Como executar

Para que a aplicação funcione corretamente em seu dispositivo, é necessário um motor que seja capaz de executar códigos em JavaScript, assim como o Node.js e o Node Package Manager (NPM) instalados.

Ao se executar o programa através de seu arquivo `index.js`, o programa será executado, mostrando uma demonstração do uso de cada uma das funções apresentadas mais adiante neste texto, com impressões no log do terminal em que será executado com o node.

## Funcionalidades

Todas as funcionalidades do projeto ocorrem sobre um array - neste projeto, o conjunto de objetos que podemos entender como os produtos, o qual será nosso carrinho. 

Dentre as funções exercidas podemos verificar: 

- **Criação de novos itens**: é possível criar um item apenas informando os parâmetros `name`, `price` e `quantity`. Esses, formarão um novo objeto. Vale ressaltar que a função `subtotal()` é um método pertencente aos objetos `Item`. Novos  itens podem ser criados através da função `createItem()`. O novo objeto será similar a este:

````
{
    "name": "Livro 001",
    "price": 25.80,
    "quantity": 1
}
````

- **Subtotal**: Os itens que integram o carrinho de compras possuem essa função que calcula o preço total de um produto no carrinho com base em seu preço unitário e quantidade (função `subtotal()`).

- **Adicionar item**: novos itens podem ser adicionado ao carrinho de compras (função `addItem()`).

- **Aumentar quantidade de um produto**: aumenta o atributo `quantity` de um item no carrinho de compras (função `addItemUnity()`). Essa função foi agregada ao projeto! O escopo inicialmente desenvolvido não continha essa funcionalidade. 

- **Calcular total**: O carrinho realiza a soma do valor de todos os itens que estão nele (função `calculateTotal()`). 

- **Mostrar itens do carrinho**: Há uma função que lista todos os itens que constam no carrinho de compras (função `displayCart()`).

- **Remover item**: esta função diminui a quantidade de um item no carrinho de compras. Caso um item tenha apenas 01 unidade, ele é deletado do carrinho de compras (função `removeItem()`).

- **Deletar um item**: essa função retira um item completamente do carrinho de compras, independentemente do valor que seu atributo `quantity` possua (função `deleteItem()`).



## Contato do desenvolvedor

LinkedIn: linkedin.com/in/lorrannazareth

Email: lorran.nazareth@gmail.com

---------------

# Shopping Cart!
Creation of a shopping cart as part of the participation in the Mobile Developer bootcamp by Dio.

This project implements the features of a shopping cart for an e-commerce platform.

## How to Run

To run the application correctly on your device, you need an engine capable of executing JavaScript code, such as Node.js, and Node Package Manager (NPM) installed.

When running the program through its `index.js` file, the application will start, displaying a demonstration of how each function works (described below), with logs printed in the terminal where it is executed using Node.

## Features

All features of this project are based on an array — in this case, the collection of objects representing the products, which make up our cart.

Among the available functions, we can highlight:

- **Create new items**: It is possible to create an item simply by providing the parameters `name`, `price`, and `quantity`. These will form a new object. It is worth noting that the `subtotal()` function is a method belonging to `Item` objects. New items can be created using the `createItem()` function. The new object will be similar to:
````
{
    "name": "Livro 001",
    "price": 25.80,
    "quantity": 1
}
````


- **Subtotal**: The items in the shopping cart have a function that calculates the total price of a product in the cart based on its unit price and quantity (`subtotal()` function).

- **Add item**: New items can be added to the shopping cart using the `addItem()` function.

- **Increase product quantity**: Increases the `quantity` attribute of an item in the shopping cart (`addItemUnity()` function). This function was added later to the project! The initial scope did not include this feature.

- **Calculate total**: The cart calculates the sum of the value of all items it contains (`calculateTotal()` function).

- **Display cart items**: There is a function that lists all the items currently in the shopping cart (`displayCart()` function).

- **Remove item**: This function decreases the quantity of an item in the shopping cart. If an item has only one unit, it is removed entirely from the cart (`removeItem()` function).

- **Delete an item**: This function removes an item completely from the shopping cart, regardless of its `quantity` value (`deleteItem()` function).

## Developer Contact

LinkedIn: [linkedin.com/in/lorrannazareth](https://linkedin.com/in/lorrannazareth)

Email: lorran.nazareth@gmail.com


