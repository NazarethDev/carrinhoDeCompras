// quais ações meu carrinho pode fazer?


//adicionar item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
};

//aumenta em uma unidade o atributo quantidade da Array
async function addItemUnity(cart, item) {
    const indexFound = cart.findIndex((product) => product.name === item.name)

    if (indexFound <0 ) {
        console.log("O item não foi encontrado :(");
        console.log("Tente novamente");
        return;
    };

    cart[indexFound].quantity += 1;
};

//deletar item do carrinho
async function deleteItem(userCart, item) {
    const index = userCart.findIndex((product) => product.name === item.name);
    if (index !== -1) {
        userCart.splice(index, 1);
    };
};

//diminuir um item
async function removeItem(cart, item) {
    //encontrar o índice do item
    const indexFound = cart.findIndex((product) => product.name === item.name);
    //caso não encontre o item
    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    };
    //item encontrado, subtrair um item. item = 1, deletar item
    if (cart[indexFound].quantity > 1) {
        cart[indexFound].quantity -= 1;
        return;
    };
    //caso item = 1, deletar item
    if (cart[indexFound].quantity == 1) {
        cart.splice(indexFound, 1);
    };
};

//calcular total do carrinho
async function calculateTotal(cart) {
    const result = cart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("Shopping cart total is: " + result);
};

async function displayCart(cart) {
    console.log("Cart list: ");
    cart.forEach((item, index) => {
        console.log(`\n${index + 1} Product name: ${item.name} - R$${item.price} |
            quantity: ${item.quantity} | subtotal ${item.subtotal()}`);
    });
};

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    addItemUnity
}