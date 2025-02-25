```markdown
# Nest.js Docker Application

Este é um projeto básico utilizando o **NestJS** para criar uma API e **Docker** para containerização da aplicação. O projeto é configurado para rodar no Docker e expor a API na porta configurada.

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Docker](https://www.docker.com/) (para containerizar a aplicação)

## Configuração do Projeto

### 1. Clonando o repositório

Primeiro, clone este repositório para sua máquina:

```bash
git clone https://seu-repositorio.git
cd nome-do-repositorio
```

### 2. Instalar as dependências

Dentro da pasta do projeto, instale as dependências com o npm:

```bash
npm install
```

Isso irá instalar as dependências do Nest.js: `@nestjs/core`, `@nestjs/common`, `@nestjs/platform-express`.

### 3. Variáveis de ambiente

Certifique-se de que as variáveis de ambiente necessárias estejam configuradas corretamente no arquivo `.env`. Um exemplo de configuração de banco de dados no `.env`:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```

Adapte essas variáveis conforme necessário.

## Rodando a aplicação

### 1. Rodando Localmente (Sem Docker)

Se você preferir rodar a aplicação localmente sem o Docker, use o comando:

```bash
npm run start:dev
```

Isso vai iniciar o servidor de desenvolvimento na porta 3000 (por padrão) e você poderá acessar a API em `http://localhost:3000`.

### 2. Rodando a Aplicação com Docker

Para rodar a aplicação em um container Docker, siga as etapas abaixo.

#### Passo 1: Criar a imagem Docker

Primeiro, crie a imagem Docker com o seguinte comando:

```bash
docker build -t docker-nest-app .
```

#### Passo 2: Rodar o Container

Agora, execute o container utilizando a imagem gerada:

```bash
docker run -p 3000:3000 docker-nest-app
```

Isso fará com que a aplicação fique disponível na porta 3000 da sua máquina local.

Com isso, a aplicação ficará disponível em `http://localhost:3000`.

### 3. Testar a API

Uma vez que o servidor estiver rodando, você pode testar a API acessando:


```bash
curl http://localhost:3000
```

Ou acessar diretamente pelo navegador.

## Estrutura do Projeto

A estrutura do projeto é simples:

```
├── src/
│   ├── app.controller.ts        # Controlador principal
│   ├── app.module.ts            # Módulo principal
│   ├── users/                   # Diretório dos usuários
│   │   ├── users.controller.ts  # Controlador para manipulação dos usuários
│   │   ├── users.service.ts     # Lógica de negócios dos usuários
├── Dockerfile                   # Arquivo para construir a imagem Docker
├── .dockerignore                # Arquivo para ignorar arquivos no Docker
├── package.json                 # Gerenciador de dependências do Node.js
├── tsconfig.json                # Configuração do TypeScript
└── .env                         # Variáveis de ambiente (se necessário)
```

## Como Contribuir

Sinta-se à vontade para contribuir com este projeto! Aqui estão algumas formas de contribuição:

1. **Relatar Bugs**: Abra uma *issue* explicando o problema encontrado.
2. **Solicitar Funcionalidades**: Abra uma *issue* com uma sugestão de funcionalidade.
3. **Contribuir com Código**: Faça um fork, crie sua branch e envie um *pull request* com suas melhorias ou correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```

### Como utilizar este `README.md`:

1. **Clone o repositório**: Se ainda não clonou, siga as instruções para fazer isso.
2. **Configuração do `.env`**: Verifique e adicione as variáveis de ambiente necessárias, como a URL do banco de dados, no arquivo `.env`.
3. **Rodando com Docker**: Siga as instruções de como construir e rodar o container.
4. **Testando**: Acesse os endpoints e verifique se tudo está funcionando como esperado.