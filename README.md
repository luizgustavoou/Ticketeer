# Ticketeer
## :memo: About the Project
The Ticketeer project is a comprehensive ticket management system developed for ComigoTech. It features a backend built with ExpressJS and a PostgreSQL database using Prisma as the ORM. The frontend is designed to facilitate the registration and management of tickets through an intuitive interface. This system is designed to streamline the process of ticket handling, making it efficient and user-friendly for both administrators and attendants.

## Web Layout
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/ab3deeea-8b3c-421d-b237-a18acc97f171)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/996f3841-a93c-4a7c-b92e-8529181e6bd8)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/88606092-ed19-4583-baa4-996135473634)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/2f473e05-ff86-435d-b78b-eda2d09f2357)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/cf6fb783-f548-49e1-a32f-806243dd9816)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/42f442d2-2d16-43f5-8abd-5d85d3ca2c57)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/2ad2ebb4-cadc-42bc-9721-7edc8d5e9777)
![image](https://github.com/luizgustavoou/avaliacao-candidatos/assets/89609312/e2de59a7-e936-4e6c-82d7-4dfaec543184)

## Features
### Backend

- **Level 1 - Validation**: API that receives ticket data and validates the fields. Returns error messages if there are invalid fields or returns the data in JSON format if all fields are valid.
- **Level 2 - Persistence**: Storage of tickets and employees in a PostgreSQL database. Includes routes for creating, editing, deleting, and querying tickets.
- **Level 3 - Testing**: Unit tests for each operation using Jest or Vitest.
- **Level 4 - Authentication**: Authentication system with JWT for all routes.
- **Level 5 - Permission Management**: Permission management system for different roles (Admin and Attendant). Admin has permission to delete tickets.
- **Level 6 - Infrastructure**: Dockerfile and docker-compose.yaml for the API. Documentation on how to set up the environment, install dependencies, and run the project.
- **Level 7 - Cloud**: Pipeline for deploying the application in a Cloud infrastructure (AWS or Google).

### Frontend

- **Level 1 - Registration**: Interface for ticket registration with field validation.
- **Level 2 - API Integration**: Integration of the frontend with the API for ticket registration.
- **Level 3 - Listing**: Ticket listing system with options to edit and delete, depending on the user's role.
- **Level 4 - Authentication**: Login system for access control and authenticated permissions.
- **Level 5 - Testing**: Tests for the frontend application.

## :wrench: Technologies Used
### Backend
* Express
* Class Validator
* Class Transformer
* JWT Decode
* Prisma
* PostgreSQL
* Bcrypt
* JWT-Service
* Moment
* Reflect-Metadata

### Frontend
* Vue
* Pinia
* Tailwind CSS
* Shadcn-vue

### Infrastructure
* Docker

## :rocket: Running the Project
Prerequisites: npm / yarn and Docker installed

```bash
# clone the repository
git clone https://github.com/luizgustavoou/avaliacao-candidatos.git

# navigate to the project directory
cd avaliacao-candidatos

# install backend dependencies
cd backend/

npm i

cd ../

# install frontend dependencies
cd frontend/

npm i

cd ../

# run the application
docker compose up -d
```

## :soon: Future Implementations

## :dart: Project Status
Completed

## Author
<a href="https://github.com/luizgustavoou">Luiz Gustavo de Oliveira Umbelino</a><br>
