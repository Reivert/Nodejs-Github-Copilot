# API RESTful de Produtos

Projeto em Node.js + Express para gerenciar produtos com validações para criação, edição, detalhes e exclusão.

## Instalação

1. Abra o terminal no diretório do projeto
2. `npm install`
3. `npm start`

## Endpoints

- `GET /products` - lista todos os produtos
- `GET /products/:id` - detalhes do produto
- `POST /products` - cria produto
- `PUT /products/:id` - atualiza produto
- `DELETE /products/:id` - remove produto

## Corpo JSON (POST / PUT)

{
  "name": "Nome do produto",
  "price": 99.9,
  "quantity": 10,
  "description": "Descrição opcional"
}

## Validações realizadas

- name: obrigatório, string, mínimo 3 caracteres
- price: obrigatório, number, > 0
- quantity: obrigatório, inteiro, >= 0
- description: opcional, string

## Testes com Postman

1. Inicie o servidor (`npm start`)
2. Configure URL base `http://localhost:3000`
3. Faça as requisições CRUD conforme endpoints
