# Levantamento inicial de requisitos para o **PortfolioX**:  

## 🎯 **Objetivo da Aplicação**  
Gerenciar investimentos de forma eficiente, permitindo acompanhamento de carteira, recebimento de dividendos e análise de performance, com foco em longo prazo.  

---

## 🛠 **Requisitos Funcionais**  

### 📌 **Cadastro e Gestão de Ativos**  
- Cadastro de ativos (ações, FIIs, ETFs, renda fixa, etc.).  
- Importação automática de cotações via API (ex: Alpha Vantage, B3, Yahoo Finance).  
- Atualização de preço médio e posição consolidada.  

### 💰 **Acompanhamento de Carteira**  
- Exibição do portfólio atual, com percentual por ativo e classe de investimento.  
- Cálculo da rentabilidade histórica e no período selecionado.  
- Gráficos interativos de alocação de ativos e evolução do patrimônio.  

### 📊 **Dividendos e Proventos**  
- Registro e acompanhamento de dividendos recebidos.  
- Projeção de dividendos futuros com base no histórico.  
- Opção para reinvestimento automático no cálculo do patrimônio.  

### 📑 **Relatórios e Estatísticas**  
- Histórico de compras, vendas e aportes.  
- Rentabilidade por ativo e consolidada.  
- Comparação do desempenho com benchmarks (ex: CDI, Ibovespa).  

### 🔐 **Autenticação e Segurança**  
- Cadastro e login de usuários (Django Auth ou OAuth).  
- Camada de segurança para dados sensíveis.  

---

## ⚙️ **Requisitos Não Funcionais**  
- **Frontend:** Next.js 14 (React, Tailwind, Charts.js/Recharts para gráficos).  
- **Backend:** Django 5 (Django REST Framework, PostgreSQL, Celery para tarefas assíncronas).  
- **Infraestrutura:** Docker, Deploy na AWS/Vercel.  
- **Desempenho:** Atualização de cotações e proventos assíncrona.  

