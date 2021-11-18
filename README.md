# seriados-nup2-banco-de-dados2-uncisal

SERIADOS

## Configurações

#### API

1. Faça um clone da aplicação em sua máquina
   - git clone https://github.com/acacioscosta/seriados_nup2_banco_dados_2_uncisal.git

2. Crie um arquivo config.json e copie os dados de config.sample.json;
   - Se estiver no Linux, use o comando `cp config.sample.json config.json`
3. Arquivo config.json contém as configurações da aplicação, como conexão com banco de dados e porta para o servidor (API);
4. Executando aplicação
   - Execute `yarn install` | `npm install` na raiz do projeto para instalar os pacotes necessários.
   - Execute `yarn dev` | `npm run dev`
5. Endpoints da API
   - `GET /` => Mensagem informativa da API
   - `POST /insert` => Insere uma nova séria
   - `PATCH /update/:id` => Atualiza uma série
   - `GET /find` => Retorna todas as séries
   - `GET /find/:id` => Retorna a série com o ID especificado na rota
   - `DELETE /delete/:id` => Remove uma série
   
#### FRONT-END

1. Caso queira executar a aplicação em um navegador web, basta inserir o caminho do arquivo index.html no navegador
   - `~/local_pasta_do_projeto/index.html`
2. Por padrão, as requisições estão sendo realizadas para o endereço `http://localhost:3002/`
   - Caso precise alterar o endereço, vá próximo ao final do arquivo index.html e terá uma tag `<script>` contendo uma instância do VUEJS;
   - Nele, procure por data: {} e encontrará o atributo `baseApiUrl`;
   - Altere esse atributo `baseApiUrl` inserindo o novo endereço da API;