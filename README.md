# MISO_PRUEBAS Grupo 38

Integrantes:
* Daniel Vivas Suarez d.vivass@uniandes.edu.co
* Mateo Olaya Osorio m.olaya11@uniandes.edu.co

# Dado que el grupo es de dos personas, se ejecutaron 60 casos de prueba.

## Cómo ejecutar los tests

Se utiliza la versión de ghost 4.41.3 y la 4.39 para realizar el VRT según la recomendación para utilizar verisones que no difieran mucho de su interfaz gráfica

Pre-requisitos:
* Instalar y ejecutar la versión 4.41.3 de ghost, para ello se puede ejecutar el siguiente comando mediante docker

```
  docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_4.41 ghost:4.41

  //Esto desplegará en la siguiente dirección la versión de Ghost Admin:

  //Ghost 4.41
  http://localhost:3001/ghost
```

* Instalar la versión 4.39 de ghost, para ello se puede ejecutar el siguiente comando mediante docker
`ghost install 4.39 --local`

```
  docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.39 ghost:4.39

  //Esto desplegará en la siguiente dirección la versión de Ghost Admin:

  //Ghost 4.39
  http://localhost:3002/ghost
```

* Tener una versión LTS de node reciente (preferiblemente v16.15.0) y una versión compatible de npm

* Instalar adb en sus sitema operativo
  
* Ejecutar `npm install` en la carpeta en la que se clonó este repositorio

# Cypress
* Ejecutar el comando `npm run cypress:open` en la raíz del proyecto
* Hacer click en el archivo de pruebas que se desea ejecutar

# Estrategia de pruebas

### Pool de datos a-priori
* Se genero el archivo data.json en el directorio cypress> data. El json fue generado usando la herramienta Mockaroo. Estos datos fueron integrados principalmente en los escenarios de Login Feature.

### Pool de datos (pseudo) aleatorio dinámico
* Se guardaron los datos en la misma función de la feature Create Page y en tiempo de ejecución se escogió de forma aleatoria el dato a presentar en el escenario de prueba. Se creó el dato en un paso, y en uno posterior se reutilizó la informacion.

### Escenario aleatorio
* Se usó la libreria de Faker para seleccionar los datos de los escenarios relacionados con las features de Settings. Esto facilitó crear un gran nivel de datos de prueba para cada una de las ejecuciones, en tanto no fue necesario construir el data pool de manera manual. 


### Relación de las estrategias y los casos de prueba
<img width="501" alt="image" src="https://user-images.githubusercontent.com/98785714/169745799-628bf70a-b1d1-4714-9a62-af018d753ebe.png">



