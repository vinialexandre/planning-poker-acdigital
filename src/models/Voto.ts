import { Historia } from './Historia';
import { Jogador } from './Jogador';
import { Carta } from "./Carta";

export class Voto { 
    constructor(
        public carta: Carta,
        public jogador: Jogador,
        public historia: Historia
    ){}
}