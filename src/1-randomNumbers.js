//crear un programa que reciba dos argumentos y genere el numero aleatoria entre esos dos numeros, 
//en caso que no me pasen esos dos argumentos, entonces por defecto usare el 1 al 100


const argumentos = process.argv;

//metodo de array para acceder a los valores desde la posicion 2
const args = argumentos.slice(2)

/* console.log(argumentos); */
console.log(args);

let min = 1;
let max = 100;

//validaciones

if(args.length === 2){
    //pasar los arg a tipo de dato number y que sean enteros
    const minParse = parseInt(args[0]);
    const maxParse = parseInt(args[1]);
    
    //validar que no sea tipo de dato string
    if(isNaN(minParse) && isNaN(maxParse) && minParse < maxParse){
        //guardar las validaciones dentro de las variables que ya habiamos declarado
        min = minParse;
        max = maxParse;
    } else {
        console.log("rango invalido. Usaremos por defecto min=1 y max=100");
        
    }
}
const aleatorio = Math.floor(Math.random() * (max - min + 1)) 
console.log('El numero aleatorio entre $(min) y $(max) es = $(aleatorio). ');
