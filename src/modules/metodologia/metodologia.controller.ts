import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MetodologiaService } from './metodologia.service';
import { MetodologiaModel } from '../../models/Metodologia'
import { Result } from 'src/models/result';

@ApiTags('Métologia')
@Controller('metodologia')
export class MetodologiaController {
  constructor(
    private readonly metodologiaService: MetodologiaService
    ) {}

  @ApiOkResponse({type: MetodologiaModel})
  @Get()
  async buscar(): Promise<MetodologiaModel> {
    try{
      return this.metodologiaService.buscarMetodologia();
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: MetodologiaModel})
  @Post()
  async adicionarMetodologia(@Body() metodologia: MetodologiaModel): Promise<MetodologiaModel> {
    try{
      return this.metodologiaService.adicionarMetodologia(metodologia);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a alteração', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: MetodologiaModel})
  @Put()
  async alterarMetodologia(@Body() metodologia: MetodologiaModel): Promise<MetodologiaModel> {
    try{
      return this.metodologiaService.alterarMetodologia(metodologia);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a alteração', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: MetodologiaModel})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    try{
      return await this.metodologiaService.remover(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a alteração', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }
  
}
