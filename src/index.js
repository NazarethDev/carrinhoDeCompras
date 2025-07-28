import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const cart = [];
const myWishList = [];

console.log("Welcome to your sopping cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 2);
const item2 = await createItem("hotwheels lamborghini", 39.99, 2);
const item3 = await createItem("The Lean Startup", 40.25, 1);

//testes

//adicionando itens ao carrinho
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.addItem(cart, item3);

//mostrando os itens que estão no carrinho
console.log("\nmostrando os itens que estão no carrinho e mostrando total");
await cartService.displayCart(cart);
await cartService.calculateTotal(cart);

//removendo uma unidade do item 1, mostrando o carrinho e calculando total
console.log("\nremovendo uma unidade do item 1, mostrando o carrinho e calculando total");
await cartService.removeItem(cart,item1);
await cartService.displayCart(cart);
await cartService.calculateTotal(cart);

//adiciona uma unidade ao item 3, mostrando carrinho e total
console.log("\nadiciona uma unidade ao item 3, mostrando carrinho e total"); 
await cartService.addItemUnity(cart, item3);
await cartService.displayCart(cart);
await cartService.calculateTotal(cart);

//deleta o item 2 do carrinho de compras, mostra carrinho e total atual
console.log("\ndeleta o item 2 do carrinho de compras, mostra carrinho e total atual");
await cartService.deleteItem(cart, item2);
await cartService.displayCart(cart);
await cartService.calculateTotal(cart);
