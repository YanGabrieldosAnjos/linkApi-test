# LinkApi TEST
- Esse projeto consiste no processo seletivo da linkApi

# Pré-requisitos
-  contas no pipedrive, bling e mongoDB Atlas
-  npm 6.12.x
-  node 12.3.x

# Instalação
Instalar node e npm
# Como rodar
npm i (para baixar os modules)
npm start (inicia o servidor)

# Endpoints

POST /api/pipedrive/dealsOnBling: Seleciona oportudinades com status won e insere como pedido na bling, e salva no banco com valor total e data

GET /api/pipedrive/dealsOnBling: Retorna oportunidades que foram salvas no banco
