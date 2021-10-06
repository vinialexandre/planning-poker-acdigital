import { Voto } from "./Voto"

export class Historia {
    constructor(
        public nome: string,
        public votos: Voto[],
        public emAberto: boolean,
        public dataHora: string
    ){
    }
}