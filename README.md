# Users

Essa será uma aplicação de listagem e cadastro de usuários. Para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser um admin.

## Projeto Desafio

[Desafio proposto](https://www.notion.so/Desafio-01-Introdu-o-ao-SOLID-3b9be286fac0482ca3b275473ddd2d72#b309640a3f3b410e9a80c467af90e4b5)

### Requisitos

- Cadastrar um novo *usuário*
  - Não é possível cadastrar um novo usuário com um email já utilizado
  - Usuário por padrão não tem poderes admin
  - `name` e `email` são as propriedades necessárias
- Transformar um usuário cadastrado em *admin*;
- Listar um usuário pelo ID;
- Listar todos os usuários, apenas se o usuário solicitante for admin
  - o user_id deve ser informado no header da requisição
  
### Rotas de aplicação

- [x] POST `/users`
- [x] PATCH `/users/:user_id/admin`
- [x] GET `/users/:user_id`
- [x] GET `/users/`
