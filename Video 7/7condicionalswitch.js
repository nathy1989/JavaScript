//let num = 2;
/*Sintaxis Simple*/
/* switch(num){
    case 1: console.log(`${num} tiene el valor de 1`);
    break;
    case 2: console.log(`${num} tiene el valor de 2`);
    break;
    default: console.log(`${num} no vale ni 1 ni 2`);
} */
/*Sintaxis múltiple*/
let num = 2;
switch(num){
    case 1:
    case 3:
    case 5:
    console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    console.log(`${num} es par`);
}

