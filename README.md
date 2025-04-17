Claro! Aqui está um README que combina bem com o que você descreveu:

---

# Simple Rest API

Uma API RESTful simples construída com **Node.js**, **Express** e **TypeScript**, estruturada seguindo os princípios da **Clean Architecture**.

Este projeto implementa um CRUD completo para gerenciamento de **tasks**, com suporte a diferentes status. 

## ✨ Funcionalidades

- Criar, listar, atualizar e deletar tasks.
- Status disponíveis: `PENDING`, `WORKING`, `DONE`, `CANCELLED`.
- Suporte a múltiplos repositórios:
  - Banco de dados em memória (para testes)
  - Banco de dados MySQL (produção)
- Arquitetura baseada em camadas:
  - Entities
  - Use Cases (Services)
  - Repositories
  - Controllers
- Testes unitários completos usando **Jest**.

## 🏗️ Stack utilizada

- Node.js
- Express
- TypeScript
- MySQL
- Jest (para testes)

## 📚 Estrutura da entidade `Task`

A entidade `Task` é composta pelos seguintes campos:

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "status": "PENDING | WORKING | DONE | CANCELLED",
  "created_at": "ISODate",
  "updated_at": "ISODate",
  "deleted_at": "ISODate | null"
}
```

## 🧪 Testes

- Todos os **services**, **entities** e **repositories** possuem testes unitários implementados com **Jest**.

## 🚀 Como rodar o projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/mq-gabs/simple-rest-api.git
    cd simple-rest-api
    ```

2. Configure o ambiente (exemplo de `.env`):
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=senha
    DB_DATABASE=tasks_db
    DB_PORT=3306
    ```

3. Use o Docker para executar:
    ```bash
    docker-compose up
    ```

## 🎯 Endpoints principais

- `POST /tasks` — Criar uma nova task
- `GET /tasks` — Listar todas as tasks
- `GET /tasks/:id` — Buscar task por ID
- `PUT /tasks/:id` — Atualizar uma task
- `DELETE /tasks/:id` — Remover uma task (soft delete)

