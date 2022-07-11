# PetStore

## About

Este é um projeto de uma loja online para a disciplina SCC0219 - Introdução ao Desenvolvimento Web.

| Nome | Número USP | Telegram |
| ------ | ------ | ------ |
| João Pedro Rodrigues Freitas | 11316552 | `@joaoprfreitas` |
| Vinícius Santos Monteiro | 11932463 | `@Jamal_USP` |
| Gabriel Akio Urakawa | 11795912 | `@Gabriel_Akio` |


## Requirements
Neste sistema, teremos 2 tipos de usuários: clientes e administradores:
- Os administradores são responsáveis pelo registro/gerenciamento de administradores, clientes e produtos fornecidos. O sistema já vem com uma conta admin e com senha admin.
- Clientes são os usuários que têm acesso ao sistema para adquirir produtos.

O registro do admin contém: nome, id, telefone e usuário.\
O registro de cada cliente contém: nome, id, endereço, telefone, email, senha.\
O registro de produtos contém: nome, id, photo, descrição, preço, quantidade em estoque, quantidade vendida.\
Venda de produtos: os produtos são selecionados, as quantidades são escolhidas, e adicionadas ao carrinho. Tais produtos são comprados por meio do cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produtos vendidos é subtraída da quantidade em estoque e adicionada a quantidade vendida. Carrinhos são esvaziados apenas após pagamento por parte do cliente.\
Gerenciamento de produtos: admins podem criar/atualizar/ler/deletar novos produtos. Por exemplo, eles podem alterar a quantidade em estoque.\
Como funcionalidade extra, nosso sistema reproduzirá o som dos brinquedos dos pets.\
O sistema proverá uma boa acessibilidade e usabilidade.

## Project Description
O objetivo deste projeto é criar uma sistema de vendas online de um PetShop com foco em produtos para animais domésticos.
O mockup foi implementado utilizando `css`, `html` e `javascript`
O frontend foi feito utilizando `React.js` no frontend, tornando possível o formato Single Page Application.
O backend será feito utilizando `Node.js` e `MongoDB` para o banco de dados.

![Diagrama de navegação](/mockup/images/DiagramaNavegacao.png)

A seguir, as imagens das páginas de `mockup`, que também estão em `/mockup`:

- [Home](/mockup/images/Index.png)
- [Products](/mockup/images/Products.png)
- [Services](/mockup/images/Services.png)
- [About](/mockup/images/About.png)
- [User account](/mockup/images/UserAccount.png)
- [Admin account](/mockup/images/AdminAccount.png)
- [Login](/mockup/images/Login.png)
- [Register](/mockup/images/Register.png)
- [Cart](/mockup/images/Cart.png)


## Comments About the Code
O código foi feito utilizando `React.js`, `Node.js` e `MongoDB`.
As informações do dashboard, do account e dos products são obtidas e alteradas por meio de requests à nossa API que está conectada a um banco de dados hospedado em AWS (MongoDB Atlas).
Em relação ao frontend, o código é composto por diversos componentes, atuando, então, como Single Page Application.

## Test Plan
Foram utilizados os navegadores Brave e Chrome para a navegação e teste do projeto. Sendo utilizado os sistemas operacionais Linux e Windows.
Ainda, para testar as funcionalidades, foram criados no banco de dados alguns usuários e produtos, sendo também, editados, removidos e lidos. Ainda, foram finalizadas algumas compras, gerando o relatório de pedidos no banco de dados.

## Test Results
Todas as funcionalidades foram testadas e desempenharam seu papel.

## Build Procedures
##### Requisitos
É necessário ter o `npm` instalado.

##### Procedimento
Inicialmente, clone o repositório.
Primeiro, abra o servidor:
- Vá para o local onde o projeto foi clonado.
- `cd backend/`
- `npm install`
- `npm start`
- No terminal será indicada a porta de conexão.

Para abrir o cliente:
- Vá para o local onde o projeto foi clonado.
- `cd frontend/`
- `npm install`
- `npm start`
- No terminal será indicado em qual local o site pode ser acessado.

Existe uma conta administrador:
- email: `admin`
- senha: `admin`

## Problems
Nenhum problema.

## Comments
Utilizamos o Toast para criar alguns popus de alerta, por exemplo, ao adicionar um produto ao carrinho, finalizar a compra, entre outras formas.