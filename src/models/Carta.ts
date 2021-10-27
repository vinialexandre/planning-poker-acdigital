import { ApiProperty } from '@nestjs/swagger';
import { TipoDeCarta } from './enum/tipo.carta.enum';
export class Carta { 
    @ApiProperty()
    tipo: TipoDeCarta

    @ApiProperty()
    valor: string | number
}