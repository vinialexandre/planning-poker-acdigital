import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MetodologiaService } from './metodologia.service';
import { MetodologiaModel } from '../../models/metodologia'
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
  
}
