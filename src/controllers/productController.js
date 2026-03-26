// Controlador para produtos
const Product = require('../models/productModel');

const getAllProducts = (req, res) => {
    const products = Product.getAll();
    res.json(products);
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = Product.getById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
};

const createProduct = (req, res) => {
    const product = Product.create(req.body);
    res.status(201).json(product);
};

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = Product.update(id, req.body);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
};

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = Product.delete(id);
    if (product) {
        res.json({ message: 'Produto deletado', product });
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};