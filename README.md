# legislaAM
- https://www.figma.com/file/2Xt7dXosabljggHhrVo3Ot/Untitled?type=design&node-id=0%3A1&mode=design&t=20a4AfbLwgi0TaJD-1
### Baixe e configure o PostgreSQL
1. Instale o PostgreSQL
```shell
    sudo apt install postgresql
```
2. Crie o banco
```shell
    sudo su postgres
    psql
    CREATE DATABASE legisla;
    ALTER ROLE postgres PASSWORD '123qwe123';
    GRANT ALL PRIVILEGES ON DATABASE legisla TO postgres;
```
    Nesta seção você logou no sistema como usuario postgres que é criado pelo instalador ao baixar e instalar o PostgresSQL, em seguida você cria o banco, altera a senha do usuario no PostgreSQL e dar as permissões ao usuario para acesso ao banco
### Baixe o Python3
1. Instale o python
```shell
    sudo apt install python3
    sudo apt install pip
```
### Clone o repositorio e instale as depêndencias
1. Git clone

```shell
    git clone https://github.com/falcao-do-pix/legislaAM.git
    cd legisla
```

2. Criar um ambiente virtual
```shell
    pip install virtualenv
    python3 -m virtualenv venv
    source venv/bin/activate
```

3. Dependências do projeto
```shell
    pip install -r requirements.txt
```
4. Crie as migrations
```shell
    python3 manage.py makemigrations
    python3 manage.py migrate
```
5. 