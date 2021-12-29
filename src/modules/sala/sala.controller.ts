import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SalaService } from './sala.service';
import { SalaModel } from '../../models/Sala'
import { Result } from 'src/models/result';
import { HistoriaModel } from 'src/models/Historia';
import { JogadorModel } from 'src/models/Jogador';
import { HistoriaService } from '../historia/historia.service';

@ApiTags('Sala')
@Controller('sala')
export class SalaController {
  constructor(
    private readonly salaService: SalaService,
    private readonly historiaService: HistoriaService
    ) {}

  @ApiOkResponse({type: HistoriaModel})
  @Get(':id/historia/:emAberto')
  async buscarHistoriasdaSala(@Param('id') id: string, @Param('emAberto') emAberto: boolean): Promise<HistoriaModel[]> {
    try{
      return this.historiaService.buscarHistoriasdaSala(id, emAberto);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: SalaModel})
  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<SalaModel> {
    try{
      return this.salaService.buscarPorId(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  async adicionarSala(@Body() sala: SalaModel): Promise<SalaModel> {
    try{
      return this.salaService.adicionarSala(sala);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar cadastro', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: SalaModel})
  @Put()
  async alterarSala(@Body() sala: SalaModel): Promise<SalaModel> {
    try{
      return this.salaService.alterarSala(sala);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a alteração', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: SalaModel})
  @Delete(':id')
  async removerSala(@Param('id') id: string) {
    try{
      return this.salaService.removerSala(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: SalaModel})
  @Delete(':id')
  async remover(@Param('id') id: string) {
    try{
      return this.salaService.removerSala(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: SalaModel})
  @Put(':id/jogador')
  async adicionarjogador(@Param('id') id: string, @Body() jogador: JogadorModel): Promise<SalaModel> {
    try{
      return await this.salaService.adicionarJogador(id, jogador);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a alteração', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }
}
