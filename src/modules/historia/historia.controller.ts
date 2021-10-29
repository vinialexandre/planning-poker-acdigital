import { HistoriaService } from './historia.service';
import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { Result } from 'src/models/result';

@Controller('historia')
export class HistoriaController {
    constructor(
        private readonly historiaService: HistoriaService
        ) {}

    @Get(':id/historia/:aberta')
    async buscarHistoriasDaSala(@Param('id') id: string, @Param('aberta') emAberto: boolean) {
      try{
        // return this.historiaService.buscarHistoriasDaSala(id, emAberto);
        return "Nao implementado por enquanto"
      }catch(error){
        throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                                HttpStatus.BAD_REQUEST);
      }
    }
}
