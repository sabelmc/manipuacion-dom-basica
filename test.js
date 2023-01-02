/* Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es una variable y para qué sirve?
        Es un espacio de memoria reservado, y sirve para asignar valores y clasificarlos, pueden ser de tipo booleano, de tipo string y de tipo numerico.


    ¿Cuál es la diferencia entre declarar e inicializar una variable?
        Declarar es darle un nombre a la variable y asignarle un tipo pueden ser: var, const, let.
    ¿Cuál es la diferencia entre sumar números y concatenar strings?
        Sumar numeros seria hacer la operacion matematica, mientras que concatenar seria literalmente pegar los caracteres un enseguida del otro
    ¿Cuál operador me permite sumar o concatenar?
        el operador de suma +

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

    Nombre // string
    Apellido // string
    Nombre de usuario en Platzi // string   
    Edad // number
    Correo electrónico // integer
    Mayor de edad // boolean
    Dinero ahorrado // number
    Deudas //boolean


3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

    Nombre completo (nombre y apellido)
    Dinero real (dinero ahorrado menos deudas) */

    var nombre = jose;
    var apellido = lopez;
    var dineroahorrado = 14523;
    var deudas = 5404;

    var dineroReal = dineroahorrado - deudas
    console.log("El usuario "+ nombre + " " + apellido + " tiene la cantidad de dinero de sus ahorros menos sus deudas de: $" + dineroReal);

   /*  Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es una función?
    ¿Cuándo me sirve usar una función en mi código?
    ¿Cuál es la diferencia entre parámetros y argumentos de una función?

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

    const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."); */

const nombre = prompt("Cual es tu nombre?");
const lastname = prompt("Cual es tu apellido?)");
const completeName = nombre + " " + lastname;
const nickname = prompt("Escribe tu alias/nickname");

function escribirNombre (completeName, nickname){
    return console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`);

}

escribirNombre(completeName, nickname);

/* 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if: */

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion== "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

}
/* 
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

    💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
 */

if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");

}
if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

}
if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

}
if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

}

 var tipoDeSuscripciones = ["Free", "Basic", "Expert", "ExpertPLus"];

 

    


// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i;
while (i < 5){
    i++;
    console.log(`El valor de i es: ${i}`);
}

let i = 10;
while (i >= 2){
    i--;
    console.log(`El valor de i es: ${i}`);
}


/* 
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un array?

    ¿Qué es un objeto?
    ¿Cuándo es mejor usar objetos o arrays?
    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
 */
var cualquierArray = ['primerElemento', 'segundoElemento', 'tercerElemento'];

function getFirstElement(cualquierArray){
    return console.log(cualquierArray[0]);

}
getFirstElement(cualquierArray);

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

    function printAllElements(cualquierArray){
        for (let i=0; i<cualquierArray.length; i++){
            console.log(cualquierArray[i]);
        }
    }

    printAllElements(cualquierArray);

// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). 

    var cualquierObjeto = {
        laPrimerKey: 'laPrimerClave',
        laSegundaKey: 'laSegundaClave',
        laTercerKey: 'laTercerClave'
 
    };

    let arrayDeKeys = Object.keys(cualquierObjeto); 
    for (let i=0; i<arrayDeKeys.length; i++){
        let claroqueno = arrayDeKeys[i]; 
        console.log(cualquierObjeto[arrayDeKeys[i]]); 
        console.log(cualquierObjeto[claroqueno]); 
    }