import { Administrador } from './administrador';
import { Jogador } from './jogador';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Sala {
    @ApiProperty()
    _id?: string

    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @ApiProperty()
    jogadores?: Jogador[]

    @ApiProperty()
    administrador: Administrador

  
}