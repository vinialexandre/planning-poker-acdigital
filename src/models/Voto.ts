import { HistoriaModel } from './Historia';
import { JogadorModel } from './Jogador';
import { CartaModel } from "./Carta";
import { ApiProperty } from '@nestjs/swagger';

export class VotoModel { 
    @ApiProperty()
    carta: CartaModel

    @ApiProperty()
    jogador: JogadorModel

}