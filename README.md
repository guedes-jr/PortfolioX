
# 🌐 Nome do projeto
<div align="center">
  <img src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Imagem%20do%20projeto&tamanho_fonte=30" alt="Logo do Projeto" width="600"/>
</div>

<p align="center">
  <a href="https://github.com/guedes-jr/PortfolioX">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/guedes-jr/PortfolioX">
  </a>
  <a href="https://github.com/guedes-jr/PortfolioX/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/guedes-jr/PortfolioX">
  </a>
  <a href="https://github.com/guedes-jr/PortfolioX/network">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/guedes-jr/PortfolioX">
  </a>
  <a href="https://github.com/guedes-jr/PortfolioX/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/guedes-jr/PortfolioX">
  </a>
  <a href="https://github.com/guedes-jr/PortfolioX/blob/main/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/github/license/guedes-jr/PortfolioX">
  </a>
</p>

## 📝 Sumário

- [Sobre o Projeto](#%EF%B8%8Fsobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Requisitos](#-requisitos)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

## 🛠️Sobre o Projeto

Sistema de Gerenciamento investimentos de forma eficiente, permitindo acompanhamento de carteira, recebimento de dividendos e análise de performance, com foco em longo prazo.

## 🧰 Tecnologias Utilizadas

- [Django](https://www.djangoproject.com/) - Back-end framework
- [Next.js](https://nextjs.org/) - React framework para front-end
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados

## ✨ Funcionalidades

- Cadastro e gestão de ativos
- Acompanhamento da carteira
- Dividendos e Proventos
- Relatórios e Estatísticas
- Autenticação e segurança

## 📋 Requisitos

- [Python 3](https://www.python.org/downloads/release/python-315/)
- [Node.js 14 ou superior](https://nodejs.org/pt/blog/release/v14.17.3)
- [PostgreSQL](https://www.postgresql.org/)

## 🚀 Instalação

### 📌 **Passo 1: Clonando o Repositório

```bash
git clone https://github.com/guedes-jr/PortfolioX.git
```
... 

### 📌 **Passo 2: Criar o Ambiente Virtual e Instalar Django 5**  
Se ainda não tem o Python instalado, use a versão mais recente (recomendo **Python 3.10+**). Agora, execute:  

```bash
# Criar e ativar ambiente virtual
python3 -m venv venv  
source venv/bin/activate  # No Windows: venv\Scripts\activate

# Instalar Django 5 e outras dependências iniciais
pip install -r requeriments.txt
```

### 📌 **Passo 3: Criar Usuário e o Banco de Dados PostgreSQL**  
```bash
psql -U postgres -h localhost -c "create user portfoliox_user with password 'portfoliox'";
psql -U postgres -h localhost -c "create database portfoliox_db owner portfoliox_user;";
psql -U postgres -d portfoliox_db -h localhost -c "create extension unaccent";
psql -U postgres -d portfoliox_db -h localhost -c "create extension pg_trgm";
```

### 📌 **Passo 4: Criar e Aplicar as Migrações**  
```bash
python backend/manage.py migrate
```

### 📌 **Passo 5: Criar um Superusuário para o Django Admin**  
```bash
python backend/manage.py createsuperuser
```
**User:** user | **Pass:** user@123

### 📌 **Passo 6: Rodar o Servidor para Teste**  
```bash
python backend/manage.py runserver
```
Acesse **http://127.0.0.1:8000/admin/** e faça login com o superusuário.

### 📌 **Passo 7: Instalar os módulos do nodejs**  
```bash
cd frontend/

npm install
```

### 📌 **Passo 8: Iniciar os serviços do FrontEnd**  
```bash
npm run dev
```
Acesse **http://127.0.0.1:300/** e faça login com o superusuário.  

## 📦 Scripts Disponíveis

Na pasta `frontend`, você pode rodar:

- `npm run dev`: Executa a aplicação em modo de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run start`: Inicia o servidor Next.js.

Na pasta `backend`, você pode rodar:

- `python manage.py runserver`: Inicia o servidor Django.

## 📁 Estrutura de Pastas

```plaintext

```
> Comando utilizado para mostrar a estrutura de dados `tree -I 'node_modules' -I '__pycache__' -I 'migrations' -I 'venv'`.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça o push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📧 Contato

👤 **Seu Nome**

- Github: [@guedes-jr](https://github.com/guedes-jr)
- LinkedIn: [João Guedes](https://www.linkedin.com/in/jo%C3%A3o-guedes-36a440135)
- Email: joao.guedes.developer@gmail.com

---

Desenvolvido com profissionalismo por [João Guedes](https://github.com/guedes-jr) 🤖.