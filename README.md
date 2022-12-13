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

# Laravel-sanctum-auth
Projet [laravel](https://laravel.com/docs/8.x) / [VueJs](https://vuejs.org/) utilisant [laravel/sanctum](https://laravel.com/docs/8.x/sanctum) pour l'authentification et fourni avec une API de blogs sécurisé par cookie/session qui offrent les avantages de protections [CSRF](https://developer.mozilla.org/fr/docs/Glossary/CSRF) / [XSS](https://developer.mozilla.org/fr/docs/Glossary/Cross-site_scripting)

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

Lancer le server
```shell=
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

##### GET
```
/api/logout      | ---
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