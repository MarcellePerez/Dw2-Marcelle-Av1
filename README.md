# API AV1 - Node + Express

Projeto simples para a AV1: API em Node + Express com dados em memória.

Como executar:

1. Instalar dependências:

```bash
npm install
```

2. Rodar o servidor:

```bash
npm run dev
```

Endpoints:

- GET /tarefas — retorna a lista de tarefas (status 200).
- POST /tarefas — cria nova tarefa. Corpo JSON esperado:

- GET /tasks or /tarefas — retorna a lista de tarefas (status 200).
- POST /tasks or /tarefas — cria nova tarefa. Corpo JSON esperado:

```json
{ "titulo": "Texto da tarefa", "concluida": false }
```

Validações:

- `titulo` é obrigatório. Se ausente ou vazio, a API responde com `400` e um JSON de erro.

Inicie o servidor com:

```bash
npm run dev
```

Arquivos importantes:

- [package.json](package.json)
- [src/server.js](src/server.js)
- [src/dados.js](src/dados.js)

Boa sorte na AV1! Se quiser, eu executo os comandos de instalação e testo o servidor localmente (ou posso gerar um .gitignore e instruções para o GitHub).