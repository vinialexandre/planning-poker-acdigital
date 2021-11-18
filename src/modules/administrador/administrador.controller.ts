import { AdministradorService } from './administrador.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Administrador as AdministradorModel} from '../../models/administrador'
import { ApiOkResponse } from '@nestjs/swagger';
import { Result } from 'src/models/result';
import { Sala as SalaModel } from '../../models/sala'
import { SalaService } from '../sala/sala.service';


@Controller('administrador')
export class AdministradorController {
    constructor(
      private readonly administradorService: AdministradorService,
      private readonly salaService: SalaService
      ) {}

    @ApiOkResponse({type: AdministradorModel})
    @Post()
    async administrador(@Body() administrador: AdministradorModel): Promise<AdministradorModel> {
      try{
        return this.administradorService.criar(administrador);
      }catch(error){
        throw new HttpException(new Result('Não foi possivel realizar cadastro', false, null, error), 
                                HttpStatus.BAD_REQUEST);
      }
    }

    @Get(':administrador')
    buscar(@Param('administrador') email: string) {
      return this.administradorService.buscarUmAdministrador(email);
    }

    @ApiOkResponse({type: SalaModel})
    @Get(':administrador/salas')
    async buscarSalas(@Param('administrador') email: string): Promise<SalaModel[]> {
      try{
        return this.salaService.buscarSalas(email);
      }catch(error){
        throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                                HttpStatus.BAD_REQUEST);
      }
    }
  
}
