
const promesa1 = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        resolver('Promesa 1 resuelta con éxito')
    }, 2000);
})

const promesa2 = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        rechazar('Error en la promesa 2')
    }, 2000);
})

const promesa3 = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        resolver('Promesa 3 resuelta con éxito')
    }, 2000);
})

Promise.all([promesa1, promesa2, promesa3])
    .then(resultado => console.log('Exito', resultado))
    .catch(error => console.error('Falló', error))

