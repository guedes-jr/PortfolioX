# **backend com Django 5**.  

### **1️⃣ Configuração do Ambiente Backend**  

#### 📌 **Passo 1: Criar o Ambiente Virtual e Instalar Django 5**  
Se ainda não tem o Python instalado, use a versão mais recente (recomendo **Python 3.10+**). Agora, execute:  

```bash
# Criar e ativar ambiente virtual
python3 -m venv venv  
source venv/bin/activate  # No Windows: venv\Scripts\activate

# Instalar Django 5 e outras dependências iniciais
pip install django djangorestframework django-cors-headers psycopg2-binary
```

#### 📌 **Passo 2: Criar o Projeto Django**  
Agora, vamos criar o projeto **PortfolioX** e um app principal chamado `investments`:  

```bash
django-admin startproject portfoliox  
cd portfoliox  
django-admin startapp investments
```

#### 📌 **Passo 3: Configurar o `settings.py`**  
Edite o arquivo `portfoliox/settings.py` e adicione:  

```python
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Apps externos
    "rest_framework",
    "corsheaders",

    # App interno
    "investments",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# Configurar o CORS (para comunicação com o Next.js)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Ajustar conforme necessário
]

# Banco de Dados (PostgreSQL)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "portfoliox_db",
        "USER": "portfoliox_user",
        "PASSWORD": "portfoliox",
        "HOST": "localhost",
        "PORT": "5432",
    }
}
```

#### 📌 **Passo 4: Criar Usuário e o Banco de Dados PostgreSQL**  
```bash
psql -U postgres -h localhost -c "create user portfoliox_user with password 'portfoliox'";
psql -U postgres -h localhost -c "create database portfoliox_db owner portfoliox_user;";
psql -U postgres -d portfoliox_db -h localhost -c "create extension unaccent";
psql -U postgres -d portfoliox_db -h localhost -c "create extension pg_trgm";
```

#### 📌 **Passo 5: Criar e Aplicar as Migrações**  
```bash
python manage.py migrate
```

#### 📌 **Passo 6: Criar um Superusuário para o Django Admin**  
```bash
python manage.py createsuperuser
```
**User:** junior | **Pass:** junior@12

#### 📌 **Passo 7: Rodar o Servidor para Teste**  
```bash
python manage.py runserver
```
Acesse **http://127.0.0.1:8000/admin/** e faça login com o superusuário.  

---

Isso configura o ambiente inicial. Podemos seguir para:  
✅ Criar os **modelos** da aplicação (Usuário, Ativos, Transações, Proventos).