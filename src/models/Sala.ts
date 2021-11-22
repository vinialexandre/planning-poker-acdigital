import { AdministradorModel } from './administrador';
import { JogadorModel } from './jogador';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SalaModel {
    @ApiProperty()
    _id?: string

    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @ApiProperty()
    jogadores?: JogadorModel[]

    @ApiProperty()
    administrador: AdministradorModel
}