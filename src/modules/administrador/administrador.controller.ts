import { AdministradorService } from './administrador.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Administrador as AdministradorModel} from '../../models/administrador'
import { ApiOkResponse } from '@nestjs/swagger';
import { Result } from 'src/models/result';
@Controller('administrador')
export class AdministradorController {
    constructor(
      private readonly administradorService: AdministradorService
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
  
}
