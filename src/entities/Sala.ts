import { Historia } from './Historia';
import { Administrador } from './Administrador';
import { Jogador } from './Jogador';
import { Metodologia } from './Metodologia';
export class Sala {
    constructor(
        public nome: string,
        public metodologia?: Metodologia,
        public jogadores?: Jogador[],
        public administrador?: Administrador,
        public historias?: Historia[]
    ){
    }
}