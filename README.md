# LAB TEST API
- Esse projeto consiste no processo seletivo da laborit

# Pré-requisitos
-  docker
-  npm 6.12.x
-  node 12.3.x

# Instalação
Após o ambiente com o node e o npm instalado, instalar o docker
# Como rodar
npm run postgres:start (para criar uma imagem do banco)
npm run database:create (para criar um banco)
npm i (para baixar os modules)
npm start (inicia o servidor na porta 3000)

# Como rodar testes
npm run postgres:start (para criar uma imagem do banco)
npm run database:create (para criar um banco)
npm test (roda os test cases)