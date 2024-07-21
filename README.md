# Starsoft Frontend Challenge

Este repositório contém o código para o desafio de frontend da Starsoft. A aplicação é construída utilizando Next.js e Yarn como gerenciador de pacotes. Este guia fornece instruções sobre como configurar, rodar e fazer o deploy do projeto.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Docker](#docker)
- [Testes](#testes)
- [Deploy](#deploy)

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Node.js (versão 18.x ou superior)
- Yarn (versão 1.x ou superior)

## Instalação

1. **Clone o repositório:**

   ```bash
   git https://github.com/Nikaum-js/starsoft-frontend-challenge
   cd starsoft-frontend-challenge
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   ```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

### `yarn dev`

Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

A página será recarregada se você fizer edições.
Você também verá erros de lint no console.

```bash
yarn dev
```

### `yarn build`

Constrói a aplicação para produção na pasta \`.next\`.
A aplicação está pronta para ser implantada!

```bash
yarn build
```

### `yarn start`

Inicia o servidor em modo de produção.
Certifique-se de que você executou \`yarn build\` primeiro.

```bash
yarn start
```

### `yarn lint`

Executa o linter para verificar o código em busca de problemas de formatação e estilo.

```bash
yarn lint
```

## Docker

Também é possível rodar a aplicação utilizando Docker. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

### Passos para rodar com Docker

1. **Construa a imagem Docker:**

   ```bash
   docker-compose up --build
   ```

2. **Acesse a aplicação:**

   Abra [http://localhost:3001](http://localhost:3001) para ver no navegador.

## Testes

O projeto utiliza Cypress para testes end-to-end.

### Executar Cypress em modo interativo

Para abrir a interface do Cypress e executar os testes em modo interativo, utilize o comando:

```bash
yarn cypress open
```

### Executar Cypress em modo headless

Para executar os testes do Cypress em modo headless (linha de comando), utilize o comando:

```bash
yarn cypress run
```

## Deploy

Para fazer o deploy da aplicação, siga as instruções no arquivo [DEPLOY.md](./DEPLOY.md).

### Deploy com Vercel

#### Passos para Deploy

1. **Instale a CLI do Vercel:**
   ```bash
   yarn global add vercel
   ```

2. **Adicione o diretório global do Yarn ao PATH:**
   - Encontre o diretório global do Yarn:
     ```bash
     yarn global bin
     ```
   - Adicione o diretório ao PATH:
     ```bash
     export PATH="\$(yarn global bin):\$PATH"
     ```
   - Recarregue o arquivo de configuração do shell:
     ```bash
     source ~/.zshrc  # Para zsh
     # ou
     source ~/.bashrc  # Para bash
     ```

3. **Faça login no Vercel:**
   ```bash
   vercel login
   ```

4. **Deploy da aplicação:**
   No diretório do seu projeto, execute:
   ```bash
   vercel
   ```

5. **Configuração de Variáveis de Ambiente:**
   - Vá para o painel do Vercel.
   - Selecione o seu projeto.
   - Vá em **Settings** > **Environment Variables** e adicione suas variáveis.
