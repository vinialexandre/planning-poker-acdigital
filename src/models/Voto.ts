import { HistoriaModel } from './historia';
import { JogadorModel } from './jogador';
import { CartaModel } from "./carta";
import { ApiProperty } from '@nestjs/swagger';

export class VotoModel { 
    @ApiProperty()
    carta: CartaModel

    @ApiProperty()
    jogador: JogadorModel

}