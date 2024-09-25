*crear proyecto basio

nest new app-libreria

*crear libreria 

nest g library login

nest g library cotizaciones

nest g library almacen

*crear carpetas con la logica de crud dentro de la libreria
*se debde de estar en src de la libreria 

*crear:
*en la libreria dentro de src 
nest g resource admin --no-spec
nest g resource prisma --no-spec
nest g resource interfaces --no-spec
nest g resource utils --no-spec
nest g resource event-emitter --no-spec

*crear dentro la estructura de directorios dentro de admin
*C:\Users\ACIDE\Documents\alx\pruebas\app-biblioteca\libs\login\src\admin>nest g resource autih --no-spec

*crear:
autih
auth
modules
permissions
rol
users

*crear dependecias
comprar package.json del proyecto nuevo y de el de chaqchao insertar dependicas estandarisadas y ya configuradas

*del package.json agregar dependias estandarizadas de api-chaqchao
npm i


*si muestra la advertencia de ... // quitar ^ de "bcrypt": "5.1.1",
//
npm warn deprecated npmlog@5.0.1: This package is no longer supported.
npm warn deprecated are-we-there-yet@2.0.0: This package is no longer supported.
npm warn deprecated gauge@3.0.2: This package is no longer supported.
//

*instalar prisma dentro de la libreria
npm install prisma -g
prima init
crt+shp + p = reload

**configuracion del proyecto base de datos**
*crear dependencias de api-chac - json-pack

*configurar .env o crear una nueva de datos
crear .env y copiar los datos de .env.example

**en el caso de chaqchao** pero deberia ser el mismo flujo para otra
*configurar postgres crear base de datos
*instalar postgress

*crear usuario
admin
*crear la base de datos
chaqchao
*crear migraciones de la aplicacion una vez configurado el login
npx prisma migrate dev
*******

