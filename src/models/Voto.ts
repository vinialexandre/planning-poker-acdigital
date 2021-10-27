import { Historia } from './historia';
import { Jogador } from './jogador';
import { Carta } from "./carta";
import { ApiProperty } from '@nestjs/swagger';

export class Voto { 
    @ApiProperty()
    carta: Carta

    @ApiProperty()
    jogador: Jogador

    @ApiProperty()
    historia: Historia
}