class Shop {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.products = [];
        this.users = [];

    }

    intro() {
        console.log(`Hi, we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`);
    }

    formatedProductName(product) {
        return product[0].toUpperCase() + product.slice(1);
    }

    formatedPrice(price) {
        return (price / 100).toFixed(2);
    }

    addItem(product, price) {
        price = this.formatedPrice(price)
        console.log(`"${this.name}" sells ${product} for ${price} ${this.currency}`);

        product = this.formatedProductName(product)

        this.products.push({
            name: product,
            price: price
        })
    }

    productList() {
        let list = ``;
        let index = 1;
        for (let product of this.products) {
            list += `${index++}) ${product.name} - ${product.price} ${this.currency}\n`
        }
        return list;

    }

    items() {
        console.log(`Items for sale at "${this.name}":\n==================== \n${this.productList()}====================`);
    }

    updatePrice(product, price) {

        // Class'eje atnaujinu kaina nurodytam produktui. Ivestą produktą sulyginu su masyve esanciu produktu jei reiksme ta pati atanujinu to produkto kainą
        let productName = this.formatedProductName(product);
        for (let product of this.products) {
            if (product.name === productName) {
                product.price = this.formatedPrice(price)
            }
        }

        console.log(`"${this.name}" updated price and sells ${product} for ${this.formatedPrice(price)} ${this.currency} now!`);
    }

    createCart(userName) {
        // pridedu avrtotoja i Class prie users masyvo
        this.users.push({
            name: userName,
        });

        console.log(`${userName} have an open cart at "${this.name}"!`);
    }

}

export { Shop }