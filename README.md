# API de Gestão de Produtos (Nodejs-Github-Copilot) 📦

Este projeto foi desenvolvido em Node.js + Express como parte de um **bootcamp focado no uso de ferramentas de IA**, utilizando o **GitHub Copilot** para auxiliar na escrita, refatoração e estruturação do código. O objetivo principal é demonstrar a criação de uma API funcional para gerenciamento de produtos através de práticas modernas de desenvolvimento assistido.

## 🚀 Sobre o Projeto

A aplicação é uma API RESTful simples que permite realizar o gerenciamento completo (CRUD) de produtos. 

> **Nota de Persistência:** Para fins de estudo, a persistência de dados é feita **em memória** (através de um array no arquivo `productModel.js`). Isso significa que os dados são resetados sempre que o servidor for reiniciado.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework para construção da API.
* **GitHub Copilot**: Assistente de IA utilizado no processo de desenvolvimento.

## 📑 Endpoints da API

Abaixo estão as rotas disponíveis no projeto:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/getAllProducts` | Retorna a lista de todos os produtos. |
| **GET** | `/getProductById/:id` | Retorna os detalhes de um produto específico. |
| **POST** | `/createProduct` | Cria um novo produto. |
| **PUT** | `/updateProduct/:id` | Atualiza as informações de um produto existente. |
| **DELETE** | `/deleteProduct/:id` | Remove um produto da lista. |

## 🚦 Como Executar o Projeto

1. **Clonar o repositório:**
   ```Bash
   git clone [https://github.com/Reivert/API-Nodejs-Github-Copilot.git](https://github.com/Reivert/API-Nodejs-Github-Copilot.git)

2. **Instalar as dependências:**
    ```Bash
    npm install

3. **Iniciar o servidor:**
    ```Bash
    npm start

## 🧪 Testando com Postman

Para facilitar os testes, o projeto inclui uma collection pronta:

1. Localize o arquivo Products_API_Postman_Collection.json na raiz do projeto.
2. Importe-o para o seu Postman.
3. No Postman, configure a variável de ambiente {{baseUrl}} com o endereço do seu servidor local (ex: http://localhost:3000).

### Corpo JSON (POST / PUT)

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

Desenvolvido por: Reivert Zulato.

