# Avaliação ComigoTech

## :memo: Sobre o Projeto
Comigotech Ticket Management System
Este repositório contém a implementação de um sistema de gerenciamento de tickets solicitado pelo stakeholder da Comigotech. O sistema é composto por um backend desenvolvido em ExpressJS com um banco de dados PostgreSQL utilizando Prisma como ORM, e um frontend desenvolvido para o cadastro e gerenciamento de tickets.

## Layout da Web
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/ab3deeea-8b3c-421d-b237-a18acc97f171)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/996f3841-a93c-4a7c-b92e-8529181e6bd8)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/88606092-ed19-4583-baa4-996135473634)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/2f473e05-ff86-435d-b78b-eda2d09f2357)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/cf6fb783-f548-49e1-a32f-806243dd9816)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/42f442d2-2d16-43f5-8abd-5d85d3ca2c57)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/2ad2ebb4-cadc-42bc-9721-7edc8d5e9777)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/e2de59a7-e936-4e6c-82d7-4dfaec543184)

## Funcionalidades
### Backend

- **Nível 1 - Validação**: API que recebe dados de um ticket e valida os campos. Retorna mensagens de erro se houver campos inválidos ou retorna os dados em formato JSON se todos os dados estiverem válidos.
- **Nível 2 - Persistência**: Armazenamento dos tickets e colaboradores no banco de dados PostgreSQL. Inclui rotas para criação, edição, exclusão e consulta de tickets.
- **Nível 3 - Testes**: Testes unitários para cada operação utilizando Jest ou Vitest.
- **Nível 4 - Autenticação**: Sistema de autenticação com JWT em todas as rotas.
- **Nível 5 - Gerenciamento de permissões**: Sistema de gerenciamento de permissões para diferentes cargos (Admin e Atendente). Admin tem permissão para excluir tickets.
- **Nível 6 - Infra**: Dockerfile e docker-compose.yaml para a API. Documentação sobre como preparar o ambiente, instalar dependências e rodar o projeto.
- **Nível 7 - Cloud**: Pipeline de deploy da aplicação em estrutura de Cloud (AWS ou Google).

### Frontend

- **Nível 1 - Cadastro**: Interface para cadastro de tickets com validação de campos.
- **Nível 2 - Conectando na API**: Integração do frontend com a API para cadastro de tickets.
- **Nível 3 - Listando**: Sistema de listagem de tickets com opções de edição e exclusão, dependendo do cargo do usuário.
- **Nível 4 - Autenticação**: Sistema de login e senha para controle de acesso e permissões autenticadas.
- **Nível 5 - Testes**: Testes para a aplicação frontend.

# :wrench: Tecnologias utilizadas
## Backend
* cxpress
* class validator
* class transformer
* jwt decode
* Prisma
* PostgreSQL
* bcrypt
* jwt-service
* moment
* reflect-metadata

## Frontend
* Vue
* Pinia
* Tailwind CSS
* shadcn-vue

## Infraestrutura
* Docker

## :rocket: Executando o Projeto
Pré-requisitos: npm / yarn e Docker instalados

```bash
# clonar o repositório
git clone https://github.com/luizgustavoou/avaliacao-candidatos.git

# navegar até o diretório do projeto
cd avaliacao-candidatos

# instalar dependências do backend
cd backend/

npm i

cd ../

# instalar dependências do frontend
cd frontend/

npm i

cd ../

# executar a aplicação
docker compose up -d
```

## :soon: Implementações Futuras

## :dart: Status do Projeto
Concluído

## Autor
<a href="https://github.com/luizgustavoou">Luiz Gustavo de Oliveira Umbelino</a><br>
