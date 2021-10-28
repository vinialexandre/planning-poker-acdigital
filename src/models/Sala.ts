import { Historia } from './historia';
import { Administrador } from './administrador';
import { Jogador } from './jogador';
import { Metodologia } from './metodologia';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class Sala {
    @ApiProperty()
    _id: string

    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @ApiProperty()
    metodologia?: Metodologia

    @ApiProperty()
    jogadores?: Jogador[]

    @ApiProperty()
    administrador?: Administrador

    @ApiProperty()
    historias?: Historia[]
}