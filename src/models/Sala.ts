import { AdministradorModel } from './Administrador';
import { JogadorModel } from './Jogador';
import { MetodologiaModel } from './Metodologia';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SalaModel {
  @ApiProperty()
  id?: string;

  @IsNotEmpty()
  @ApiProperty()
  nome: string;

  @ApiProperty()
  jogadores?: JogadorModel[];

  @ApiProperty()
  administrador: AdministradorModel;

  @ApiProperty()
  revelarVotos: boolean = false;

  @ApiProperty()
  metodologiaSelecionada: string;
}
