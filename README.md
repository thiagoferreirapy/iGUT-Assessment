# iGUT Cadastro

**O jeito mais fácil de cadastrar produtos!**

Este projeto é uma aplicação para cadastro, listagem e pesquisa de produtos, construída usando PHP, HTML, CSS, JavaScript e MySQL. Ele permite que os usuários façam o cadastro de novos produtos, visualizem a lista de produtos já cadastrados e realizem pesquisas de produtos por nome.

## Funcionalidades

- **Cadastrar Produtos**: Interface para adicionar produtos com nome e preço.
- **Listar Produtos**: Exibição de uma tabela com os produtos cadastrados.
- **Pesquisar Produtos**: Busca dinâmica de produtos pelo nome.

## Estrutura do Projeto

- **`images/`**: Contém imagens usadas no projeto.
- **`pages/`**: Página HTML para exibir os produtos.
- **`scripts/`**:
  - **`js/`**: Scripts JavaScript, como a lógica de listagem de produtos.
  - **`php/`**: Scripts PHP para conexão ao banco de dados, registro, listagem e pesquisa de produtos.
- **`styles/`**: Arquivos de estilo CSS.
- **`cadastro_produtos.sql`**: Script SQL para a criação do banco de dados e da tabela de produtos.

## Pré-requisitos

- [XAMPP](https://www.apachefriends.org/index.html) instalado e rodando (Apache e MySQL).
- Editor de texto ou IDE (ex: Visual Studio Code).
- Navegador para acessar a aplicação.

## Instalação e Configuração

1. Clone o repositório para a sua máquina local:
   ```bash
   git clone https://github.com/thiagoferreirapy/iGUT-Assessment.git
Coloque os arquivos do projeto dentro da pasta htdocs do XAMPP (por exemplo: C:\xampp\htdocs\iGUT-Assessment).

Inicie o servidor Apache e MySQL no XAMPP.

Configuração do Banco de Dados
Abra o phpMyAdmin acessando http://localhost/phpmyadmin.

Crie um novo banco de dados chamado cadastro_produtos.

Importe o arquivo cadastro_produtos.sql que está na pasta do projeto:

Na aba Importar, selecione o arquivo cadastro_produtos.sql.
Clique em Executar.
Isso irá criar a tabela de produtos com os campos id, name e price.

### ⚠️ Atenção:
1. No arquivo connection.php é necessário alterar as credenciais para conectar com o seu banco de dados:
   ```bash
    $host: O endereço do servidor onde seu banco de dados MySQL está hospedado (geralmente localhost).
    $dbname: O nome do banco de dados que você deseja acessar.
    $user: O nome de usuário com acesso ao banco de dados.
    $password: A senha desse usuário.


## Uso
Acesse a página principal da aplicação no navegador:
http://localhost/Assessment/pages/product.html
Use o formulário na página para cadastrar novos produtos.

Navegue até a lista de produtos e use a barra de pesquisa para encontrar produtos já cadastrados.

## Estrutura do Banco de Dados

A aplicação utiliza um banco de dados MySQL para armazenar os produtos cadastrados. Abaixo estão os detalhes da tabela principal usada no projeto:

## Estrutura do Banco de Dados

A aplicação utiliza um banco de dados MySQL para armazenar os produtos cadastrados. Abaixo estão os detalhes da tabela principal usada no projeto:

### Tabela `produtos`

| Coluna  | Tipo              | Descrição                                             |
|---------|-------------------|-------------------------------------------------------|
| `id`    | `INT` (Auto Increment) | Identificador único do produto.                     |
| `name`  | `VARCHAR(255)`     | Nome do produto. Deve conter até 255 caracteres.      |
| `price` | `DECIMAL(10, 2)`   | Preço do produto. Suporta até 10 dígitos, com 2 casas decimais. |

#### Exemplo de Criação da Tabela:

  ```sql
  CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
  );
