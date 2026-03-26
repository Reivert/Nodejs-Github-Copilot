// Modelo para produtos
// Usando array em memória para simplicidade

let products = [];
let nextId = 1;

class Product {
    constructor(name, price, quantity, description = '') {
        this.id = nextId++;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        return products.find(p => p.id === id);
    }

    static create(data) {
        const product = new Product(data.name, data.price, data.quantity, data.description);
        products.push(product);
        return product;
    }

    static update(id, data) {
        const product = this.getById(id);
        if (product) {
            Object.assign(product, data);
            return product;
        }
        return null;
    }

    static delete(id) {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            return products.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = Product;