# PetStore
## About

Este é um projeto de uma loja online para a disciplina SCC0219 - Introdução ao Desenvolvimento Web.

| Nome | Número USP |
| ------ | ------ |
| João Pedro Rodrigues Freitas | 11316552 |
| Vinícius Santos Monteiro | 11932463 |
| Gabriel Akio Urakawa | 11795912 |


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
O sistema será responsivo e proverá uma boa acessibilidade e usabilidade.\

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

## Test Plan
Nós pretendemos utilizar o Postman para testar o backend

## Test Results

## Build Procedures
##### Requisitos
É necessário ter o `npm` instalado.

##### Procedimento
Inicialmente, clone o repositório.
Para abrir o cliente:
- Vá para o local onde o projeto foi clonado.
- `cd frontend/`
- `npm install`
- `npm start`
- No terminal será indicado em qual local o site pode ser acessado.

## Problems
Durante a primeira etapa do projeto, as páginas login, register, admin account e user account estão na navbar. Posteriormente, elas serão integradas de acordo com o fato
de o usuário estar logado ou não. Ainda, os produtos e serviços estão estáticos por enquanto, posteriormente serão adicionados automaticamente de acordo com o banco de dados.

## Comments