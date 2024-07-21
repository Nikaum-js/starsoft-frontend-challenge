# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instale as dependências
RUN yarn install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compile a aplicação Next.js
RUN yarn build

# Verifique se o diretório `.next` foi criado corretamente
RUN ls -la .next

# Exponha a porta na qual a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
