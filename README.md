# Feedget

<!-- Imagem divulgação do projeto -->
<img src="github/feedget-capa0.75x.png" alt="Capa do Projeto Feedget">

---

* [Descrição](#Descrição)
* [Funcionalidades do Projeto](#Funcionalidades-do-Projeto)
* [Link Para Testar Projeto](#Link-Para-Testar-Projeto)
* [Principais Tecnologias Utilizadas](#Principais-Tecnologias-Utilizadas)
* [Clonar e Rodar Localmente](#Clonar-e-Rodar-Localmente)
  * [Requisitos](#Requisitos)
  * [Clone do projeto](#Clone-do-projeto)
  * [Configuração lado cliente](#Configuração-lado-cliente)
  * [Configuração lado servidor](#Configuração-lado-servidor)
* [Sobre Projeto e Autoria](#Sobre-Projeto-e-Autoria)

## Descrição
Feedget é a idealização de um widget de feedbacks para outros projetos. Ou seja, com o feedget instalado em um site, o usuário pode enviar um feedback de usabilidade para o desenvolvedor.

Nele, o usuário irá escrever seu feedback dentro das categorias `BUG`, `IDEIA` ou `OUTRO`, podendo capturar uma screenshot do momento e envia-la junto a descrição.

<!-- Gif do processo de envio de feedback -->
### Navegação com mouse
<img src="github/feedget01.gif" alt="Exemplo de uso" width="80%">

### Acessibilidade disponível sem uso de mouse
<img src="github/feedget02.gif" alt="Exemplo de uso com acessibilidade" width="80%">

<br>

Do outro lado, o desenvolvedor irá receber um e-mail com a categoria, descrição e a screenshot se tiver sido tirada pelo usuário.

<!-- Gif de recebimento por email. -->

### Exemplo de recebimento do feedback via email
<img src="github/feedget03.gif" alt="Exemplo de recebimento de email" width="80%">


---

<br>

## Funcionalidades do Projeto
* [x] Selecionar categoria.
* [x] Capturar screenshot.
* [x] Enviar feedbacks com ou sem screenshot.
* [x] Cadastro dos feedback em banco de dados.
* [x] Recebimento dos feedbacks por email (o email para recebimento ainda é fixo e exclusivo de testes).
* [ ] Integração com outros projetos.

---

## Link Para Testar Projeto

<a href="https://nlw-return-impulse-aoi04p062-otiagosantos.vercel.app/" target="_blank">Teste o Feedget Clicando Aqui!!</a>

---

## Principais Tecnologias Utilizadas
### Backend (server)
* [Node.JS](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/)
* [Typescript](https://www.typescriptlang.org/)
* [Prisma](https://www.prisma.io/)

### Frontend (Web)
* [ReactJS](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Tailwind](https://tailwindcss.com/)
* [Nodemailer](https://nodemailer.com/about/)
* [Jest](https://jestjs.io/)

---

## Clonar e Rodar Localmente
### Requisitos
* NodeJS
* SQLite ou outro banco de dados preferencialmente relacional.

### Clone do projeto

```bash
$ git clone https://github.com/otiagosantos/feedget.git
```

**Para que o projeto seja funcional e possa fazer cadastros e envio dos feedbacks por email, será necessário configurar o servidor e aplicação web separadamente.**


### Configuração lado cliente

No seu terminal ou prompt de comando execute os comandos:

```bash
$ cd nlw-return/web

$ npm install
```

Ainda dentro da pasta `web` crie um arquivo com o seguinte nome `.env.local` e o seguinte conteúdo:

```js
VITE_API_URL="http://localhost:3333"
```

E rode no terminal ou prompt de comando:

```bash
$ npm run dev
```

Tendo o segunte retorno...

```bash
 vite v2.9.8 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 338ms.
```

Agora abra no seu navegador o link [http://localhost:3000](http://localhost:3000) para acessar a versão web do Feedget.

### Configuração lado servidor

No seu terminal ou prompt de comando execute os comandos:

```bash
$ cd nlw-return/server

$ npm install
```

Através de um editor de código de sua preferência, siga os seguntes passos:

Renomeie o arquivo `.env.example` para `.env` e insira as credenciais do provedor de email que enviará os emails. Você pode usar o [Mailtrap](https://mailtrap.io/) para envio e recebimento de emails de teste.

```js
# Database
DATABASE_URL="file:./dev.db"

# Nodemmailer Credentials
NODEMAILER_USER="mailtrap_user"
NODEMAILER_PASS="mailtrap_password"
```

Substitua `mailtrap_user` e `mailtrap_password` pelo usuário e senha fornecido pelo [Mailtrap](https://mailtrap.io/)

Exemplo: 
```js
# Database
DATABASE_URL="file:./dev.db"

# Nodemmailer Credentials
NODEMAILER_USER="b3e4ff2134cc32"
NODEMAILER_PASS="4a31ee34gf9483"
```

Em seguda execute os seguntes comandos no terminal ou prompt de comando para gerar o banco de dados conforme as migrations:

```bash
$ npx prisma migrate dev
```

Você deve receber um retorno nas linhas seguntes, e deve conter uma mensagem em destaque parecida com essa:

```bash
Your database is now in sync with your schema.
```

Agora que tudo está configurado, ainda dentro do diretório `server` rode no terminal ou prompt:

```bash
$ npm run dev
```

Se ocorreu tudo certo, reveberá um retorno semelhante a esse:

```bash
> server@1.0.0 dev
> ts-node-dev src/server.ts

[INFO] 17:52:20 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.6.4)
Server On
```

---

## Sobre o Projeto e Autoria
### Ideia
O projeto foi desenvolvido em acompanhamento da 8ª edição da NLW a qual foi produzida pela [Rocketseat](https://www.rocketseat.com.br/).

### Deploy
O deploy da versão **web** foi feita na plataforma [Vercel](https://vercel.com/). E a versão **servidor**  no [Railway App](https://railway.app/).

### Detalhes Técnicos
O projeto conta com os padrões de REST API e alguns conceitos de [SOLID](https://pt.wikipedia.org/wiki/SOLID).

Foram utilizados testes unitários com [Jest](https://jestjs.io/) para otimizar a qualidade e tempo de desenvolvimento da api / server. E a programação dos testes estão presentes no repositório.

Você pode testa-los após configurar o servidor a partir de um [clone do projeto](#Clone-do-projeto) do projeto através do comando `npm run test` no terminal.

### Autoria
O projeto tem pequenas personalização próprias do [autor deste repositório](https://github.com/otiagosantos).
