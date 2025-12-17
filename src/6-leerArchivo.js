/* Modulos nativos */
// fs (fail system), http, path, os

const fs = require('fs')
try {
    const data = fs.readFileSync('./personajes.txt', 'utf-8')
    console.log(data);
    
} catch (error) {
    console.error(`OCurrio un error al leer el archivo de forma asincrona \n ${error}`);
    
}