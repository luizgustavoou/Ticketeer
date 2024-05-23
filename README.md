### Dicas
- Documente
- Mostre a sua linha de reciocínio
- Trabalhe bem o seu README.md
### Como você deverá desenvolver?
1. Faça o fork deste projeto
2. Realize as implementações de acordo com cada um dos níveis
3. Faça pequenos commits
4. Depois de sentir que fez o seu máximo, faça um PR para o repositório original.
**OBSERVAÇÃO** : Faça até o nível que se sentir confortável.
### Prazo de entrega
Quanto mais cedo você enviar, mais tempo teremos para revisar seu teste com atenção. Sabemos que a rotina é agitada, por isso, faça no seu ritmo. Não desista! Envie o que conseguir.
##  O Problema
O stakeholder da Comigotech solicitou uma nova funcionalidade para o gerenciamento de tickets.
Diariamente, nossa equipe precisa lidar com um grande volume de tickets, e o processo manual estava deixando todos sobrecarregados!
Os tickets são registros digitais de solicitações, processos e problemas a serem resolvidos. Para a Comigotech, é essencial integrar essas informações no fluxo de trabalho para atender nossos clientes de forma eficiente.
## Back-end
### Nível 1 - Validação
Implemente uma API utilizando ExpressJS que receba dados de um ticket.
Se algum campo não estiver preenchido corretamente, deve-se retornar uma mensagem para o usuário mostrando qual o problema foi encontrado em qual campo.
Se todos os dados estiverem validados. Apenas retorne todos os dados em um formato JSON.
### Nível 2 - Persistência
Utilize o banco de dados PostgreSQL e o ORM prisma.
Crie a estrutura para o armazenamento dos tickets e colaboradores. (Onde os colaboradores estarão vinculados aos tickets que são criados, editados e deletados)
Caso os dados estejam válidos, cadastre-os.
Inclua também rotas para as outras operações:
- Edição;
- Exclusão;
- Consulta;
### Nível 3 - Testes
Crie testes unitários, utilizando Jest ou Vitest, para cada operação. Para cada nova implementação a seguir, também deve-se criar os testes.
Refatore o endpoint de autenticação para que sempre se gere JWTs se login e senha estiverem cadastrados no Banco de Dados.
### Nível 4 - Autenticação
Inclua um sistema de autenticação com JWT em todas as rotas.
### Nível 5 - Gerenciamento de permissões
Agora, crie um sistema de gerenciamento de permissões.
Crie um novo cadastro de permissões. Esse cadastro deve armazenar: `login` e `password`.
Os cargos são: `Admin` e `Atendente` onde o Admin será permissão para excluir os tickets.
### Nível 6 - Infra
Crie um `Dockerfile` para sua API.
Crie um `docker-compose.yaml` para iniciar o seu projeto.
Documente tudo o que foi feito até aqui:
- Como preparar o ambiente;
- Como instalar as dependência;
- Como rodar o projeto;
### Nível 7 - Cloud
Crie uma pipeline de deploy da aplicação em alguma estrutura de Cloud. (AWS ou Google)
## Front-end
### Nível 1 - Cadastro
Crie a interface para cadastro dos tickets.
É importante que sua interface previna o cadastro de campos vazios, ou que não estejam nas regras definidas anteriormente.
### Nível 2 - Conectando na API
Conecte a seu Front-end a API que foi criada, e faça o cadastro de um ticket refletir na sua API.
### Nível 3 - Listando
Agora faça um sistema de listagens de tickets.
Além disso, coloque opções de editar e excluir (de acordo com o cargo do usuário).
Todos os dados devem vir da API.
### Nível 4 - Autenticação
Implemente agora o sistema de login e senha para o usuário poder acessar apenas as suas permissões autenticadas.
Caso o token expire, redirecione o usuário para a página de login.
### Nível 5 - Testes
Crie testes para sua aplicação Front-end.

### Figma
Link: https://www.figma.com/design/lxHF87g6eZnnvdCwZal4lA/Teste---Full-Stack?node-id=0-1&t=MWPKderBR0ZJrG25-0
