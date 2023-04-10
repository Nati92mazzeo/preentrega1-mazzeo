
const precioCursoCompleto = 2500;
let nombreCurso = "";
let precioCurso = 0;
let costoTotal = 0;

function calcularCosto() {
    precioCurso = parseInt(prompt("ingresa la cantidad de cursos que desea comprar:"));
    nombreCurso = prompt("ingrese el curso de costura deseado (principiante o avanzado):");
    while (nombreCurso !== "principiante" && nombreCurso !== "avanzado") {
        nombreCurso = prompt("ingrese el curso de costura deseado (principiante o avanzado):");
    }
costoTotal = precioCurso * precioCursoCompleto;

if (nombreCurso  === "avanzado"){
costoTotal = costoTotal * 1.1;
}

alert ("El costo total es: " + costoTotal);
    
}

calcularCosto();
