# servidor-prueba-front
Servidor para probar front-end.

El servidor require tener instalado nodejs y mongodb.

##### Iniciar MongoDB
```console
mongod
```
##### Instalar dependencias
```console
npm i
```

##### Iniciar Servidor
```console
npm start
```
Luego de este paso la api estara disponible en 127.0.0.1:3003/.

##### Rutas
1. clientes: GET, PUT, POST y DELETE. recibe un objeto cliente que debe contener obligatoriamente las propiedades user y pass.
2. login: POST. Recibe un objeto cliente con las propiedades user y pass y devuelve un token JWT.
3. auto*: GET y POST: Recibe un objeto auto para cargar.
4. turnos*: GET y POST: Recibe un objeto turno.

*Rutas autenticadas, enviar el header token con el token devuelto en login.

