import { AdministradorService } from './administrador.service';
import { Body, Controller, Post } from '@nestjs/common';
import { Administrador } from 'src/models/Administrador';

@Controller('administrador')
export class AdministradorController {
    constructor(private readonly administradorService: AdministradorService) {}

    @Post()
    administrador(@Body() administrador: Administrador) {
        return 'ok';
    }
}
