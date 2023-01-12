class Shop {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.products = [];
    }

    intro() {
        const res = `Hi, we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`;

        console.log(res);
        return res;
    }

    formattedPrice(price) {
        return `${(price / 100).toFixed(2)} ${this.currency}`;
    }

    formattedName(name) {
        return name[0].toUpperCase() + name.slice(1);
    }

    addItem(product, price) {
        this.products.push({
            name: product,
            price: price,
        });

        const res = `"${this.name}" sells ${product} for ${this.formattedPrice(price)} now!`;

        console.log(res);
        return res;
    }

    items() {
        const title = `Items for sale at "${this.name}":`;
        const line = `====================`;
        let list = '';
        let i = 0;

        for (const { name, price } of this.products) {
            list += `${++i}) ${this.formattedName(name)} - ${this.formattedPrice(price)};\n`;
        }

        const res = `${title}\n${line}\n${list}${line}`;

        console.log(res);
        return res;
    }
}

export { Shop }