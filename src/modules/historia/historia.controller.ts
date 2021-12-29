import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HistoriaService } from './historia.service';
import { HistoriaModel } from '../../models/Historia'
import { Result } from 'src/models/result';
import { VotoModel } from 'src/models/Voto';

@ApiTags('História')
@Controller('historia')
export class HistoriaController {
  constructor(
    private readonly historiaService: HistoriaService
    ) {}

  @Post()
  async adicionarHistoria(@Body() historia: HistoriaModel): Promise<HistoriaModel> {
    try{
      return this.historiaService.adicionarHistoria(historia);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar cadastro', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: HistoriaModel})
  @Put()
  async alterarHistoria(@Body() historia: HistoriaModel): Promise<HistoriaModel> {
    try{
      return this.historiaService.alterarHistoria(historia);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a alteração', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: HistoriaModel})
  @Delete(':id')
  async removerHistoria(@Param('id') id: string) {
    try{
      return this.historiaService.removerHistoria(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a renoção', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: HistoriaModel})
  @Get(':id')
  async buscarHistoriaPorId(@Param('id') id: string) {
    try{
      return this.historiaService.buscarHistoria(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a renoção', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: HistoriaModel})
  @Put(':id/votar')
  async adicionarVotoJogador(@Param('id') id: string, @Body() voto: VotoModel): Promise<HistoriaModel> {
    try{
      return await this.historiaService.adicionarVotoJogador(id, voto);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a alteração', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: HistoriaModel})
  @Put(':id/finalizar')
  async finalizarHistoria(@Param('id') id: string): Promise<HistoriaModel> {
    try{
      return await this.historiaService.finalizarHistoria(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a alteração', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: HistoriaModel})
  @Put(':id/reiniciar')
  async reiniciarVotacaoHistoria(@Param('id') id: string): Promise<HistoriaModel> {
    try{
      return await this.historiaService.reiniciarVotacaoHistoria(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel reiniciar votação', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }
  
}
