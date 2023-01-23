class Shop {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.product = [];

    }

    intro() {
        console.log(`Hi, we are ${this.name}.\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`);
    }

    formatedProductName(product) {
        return product[0].toUpperCase() + product.slice(1);
    }

    formatedPrice(price) {
        return (price / 100).toFixed(2);
    }

    addItem(product, price) {
        price = this.formatedPrice(price)
        console.log(`${this.name} sells ${product} for ${price} ${this.currency}`);

        product = this.formatedProductName(product)

        this.product.push({
            name: product,
            price: price
        })

    }

}

export { Shop }