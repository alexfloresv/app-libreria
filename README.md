<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Libreria Login (WIP)

Esta libreria contiene código para la funcionalidad "login",
desarrollada con Nest.js.


## Conceptos

- Proyecto: La aplicación en sí, a la cual se va agregar esta librería
- Librería: El código que contiene la funcionalidad de login

Dentro del proyecto Nest, esta librería se instala en la carperta `libs/login`
y se registra bajo el alias `@login`, de tal modo que el proyecto se puede
importar los módulos, por ejemplo:

```ts
import {LoginModule} from "@login/login"

@Module({
  imports: [LoginModule],
})
export class AppModule {}
```

Esta librería depende de varias otras librerías de NPM,
y de un esquema Prisma en la raíz. Esto se explica más adelante.



## Instalación


### Crear librería

Dentro del proyecto ejecutar:

```bash
nest g library login
```

Al ejecutar este comando se te preguntará qué alias utilizar para
la librería. Ingresa `@login`:

```bash
? What prefix would you like to use for the library (default: @app) @login
```

Esto creará la carpeta `libs/login`, donde descargaremos el código de este
repositorio.

### Clonar repositorio

Para descargar el código de la librería ejecuta el comando:

```bash
npx degit --force alexfloresv/login libs/login/
```

Este comando descargará el código de la librería y lo colocará en la carpeta
`libs/login`.


## Configuración

### Dependencias de npm

Esta libreria depende de varios paquetes de npm.
El proyecto raíz debería tener al menos los siguientes paquetes:

```json
{
  "dependencies": {
    "@nestjs-modules/mailer": "^2.0.2",
    "@nestjs/common": "^10.0.0",
    "@nestjs/config": "^3.2.3",
    "@nestjs/core": "^10.0.0",
    "@nestjs/event-emitter": "^2.0.4",
    "@nestjs/jwt": "^10.2.0",
    "@nestjs/mapped-types": "*",
    "@nestjs/passport": "^10.0.3",
    "@nestjs/platform-express": "^10.0.0",
    "@nestjs/swagger": "^7.4.0",
    "@prisma/client": "^5.20.0",
    "bcrypt": "5.1.1",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.1",
    "cookie-parser": "^1.4.6",
    "ejs": "^3.1.10",
    "express-session": "^1.18.0",
    "generate-password": "^1.7.1",
    "passport": "^0.7.0",
    "passport-google-oauth20": "^2.0.0",
    "passport-jwt": "^4.0.1",
    "reflect-metadata": "^0.2.0",
    "rxjs": "^7.8.1",
    "uuid": "^10.0.0"
  },
  "devDependencies": {
    "@commitlint/cli": "^19.3.0",
    "@commitlint/config-conventional": "^19.2.2",
    "@nestjs/cli": "^10.0.0",
    "@nestjs/schematics": "^10.0.0",
    "@nestjs/testing": "^10.0.0",
    "@types/bcrypt": "^5.0.2",
    "@types/cookie-parser": "^1.4.7",
    "@types/express": "^4.17.17",
    "@types/express-session": "^1.18.0",
    "@types/jest": "^29.5.2",
    "@types/node": "^20.3.1",
    "@types/passport-jwt": "^4.0.1",
    "@types/supertest": "^6.0.0",
    "@types/uuid": "^10.0.0",
    "@typescript-eslint/eslint-plugin": "^8.0.0",
    "@typescript-eslint/parser": "^8.0.0",
    "eslint": "^8.42.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.0.0",
    "husky": "^8.0.0",
    "jest": "^29.5.0",
    "lint-staged": "^15.2.8",
    "prettier": "^3.3.3",
    "prisma": "^5.20.0",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.1.0",
    "ts-loader": "^9.4.3",
    "ts-node": "^10.9.1",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.1.3"
  },
}
```

### Base de datos

Esta librería depende de Prisma ORM y PostgreSQL.

En el proyecto raiz inicializa Prisma con el comando:

```bash
npx prisma init
```

Esto creará el archivo `prisma/schema.prisma`. En este archivo se coloca
el contenido del archivo `schemaLogin.txt` de este repositorio.

El proyecto raiz debe tener un archivo `.env` con el siguiente
contenido:

```.env
NODE_ENV="development"
PORT=3000

# Reemplaza las credenciales según tu Postgres local
DATABASE_URL="postgresql://admin:admin@localhost:5432/login?schema=public"

JWT_SECRET='G4t17o' # Cambiar esto a un secreto más seguro
JWT_EXPIRES_IN='1h' # Cambiar esto a un tiempo de vencimiento más seguro
JWT_REFRESH_SECRET='R3fr35h' # Cambiar esto a un secreto de refresco más seguro
JWT_REFRESH_EXPIRES_IN='7d' # Cambiar esto a un tiempo de vencimiento más seguro
COOKIE_EXPIRES_IN=3600000 # Camniar esto a un tiempo de vencimiento de la cookie en milisegundos 1h
COOKIE_REFRESH_EXPIRES_IN=604800000 # Camniar esto a un tiempo de vencimiento de la cookie en milisegundos 7d
```

Una vez copiado el schema ejecuta:

```bash
npx prisma migrate dev
```

Con esto ya esta configurada la librería.


## Uso

Para usar la librería importa `LoginModule` y montalo
en el `AppModule` del proyecto raiz.

```ts
import {LoginModule} from "@login/login"

@Module({
  imports: [LoginModule],
})
export class AppModule {}
```

Luego inicia Nest normalmente con `npm run start:dev`


## Endpoints

Esta librería expone los siguientes endpoints:

- TODO: Documentar endpoints




