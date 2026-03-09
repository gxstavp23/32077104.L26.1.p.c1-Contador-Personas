import Cl_persona from "./Cl_persona.js"

export default class Cl_promedio{
    private cntPersonas: number;
    private cntHombre: number;
    private cntMujer: number;

    constructor(){
        this.cntPersonas = 0;
        this.cntHombre = 0;
        this.cntMujer =0;
    }

    procesarPersonas(p:Cl_persona): void{
        this.cntPersonas++
        if (p.sexo =="M") {
            this.cntHombre++}

        if (p.sexo =="F"){
            this.cntMujer++
        }
    }



    totalHombres():number{
        return this.cntHombre;
    }
    totalMujeres():number{
        return this.cntMujer;
    }

    
    totalPersonas():number{
        return this.cntPersonas
    }

    

}
