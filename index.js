console.log("Hola Clase");



let clima= 'soleado';
let dia= 'domingo';
if(clima =='soleado' && dia == 'domingo'){
    console.log('Lindo dia para pasear')
}else if(clima == 'soleado' && dia == 'lunes'){
    console.log('podria salir igual')
}


function puedoIrAlBanco(diaDeLaSemana, horaActual) {
   
    return diaDeLaSemana == "Lunes" || diaDeLaSemana == "Martes" 
    || diaDeLaSemana == "Miercoles" || diaDeLaSemana == "Jueves" 
    || diaDeLaSemana == "Viernes" && horaActual >=10 && horaActual <=15 
    ? true : false;

}

puedoIrAlBanco('Lunes', 10)
console.log('banco martes 18')
console.log(puedoIrAlBanco('Martes', 18))
puedoIrAlBanco('Sábado', 11)
puedoIrAlBanco('Domingo',13)

function filosofoHipster(profesion, nacionalidad, km){
    return nacionalidad == "Argentina" && profesion == "Músico"
    && km >2 
       ? true :false;
}
console.log("filosofo da")
console.log(filosofoHipster("Músico", "Argentina", 5));





function esNumeroDeLaSuerte(n){
    return  n%2 == 0 || n%3 == 0 && n>0 && n!= 15   
       ? true :false;
}

console.log('es numero de la suerte')
let n = (-15);
console.log(esNumeroDeLaSuerte(n))

function puedoIrAlBanco(diaDeLaSemana, horaActual) {
   
    (diaDeLaSemana == 'Lunes' || diaDeLaSemana =='Martes' 
    || diaDeLaSemana == 'Miercoles' ||diaDeLaSemana == 'Jueves' 
    ||diaDeLaSemana == 'Viernes') && (horaActual >=10 && horaActual <= 15) ? true : false;

}
console.log('puedo ir al banco')
puedoIrAlBanco('Lunes', 10)
puedoIrAlBanco('Martes', 18)
puedoIrAlBanco('Domingo',13)



function estaEnEdad(edad, genero){
    if((edad >= 60 && genero =="F") || (edad >= 65 && genero =="M")){
    return true;
    }
    return false;
}

function tieneSuficientesAportes(aniosAporte){
    if(aniosAporte >= 30){
    return true;
    }
    return false;
}

console.log("esta en edad");
function puedeJubilarse(edad, genero, aniosAporte){
    return estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte)?true : false;
}

console.log(estaEnEdad(55,'F'))
console.log('anios de aporte')
console.log(puedeJubilarse(65,'F',30))


console.log('tiene afecciones o no .... ')

function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    if((alturaPersona <1.5 && vieneConCompania && !tieneAfeccionCardiaca) ||
        (alturaPersona >= 1.5 && !tieneAfeccionCardiaca))  
        {
            console.log(true)
        }else{
            console.log(false);
        }
}
puedeSubirse(1.1, false, false);

console.log('imprimir azul')
function imprimirAzul4(){
    for ( let i = 0 ; i < 4; i++ ){ 
        console.log ("Azul");
    }
}
for(let i = 0; i < 4; i++){
    imprimirAzul4()
}
let alumnos=["juan"]
console.log(alumnos[-1])

console.log('nombre completo')
function escribirCartelito(tit, nom, ape){
    return tit + " "+ nom + ' ' + ape
}

console.log(escribirCartelito("Dra.", "Ana", "Pérez"));
console.log(escribirCartelito('Dr.','Julio', 'Gelman'))

console.log('array indexOf')
function contiene(array, numero){
    return (array.indexOf(numero) >=0)
}
console.log(contiene([1,2,3],2))

console.log("Medallas")
function medallaSegunPuesto(valor){
    let arrayValor = ["Oro","Plata","Bronce","Seguí Participando"]
    for( var i=0; i<= arrayValor.length; i++)
       {
           if(valor == 1){
               return "Oro"
           }else if(valor == 2){
               return "Plata"
           }else if(valor == 3){
               return "Bronce"
           }else if(valor == 4){
               return "Seguí Participando"
           }else{
               return "Seguí Participando"
           }
       } 
}
console.log(medallaSegunPuesto(1))
function medallaSegunPuesto(valor){
    let arrayValor = ["Oro","Plata","Bronce","Seguí Participando"]
    for( var i=0; i<= arrayValor.length; i++)
       {
           if(valor == 1){
               return "Oro"
           }else if(valor == 2){
               return "Plata"
           }else if(valor == 3){
               return "Bronce"
           }else if(valor == 4){
               return "Seguí Participando"
           }else{
               return "Seguí Participando"
           }
       } 
}

console.log(medallaSegunPuesto(4))

console.log('pasando por i')
function pasandoPorI  (){
    for(var i=0; i<5; i++){
        console.log("acá i tiene el valor de "+ i)
    }
}
pasandoPorI()

console.log('suma pares')
function sumaDeLosParesDel0Al(numero) {
    let sumaPares = 0;

    for(let i = 0 ; i <= numero ; i++ ){ 
        if(i % 2 == 0){
            sumaPares = sumaPares + i;      
        }
    }
       return sumaPares; 
}
sumaDeLosParesDel0Al(6)

console.log("sumatoria")
function sumatoriaHasta(numero) {
    let suma = 0;
  
    for(let i = 0 ; i < numero ; i++ ){
            suma = suma + i;   
    }
       return suma;
 }
 console.log(sumatoriaHasta(4))

 console.log("Usain bolt")
 function caloriasDeTrote(cantVueltas) {
    let total = 0;
      for(let i = 1 ; i <= cantVueltas ; i++ ){
             total = total + (i * 5); 
     }
        return total;
  }
  console.log(caloriasDeTrote(2))

  console.log("Ganancia total")
  function gananciaTotal4 (unPeriodo){
    let gananciaTotal = 0;
     for(let i = 0 ; i < 4 ; i++ ){
        gananciaTotal = gananciaTotal + unPeriodo[i]
    }
       return gananciaTotal;
}
console.log(gananciaTotal4([2,3,4,5]))

console.log("cuantos meses")
function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length ;i++) {
      if(unPeriodo[i] >0){
        cantidad = cantidad + 1
      }
    }
    return cantidad;
  }
console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]) )  


console.log("Array naipes")
function naipes (unPalo) {
    let arrayNaipes=[];
    for (let i = 1; i <= 12 ;i++) {
      if((i != 8) && (i !=9)){
        
        arrayNaipes.push(i+' ' + 'de ' + unPalo)
      }
    }
    return arrayNaipes;
  }
  console.log(naipes("oro"))

console.log("array con texto en partes")
let frase = ["h","o","l","a"]

function acumularTexto(arrayFrase){
    acumulador = "" 
    for(let i = 0; i <arrayFrase.length;i++){
        acumulador = acumulador + arrayFrase[i]
    }
    return acumulador
}
console.log(acumularTexto(frase))

console.log("factorial")
function factorial(numero){
    let factorial = 1;
    if(numero > 0){
        for(let i=numero; i>0; i--){
            factorial = factorial * i 
        }
    }
    return factorial
}
console.log(factorial(4))

console.log("Productoria")

function productoria(array){
    let productoria_tot = 1;
    for(let i = 0; i < array.length;i++){
        productoria_tot = productoria_tot * array[i]
    }
    return productoria_tot
}
console.log(productoria([1, 2, 7]))


console.log("Altura del Arbol")
function alturaArbolUtopico(cantidadCiclos){
    let altura = 1
        for(let i=1; i<= cantidadCiclos; i++){
            if(i % 2 ==1){
                altura = altura *2
            }else{
                altura = altura + 1
            }
    }
    return altura;
}

console.log(alturaArbolUtopico(3))

console.log("Array Fracciones")
function masMenos(arrayNumeros){
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    let total = 0;
    let arrayFracciones = [];

    for(let i=0; i<= arrayNumeros.length; i++){
        if(arrayNumeros[i]>0){
            positivos = positivos + 1
            console.log("positivo")
            console.log(positivos)
        }else if(arrayNumeros[i]<0){
            negativos = negativos + 1
            console.log("negativo")
            console.log(negativos)
        }else if(arrayNumeros[i]==0){
            ceros = ceros + 1
            console.log("cero")
            console.log(ceros)
        }
    }
    total = positivos + negativos + ceros;
    console.log("total")
    console.log(total)
    positivos = positivos/total
    negativos = negativos/total
    ceros= ceros/total
    arrayFracciones.push(positivos)
    arrayFracciones.push(ceros)
    arrayFracciones.push(negativos)
    return arrayFracciones
}
console.log(masMenos([0,0,0,0,-2,-3,-4,-5]))

console.log("Clasifiaciones")
let clasificaciones= ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
console.log(clasificaciones);
let Celia = clasificaciones[3];
clasificaciones[3] = "Raul";
clasificaciones[2] = "Celia";
clasificaciones.pop();
clasificaciones.splice(2, 0,"Roberto","Amaya");
clasificaciones.unshift("Marta");
console.log(clasificaciones); 


console.log("Ejercicios con arrays")

let colores = ["verde", "rojo", "azul", "amarillo", "naranja"];
console.log(colores[3].charAt(5))


let nombre = "Programación" + " Fácil.";
let saludo = "Os doy la bienvenida a ";
console.log('"Programación" + " Fácil."'+' "Os doy la bienvenida a "')


let frase1 = ["posiciones", "se cuentan", "Las", "array", "cero.",
 "a partir", "del"];

let concatenadas = frase1[5] +' ' + frase1[6] +' '+ frase1[4]+' ' + frase1[1] +' '+ frase1[2]+' '
+frase1[0] +' '+ frase1[6]+' ' + frase1[3]
console.log(concatenadas)


//pruebas para examen 
let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";

let sumaNumeros = Number(numeroString1) + Number(numeroString2) + Number(numeroString3);
console.log(sumaNumeros);