# API de Veículos - Desafio Include

API REST desenvolvida para o gerenciamento de frota e controle de aluguéis de veículos.

---

## Tecnologias Utilizadas

* Node.js
* PostgreSQL
* pgAdmin
* Docker
* Insomnia
* GitHub

---

## Funcionalidades

### Gestão de Veículos
* **Cadastrar veículo:** Permite inserir novos veículos na base de dados informando marca, modelo, ano, placa, valor da diária e status de disponibilidade.
* **Editar veículo:** Permite atualizar as informações cadastradas de um veículo existente.
* **Remover veículo:** Permite deletar um veículo do sistema.
* **Listar todos os veículos:** Retorna a lista completa de todos os veículos cadastrados.
* **Buscar veículo específico:** Permite consultar os detalhes de um veículo filtrando por ID ou placa.

### Gestão de Aluguéis
* **Alugar veículo:** Permite alterar o status do veículo para "alugado" e registrar os dados da locação (cliente, data de início e data de término).

---

## Como Executar o Projeto

```bash
# 1. Clonar o repositório
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)

# 2. Entrar na pasta do projeto
cd nome-do-repositorio

# 3. Subir os contêineres do PostgreSQL e pgAdmin (o banco e tabelas são criados automaticamente via docker/init.sql)
docker-compose up -d

# 4. Instalar as dependências do Node.js
npm install

# 5. Iniciar o servidor da API em modo de desenvolvimento
npm run dev