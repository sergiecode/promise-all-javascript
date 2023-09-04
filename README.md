![Promesas en secuencias](https://raw.githubusercontent.com/sergiecode/promise-all-javascript/master/promise-all-javascript1.jpg)

![Promesas en secuencias 2](https://raw.githubusercontent.com/sergiecode/promise-all-javascript/master/promise-all-javascript2.jpg)

![Promesas en secuencias 3](https://raw.githubusercontent.com/sergiecode/promise-all-javascript/master/promise-all-javascript3.jpg)

# Tutorial para hacer código secuencial asíncrono con Promesas

Este tutorial te guiará a través de un ejemplo práctico de cómo trabajar con Promesas en JavaScript para manejar operaciones asíncronas de manera secuencial. Aprenderás a crear Promesas, encadenarlas y manejar errores de forma efectiva.

## Introducción

El código proporcionado es un ejemplo de cómo utilizar Promesas para manejar operaciones asíncronas de manera secuencial. En este caso, tenemos tres Promesas (`promesa1`, `promesa2`, y `promesa3`) que se resuelven o rechazan después de un período de tiempo de 2 segundos simulando operaciones asíncronas.

## Código de ejemplo

```
const promesa1 = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        resolver('Promesa 1 resuelta con éxito');
    }, 2000);
});

const promesa2 = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        rechazar('Error en la promesa 2');
    }, 2000);
});

const promesa3 = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        resolver('Promesa 3 resuelta con éxito');
    }, 2000);
});

Promise.all([promesa1, promesa2, promesa3])
    .then(resultado => console.log('Éxito', resultado))
    .catch(error => console.error('Falló', error));
```

En este código, creamos tres Promesas que se resuelven o rechazan después de 2 segundos utilizando `setTimeout`. Luego, utilizamos `Promise.all` para ejecutar estas Promesas en secuencia y manejar el resultado o el error resultante.

## Explicación del código

1.  Creamos tres Promesas (`promesa1`, `promesa2`, y `promesa3`) que simulamos con `setTimeout` para resolver o rechazar después de 2 segundos. `promesa1` y `promesa3` se resuelven con éxito, mientras que `promesa2` se rechaza con un error.
    
2.  Utilizamos `Promise.all` para ejecutar todas las Promesas en paralelo y esperar a que todas se resuelvan o se rechacen.
    
3.  El método `then` se ejecuta si todas las Promesas se resuelven con éxito. En este caso, imprimimos "Éxito" y mostramos el resultado en la consola.
    
4.  El método `catch` se ejecuta si al menos una de las Promesas se rechaza. Aquí, imprimimos "Falló" y mostramos el error en la consola.
