export default class Cl_promedio {
    constructor() {
        this.cntPersonas = 0;
        this.cntHombre = 0;
        this.cntMujer = 0;
    }
    procesarPersonas(p) {
        this.cntPersonas++;
        if (p.sexo == "M") {
            this.cntHombre++;
        }
        if (p.sexo == "F") {
            this.cntMujer++;
        }
    }
    totalHombres() {
        return this.cntHombre;
    }
    totalMujeres() {
        return this.cntMujer;
    }
    totalPersonas() {
        return this.cntPersonas;
    }
}
