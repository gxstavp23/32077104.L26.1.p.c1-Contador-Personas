import Cl_persona from "./Cl_persona.js";
import Cl_contador from "./Cl_contador.js"

const persona1: Cl_persona = new Cl_persona("Luisa","F");
const persona2: Cl_persona = new Cl_persona("Ana","F");
const persona3: Cl_persona = new Cl_persona("Jose","M");
const persona4: Cl_persona = new Cl_persona("Carmen","F");
const persona5: Cl_persona = new Cl_persona("Rosa","F");
const persona6: Cl_persona = new Cl_persona("Jose","M");
const persona7: Cl_persona = new Cl_persona("Maria","F");
const persona8: Cl_persona = new Cl_persona("Luz","F");
const persona9: Cl_persona = new Cl_persona("Rafael","M");
const persona10: Cl_persona = new Cl_persona("Luz","F");
const persona11: Cl_persona = new Cl_persona("Marcos","M");
const persona12: Cl_persona = new Cl_persona("Leo","M");

const contador: Cl_contador = new Cl_contador();


contador.procesarPersonas(persona1);
contador.procesarPersonas(persona2);
contador.procesarPersonas(persona3);
contador.procesarPersonas(persona4);
contador.procesarPersonas(persona5);
contador.procesarPersonas(persona6);
contador.procesarPersonas(persona7);
contador.procesarPersonas(persona8);
contador.procesarPersonas(persona9);
contador.procesarPersonas(persona10);
contador.procesarPersonas(persona11);
contador.procesarPersonas(persona12);


let body = document.getElementById("body");

if (body) body.innerHTML = `Cantidad de personas:${contador.totalPersonas()}
    <br> Cantidad Hombres:${contador.totalHombres()}
    <br> Cantidad Mujeres:${contador.totalMujeres()}`;