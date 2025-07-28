import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const cart = [];
const myWishList = [];

console.log("Welcome to your sopping cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 2);
const item2 = await createItem("hotwheels lamborghini", 39.99, 2);

//testes

//adicionando itens ao carrinho
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.removeItem(cart, item2);

console.log("Array após diminuir 01 item:")
await cartService.displayCart(cart);

//canculando total do carrinho
await cartService.calculateTotal(cart);

//deletando um item do carrinho e verificando novo total
await cartService.deleteItem(cart, item2.name);
console.log("New price after delete an item:") 
await cartService.calculateTotal(cart);

//testando a deleção novamente
await cartService.deleteItem(cart, item1.name)
console.log("New price after delete an item again:") 
await cartService.calculateTotal(cart);
