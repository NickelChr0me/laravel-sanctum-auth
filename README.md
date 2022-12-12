<p align="center">
    <a href="https://laravel.com" target="_blank">
        <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" width="110" alt="VueJs Logo">
    </a>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/OK-back--end-orange">
    <img src="https://img.shields.io/badge/PAS%20OK-front--end-success">
</p>

Pour réaliser cette API j'ai suivi [ce tuto](https://www.positronx.io/build-secure-php-rest-api-in-laravel-with-sanctum-auth/)

## Installation

##### Base de donnée : SQLITE

Dans le terminal à l'emplacement souhaité
```shell=
git clone git@github.com:NickelChr0me/laravel-sanctum-auth.git
cd laravel-sanctum-auth/
npm install
composer install
cp .env.example .env
cd database/
touch db.sqlite
pwd
cd ../
php artisan key:generate
```

Dans le fichier `.env`
```
- Copié le chemin obtenu avec la commande pwd
- Le coller en valeur de DB_DATABASE`
- Assurée vous d'ajouter à la fin du chemin, le nom du fichier sqlite ../database/db.sqlite
- Indiquer sqlite en valeur de DB_CONNECTION
```

Faite les migrations avec `--seed` pour hydrater les tables et lancer le server
```shell=
php artisan migrate --seed
php artisan serve
```

## Documentation API

Utiliser un client API comme [Postman](https://www.postman.com/)
__Conseil:__ _Utiliser le client en local pour éviter des erreurs liées à la connexion locale [Downloads](https://www.postman.com/downloads/)_

### Routes API

##### POST
```
/api/register | [body => {name, email, password, confirm_password : String}]
/api/login    | [body => {email, password : String}]
/api/blogs    | [body => {title, description : String}]
```

:rotating_light: Récupérer le token reçu avec la route `/api/login` et l'indiquer en `Bearer Token` dans `Authorization` des requêtes ayant besoin d'une authentification par token

##### GET
```
/api/blogs/{id}  | ---
/api/blogs       | ---
```

##### PUT
```
/api/blogs/{id}  | [params => {title, description : String}]
```

##### DELETE
```
/api/blogs/{id}  | ---
```