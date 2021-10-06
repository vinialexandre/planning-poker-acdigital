import { TipoDeCarta } from './TipoDeCarta';
export class Carta { 
    constructor(
        public tipo: TipoDeCarta,
        public valor: string | number
    ){
    }
}