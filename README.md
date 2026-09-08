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
* **Cadastrar veículo:** Adiciona novos veiculos para a tabela de veiculos
* **Editar veículo:** altera algum atributo de um veiculo (limitado a 1 por vez)
* **Remover veículo:** Deleta um veiculo da tabela
* **Listar todos os veículos:** Busca todos os veiculos
* **Buscar veículo específico:** Busca todos os veiculos baseando-se em uma condição

### Gestão de Aluguéis
* **Alugar veículo:** aluga um veiculo e cria um registro do servico na tabela de serviços

---

## Como Executar o Projeto

```bash
# 1. Clonar o repositório
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)

# 2. Entrar na pasta do projeto
cd nome-do-repositorio

# 3. Subir os contêineres do PostgreSQL e pgAdmin (o banco e a tabela são criadas pelo initsql la em docker)
docker-compose up -d

# 4. Instalar as dependências do Node.js
npm install

# 5. Iniciar o servidor da API em modo de desenvolvimento
npm run dev