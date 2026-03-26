// src/index.js

const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware para ler JSON no corpo das requisições
app.use(express.json());

// Usar as rotas de produtos
app.use('/products', productRoutes);

// Endereço padrão
app.get('/', (req, res) => {
  res.send('API de Produtos funcionando. Use /products');
});

// Inicializa o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor de produtos iniciado em http://localhost:${PORT}`);
});
